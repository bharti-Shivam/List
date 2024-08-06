import Product from './Component/Product';
import './App.css';

function App() {

  const Items = [
    {
      id : 1,
      itemName : "Wheatflour",
      amount : 400,
      date : new Date(2024 ,2, 15)
    },
    {
      id : 1,
      itemName : "Wheatflour",
      amount : 400,
      date : new Date(2024 ,2, 15)
    },
    {
      id : 1,
      itemName : "Wheatflour",
      amount : 400,
      date : new Date(2024 ,2, 15)
    },
    {
      id : 1,
      itemName : "Wheatflour",
      amount : 400,
      date : new Date(2024 ,2, 15)
    }
  ];

  return (
    <div className="APP">
      <Product item={Items}/>
    </div>
  );
}

export default App;
