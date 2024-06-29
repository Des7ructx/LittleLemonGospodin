import { Link } from 'react-router-dom';
import foodHome from './assets/foodhome.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a traditional family owned Mediterranean restaurant that keeps the old spirit alive
            with a contemporary twist.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={foodHome} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
