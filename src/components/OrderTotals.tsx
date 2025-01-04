import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderAction } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderAction>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tipAmount, subtotalAmount])

    return (
        <>
            <div className="space-y-2">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p className="italic">Subtotal a pagar: {''}
                    <span className="font-bold text-green-600">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p className="italic">Propina: {''}
                    <span className="font-bold text-green-600">{formatCurrency(tipAmount)}</span>
                </p>

                <p className="italic">Total a Pagar: {''}
                    <span className="font-bold text-green-600">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-blue-600 p-3 uppercase rounded-lg text-white font-bold"
                onClick={() => dispatch({type: 'place-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}
