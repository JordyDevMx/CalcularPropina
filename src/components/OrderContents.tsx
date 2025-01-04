import { Dispatch } from "react";
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { FaRegTrashAlt } from "react-icons/fa";
import { OrderAction } from "../reducers/order-reducer";

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderAction>
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
    return (
        <div>
            <h2 className=' font-black text-4xl'>Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.map(item => (
                    <div 
                        key={item.id} 
                        className="flex justify-between border-b py-4"
                    >
                        <div>
                            <p className="text-lg ">
                                {item.name} - {formatCurrency( item.price )}
                            </p>
                            <p className="font-black">
                                Cantidad: <span className="text-blue-500">{item.quantity}</span> | <span className="text-green-600">{formatCurrency(item.price * item.quantity)}</span>
                            </p>
                        </div>

                        <button
                            className="text-red-600 text-2xl"
                            onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </div>
                    ))}
            </div>
        </div>
    )
}
