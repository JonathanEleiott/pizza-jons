const container = document.querySelector(`#root`);

const App = () => {
  const [numberOfOrders, setNumberOfOrders] = React.useState(0);
  const [pizzas, setPizzas] = React.useState([]);

  const orderPizza = () => {
    setNumberOfOrders(numberOfOrders + 1);
  }

  React.useEffect(() => {
    setPizzas([
      {
        id: 1,
        name: `Pepperoni`,
        toppings: [
          `cheese`,
          `pepperoni`
        ]
      },
      {
        id: 2,
        name: `Hawaiian`,
        toppings: [
          `pineapple`,
          `canadian bacon`,
          `white onions`
        ]
      },
      {
        id: 3,
        name: `Canadian`,
        toppings: [
          `poutine`,
          `maple leaf`,
          `syrup`
        ]
      }
    ])
  }, [])
  

  return (
    <>
      <h1>Pizza Jon's</h1>
      <h3># of Pizza Orders: {numberOfOrders}</h3>

      <ul>
        {
          pizzas.map((singlePizza) => {
            return (
              <Pizza 
                singlePizza={singlePizza}
                creator='Jon'
                orderPizza={orderPizza}
              />
            )
          })
        }
      </ul>
    </>
  )
}

const Pizza = ({singlePizza, creator, orderPizza}) => {  
  return (
    <>
      <h3 key={singlePizza.id}>{singlePizza.name}</h3>
      <h5>Creator: {creator}</h5>
      {
        singlePizza.toppings.map((topping) => {
          return <li key={topping}>{topping}</li>
        })
      }
      <button onClick={orderPizza}>Order Pizza</button>
    </>
  )
}

const root = ReactDOM.createRoot(container);
root.render(<App />);