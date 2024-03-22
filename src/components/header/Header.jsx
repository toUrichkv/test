import './header.css'
import { NavLink } from 'react-router-dom'

const setActive = ({isActive}) => isActive ? 'active-link' : ''

function Header() {
    const links = [
    {
        to: '/test',
        text: 'Main' 
    }, 
    {
        to: '/about',
        text: 'About'
    }, 
    {
        to: '/contacts',
        text: 'Contacts'
    }, 
    {
        to: '/basket',
        to: '/basket:id',
        text: 'Basket'
    }]

    return (
        <header>
            {
                links.map( (item,index) => {
                    return <NavLink key={index} to={item.to} className={setActive}>{item.text}</NavLink>
                })
            }
        </header>
    )
}

export default Header