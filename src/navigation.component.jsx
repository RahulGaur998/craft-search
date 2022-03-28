import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import { Outlet } from 'react-router-dom';
import mainlogo from './logo.png';

const Navigation = () => {
    return(
        <Fragment>
<           div className='navigation'>
                <Link className='logo-container' to='/'>
                <img src={mainlogo} alt='' />
                </Link>
            <div className='nav-links-container'>
                 <Link className='nav-link' to='/'>
                Products
                 </Link>
                <Link className='nav-link' to='/'>
                Solutions
                </Link>
                <Link className='nav-link' to='/'>
                Resources
                 </Link>
                <Link className='nav-link' to='/'>
                Company
                </Link>
                <Link className='nav-link' to='/'>
                Contact Us
                </Link>
            </div>   
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;