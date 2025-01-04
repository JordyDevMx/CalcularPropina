import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderAction } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderAction>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
    return (
        <button
            className=" border-2 rounded-lg border-blue-500 hover:bg-blue-300 w-full p-2 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className=" font-bold">${item.price}</p>
        </button>
    )
}

