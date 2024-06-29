import chefs1 from './assets/cooks1.jpg';
import chefs2 from './assets/cooks2.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        In the heart of a bustling city, nestled among cobblestone streets and bougainvillea-draped terraces,
         lies a haven where time-honored traditions and culinary delights converge.
          <p>Welcome to "Little Lemon" a Mediterranean restaurant steeped in the rich heritage of a traditional family.</p>

<p>As the sun dips low over the horizon, casting a warm glow across whitewashed walls adorned with vine motifs, the aroma of freshly baked bread and slow-simmered sauces beckons passersby.</p>
 <p>Inside, the atmosphere is vibrant yet intimate, with aged oak tables adorned with checkered cloths, each one bearing the marks of countless shared meals and animated conversations.</p>
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefs1} alt="Chefs1" />
        <img src={chefs2} alt="Chefs2" />
      </div>
    </section>
  );
};

export default OurStory;
