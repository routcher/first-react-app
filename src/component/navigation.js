import React ,{Component} from 'react';
import './navigation.css';

class Navigation extends Component 
{


    render()
    {
        const items = this.props.items;
        const GetItem = items.map(item =>
        {
           return (
            <li key={Math.random() * items.length}><a href={item.navlinks}>{item.NavLinksLabel}</a></li>
           ) ;
        });
        return (
            <nav>
                <a href={this.props.LogoUrl} className='logo'>{this.props.LogoName}</a>
                <ul>{GetItem}</ul>
            </nav>
        );
    }
}
export default Navigation;