import './Nutrition.css';
import AppointmentForm from '../components/AppointmentForm';

const nutritionData = [
  {
    title: 'Fat Loss',
    image: '/images/fat.webp',
    foods: ['Chia Seeds', 'Kiwis', 'Chicken Breast', 'Water!'],
  },
  {
    title: 'Gut Health',
    image: '/images/ginger.jpg',
    foods: ['Ginger', 'Greek Yogurt', 'Bananas', 'Broccoli'],
  },
  {
    title: 'Anti-Inflammation',
    image: '/images/anti.jpg',
    foods: ['Berries', 'Almonds', 'Chia Seeds', 'Dark Chocolate'],
  },
  {
    title: 'For the Gym',
    image: '/images/gym.jpg',
    foods: ['Chicken Breast', 'Eggs', 'Rice', 'Greek Yogurt'],
  },
  {
    title: 'My Favourites',
    image: '/images/fav.jpg',
    foods: ['Eggs', 'Kiwis', 'Chia Seeds', 'Chicken Breast'],
  },
];

const Nutrition = () => {
  return (
    <div className="nutrition-container">
      <h1 className="page-title">Nutrition Guide</h1>
      <div className="nutrition-grid">
        {nutritionData.map((section, index) => (
          <div
            key={index}
            className="nutrition-card"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="nutrition-card-overlay" />
            <div className="nutrition-card-content">
              <h2 className="nutrition-title">{section.title}</h2>
            </div>
            <div className="nutrition-hover-overlay">
              <ul className="food-list">
                {section.foods.map((food, i) => (
                  <li key={i}>{food}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <AppointmentForm service="Nutrition Planning" />
    </div>
  );
};

export default Nutrition;