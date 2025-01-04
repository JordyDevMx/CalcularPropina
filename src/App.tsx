import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const currentYear = new Date().getFullYear();
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-sky-500 py-4 px-4">
        <h1 className=" text-center text-4xl font-bold">Calculando la propina y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8">

        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menú</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map(item =>(
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className=" shadow-xl p-5 rounded-lg space-y-10">

          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacía</p> 
          )}
        </div>
        
      </main>

      <footer className="bg-blue-700 p-4 text-center">
        <p className="text-2xl text-white">&copy; {currentYear} <a className="font-black" href="https://jordyweb.site/" target="blank" rel="noopener noreferrer">JordyDev</a> | Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
