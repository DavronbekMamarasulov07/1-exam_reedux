import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Button } from 'antd';
import { v4 as uuid } from 'uuid';
import Container from '../../components/container/Container';
import Nav from '../../components/nav/Nav';
import Title from 'antd/es/typography/Title';
import CartProducts from '../../components/cart_products/CartProducts';

const Cart = () => {
    const cartItems = useSelector(state => state);
    const [countCart, setCountCart] = useState(2)

    let step = 1
    
    return (
        <>
            <Nav />
            <div className='min-h-screen flex mt-[100px] justify-center w-full'>
                <Container>
                    <div className='w-full flex flex-col gap-4'>
                        {cartItems.length === 0 ? (
                            <p className='text-center mt-[200px]'>Your cart is empty.</p>
                        ) : (
                            <>
                                <div className='mt-5 bg-white rounded-xl overflow-hidden shadow-md'>
                                    <div className='flex bg-gray-300 py-2 px-4'>
                                        <div className='flex-1 text-center'>Image</div>
                                        <div className='flex-1 text-center'>Name</div>
                                        <div className='flex-1 text-center'>Price</div>
                                        <div className='flex-1 text-center'>Quantity</div>
                                        <div className='flex-1 text-center'>Total</div>
                                        <div className='flex-1 text-center'>Remove</div>
                                    </div>
                                    {cartItems?.slice(0, step * countCart).map(item => (
                                        <CartProducts key={uuid()} item={item}   />
                                    ))}
                                </div>
                                <div className='w-full text-right mt-5'>
                                    <Title className='py-2 px-6 inline border-2  border-dashed  border-sky-500 ' level={3}>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</Title>
                                </div>
                            </>
                        )}


                        {
                            cartItems.length >= 3 && (
                                <Button type="primary" onClick={() => {
                                    setCountCart(countCart + 1) 
                                }} className='w-full max-w-[300px] m-auto mt-[30px] mb-[100px]'>Show Cart</Button>
                            )
                        }

                    </div>

                </Container>
            </div>

           
        </>
    );
};


export default Cart;
