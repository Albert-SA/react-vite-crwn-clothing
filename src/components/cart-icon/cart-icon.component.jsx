import { useContext } from 'react';

import './cart-icon.styles.scss'

import { CartContext } from '../../contexts/cart.context';
import ShoppingLogo from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
            <img src={ShoppingLogo} className='shopping-icon' />
            <span className='item-count'>{ cartItemCount }</span>
        </div>
    )
}

export default CartIcon;