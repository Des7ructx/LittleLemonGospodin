import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'John Cage',
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `I found the traditional setting amazing, food was delicious, app was easy to navigate`,
  },
  {
    fullName: 'Tyler Stevenson',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Very cozy place with a nice atmosphere, perfect for a break from work`,
  },
  {
    fullName: 'Zoe Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 0.5, 0.5],
    says: `Everything was very smooth, only took away some points, because it was very full with people`,
  },
  {
    fullName: 'Chun Lee',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Absolutely lovely place, definitely recommend for a relaxing time`
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
