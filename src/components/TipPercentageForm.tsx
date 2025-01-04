import type { Dispatch } from "react"
import { OrderAction } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderAction>
    tip: number
}

export default function TipPercentageForm({dispatch, tip} : TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl mb-3">Propina:</h3>

            <form>
                {tipOptions.map(tipOption =>(
                    <div key={tipOption.id} className="flex gap-2 ">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            id={tipOption.id}
                            type="radio"
                            name="tipOption"
                            value={tipOption.value}
                            onChange={e => dispatch({type: 'add-tip', payload: {value: +e.target.value}}) }
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
