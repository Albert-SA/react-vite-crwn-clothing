import { useDispatch, useSelector } from 'react-redux';

import './cart-icon.styles.scss'

import {
    selectCartCount,
    selectIsCartOpen,
  } from '../../store/cart/cart.selector';
  import { setIsCartOpen } from '../../store/cart/cart.action';
import ShoppingLogo from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <img src={ShoppingLogo} className='shopping-icon' />
            <span className='item-count'>{ cartCount }</span>
        </div>
    )
}

export default CartIcon;