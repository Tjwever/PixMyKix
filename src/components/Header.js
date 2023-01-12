import './Header.css'
import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <>
            <header>
                <h1><Link to={'/'}>PixMyKix</Link></h1>
                <img src={`${process.env.PUBLIC_URL}/assets/images/shoe.jpg`} />
                <ul>
                    <li><Link to={'/shoes'}>All the shoes</Link></li>
                    {/* <li>Sign In</li>
                    <li>Sign up</li> */}
                </ul>
            </header>
                {props.children}
        </>
    )
}
