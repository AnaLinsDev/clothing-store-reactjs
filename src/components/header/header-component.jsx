import React from 'react';
import {connect} from 'react-redux';
import './header-styles.scss'
import { Link } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo} from "../../assets/crown.svg"
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/user.selector'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({currentUser, hidden}) => (
    <div className='header'> 
    <Link to="/" className="logo-container">
        <Logo className="logo"/>
    </Link>
    <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        {
            currentUser ? 
            <Link className='option'  to='/' onClick={()=> auth.signOut()}>SIGN OUT</Link>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
    </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header)