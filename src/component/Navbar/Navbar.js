import React, {useState,useEffect} from 'react'
import './Navbar.css';
const Navbar = () => {
    const navItem = ['Home','TV Shows','Movies','Latest','My List'];
    const [scroll,setScroll] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>
            window.pageYOffset > 75 ? setScroll(true) : setScroll(false);
        
        const onScroll = window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',onScroll);
        }
    },[]);

    let Nav = ['nav'];
    if(scroll)
    {
        Nav.push('nav__background-scroll');
    }else{
        Nav.push('nav__background-init');
    }
    return (
        <nav className={Nav.join(' ')} >
            <ul className="nav__left">
                <li>
                    <img src="/netflix.png" alt="netflix" className="netflix__logo"/>
                </li>
                {
                    navItem.map((item)=>{
                        return(
                            <li key={item}>
                                <a href="/">{item}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="nav__right">
                <li>
                    <a href="/">Search</a>
                </li>
                <li>
                    <a href="/">Search</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
