import { Button } from "antd";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const CartProducts = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    


    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDeleteProduct = (item) => {
        dispatch({ type: "REMOVE_FROM_CART", item })
        toast.error("Product deleted successfully");
    };

    return (
        <div  className='flex items-center border-b border-gray-300 py-5 px-2'>
            <div className='flex-1 text-center flex items-center justify-center'><img src={item.image} alt={item.title} className='w-24 h-24 object-contain' /></div>
            <div className='flex-1 text-center'>{item.title}</div>
            <div className='flex-1 text-center'>${item.price.toFixed(2)}</div>
            <div className='flex-1 text-center'>
                <div className="flex items-center justify-center">
                    <button
                        className="py-1 px-4 text-xl flex items-center justify-center bg-sky-400 text-white rounded-lg"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <strong className="px-3 text-2xl">{quantity}</strong>
                    <button
                        className="py-1 px-4 text-xl flex items-center justify-center   bg-sky-400 text-white rounded-lg"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className='flex-1 text-center'>${(item.price * quantity).toFixed(2)}</div>
            <div className='flex-1 text-center'><Button type="primary" danger onClick={() => {
                handleDeleteProduct(item.id)
            }}>Remove <BsFillTrashFill /></Button></div>
        </div>
    )
}

export default CartProducts
