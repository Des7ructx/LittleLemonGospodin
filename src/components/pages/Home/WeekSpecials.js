import { Link } from 'react-router-dom';
import pastelDeNata from './assets/pasteldenata.jpg';
import spanishPaella from './assets/spanishpaella.jpg';
import tortaCaprese from './assets/tortacaprese.jpg';
import './WeekSpecials.css';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Spanish Paella',
    image: spanishPaella,
    price: '$15.99',
    description: `This delicious Spanish Paella recipe is a wonderful dish made with bomba rice, savory veggies and spices, and plenty of protein in the form of chicken, sausage, and mixed seafood.`,
  },
  {
    name: 'Pastel De Nata',
    image: pastelDeNata,
    price: '$9.99',
    description: `Pasteis de nata, or Portuguese custard tarts, with their signature flaky crust and sweet custard filling are world-famous, and incredibly delicious.`,
  },
  {
    name: 'Torta Caprese',
    image: tortaCaprese,
    price: '$10.00',
    description: `Torta caprese is a flourless Italian cake made with chocolate and either almonds or hazelnuts. Named for the island of Capri from which it originates, the cake is widely known and especially popular in nearby Naples, Italy.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
