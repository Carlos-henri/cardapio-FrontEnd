import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';

function App() {
  const data: FoodData[] = [];

  return (
    <div className="container">
      <h2>Cardapio</h2>
      <div className="card-grid">
        {data.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />)}
      </div>
    </div>
  )
}

export default App
