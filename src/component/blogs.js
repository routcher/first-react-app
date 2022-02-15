import React ,{Component} from 'react';
import './blogs.css';
import Axios from 'axios';
class Products extends Component 
{
    state = 
    {
        items : [],
        IsLoaded :false,
        size : 8 
    }

    componentDidMount()
    {
        Axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => 
            {
                this.setState ({
                    items : res.data ,
                    IsLoaded : true ,
                })
            })
    }

    LoadMorePosts ()
    {
        return (
            this.state.items.slice(0,this.state.size)
        )
    }

    render ()
    {

        const GetPosts = this.LoadMorePosts ().map(item =>
            {
                return (
                    <div className='post' key={item.id}>
                        <div className='image'><img src={item.thumbnailUrl} alt={item.title}/></div>
                        <h3>{item.title}</h3>
                        <p>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <a href="/blogs" className='btn-read'>read more</a>
                    </div>
                    )
            }) 
            const UpSize = ()=> 
            {
                this.setState({size : this.state.size + this.state.size});
                this.LoadMorePosts ();
            }
        return (
            <div className='container'>     
                    <div className='special-title'>Posts</div>
                    <div className='Posts-Container'>      
                    { 
                        (this.state.IsLoaded) ?   GetPosts  : <div className='loading'> Please wait we laoding your posts <span></span></div> 
                    }                      
                        {(this.state.IsLoaded) && <button onClick={UpSize} className='btn-more'>load more</button>} 
                    </div>
                    
            </div>
        )
    }
}
export default Products ;