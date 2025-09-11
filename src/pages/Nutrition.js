import React, { useMemo, useState } from 'react';
import './Nutrition.css';
import AppointmentForm from '../components/AppointmentForm';

const Nutrition = () => {
  // Lightweight calculators for personalization
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(175);
  const [age, setAge] = useState(25);
  const [sex, setSex] = useState('male'); // male | female
  const [activity, setActivity] = useState(1.55); // default moderate
  const proteinLow = useMemo(() => Math.round(Number(weightKg) * 1.6), [weightKg]);
  const proteinHigh = useMemo(() => Math.round(Number(weightKg) * 2.2), [weightKg]);
  const waterMl = useMemo(() => Math.round(Number(weightKg) * 32), [weightKg]); // 30–35 ml/kg
  const bmr = useMemo(() => {
    const w = Number(weightKg);
    const h = Number(heightCm);
    const a = Number(age);
    if (!w || !h || !a) return 0;
    const base = 10 * w + 6.25 * h - 5 * a;
    return Math.round(sex === 'male' ? base + 5 : base - 161);
  }, [weightKg, heightCm, age, sex]);
  const maintenance = useMemo(() => Math.round(bmr * Number(activity) || 0), [bmr, activity]);
  const cutKcal = useMemo(() => (maintenance ? maintenance - 300 : 0), [maintenance]);
  const bulkKcal = useMemo(() => (maintenance ? maintenance + 300 : 0), [maintenance]);

  const foodSections = [
    { title: 'Fat Loss', image: '/bowen/images/fat.webp', foods: ['Chia Seeds', 'Kiwis', 'Chicken Breast', 'Water!'] },
    { title: 'Gut Health', image: '/bowen/images/ginger.jpg', foods: ['Ginger', 'Greek Yogurt', 'Bananas', 'Broccoli'] },
    { title: 'Anti-Inflammation', image: '/bowen/images/anti.jpg', foods: ['Berries', 'Almonds', 'Chia Seeds', 'Dark Chocolate'] },
    { title: 'For the Gym', image: '/bowen/images/gym.jpg', foods: ['Chicken Breast', 'Eggs', 'Rice', 'Greek Yogurt'] },
    { title: 'My Favourites', image: '/bowen/images/fav.jpg', foods: ['Eggs', 'Kiwis', 'Chia Seeds', 'Chicken Breast'] },
  ];

  return (
    <div
      className="nutrition-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.74), rgba(255,255,255,0.78)), url('/bowen/images/nutrition_bg.webp')",
      }}
    >
      <h1 className="page-title">Nutrition Guide</h1>

      {/* Hero */}
      <div className="nutrition-hero" style={{ backgroundImage: "url('/bowen/images/nutrition_bg.webp')" }}>
        <div className="nutrition-hero-overlay">
          <h2 className="nutrition-hero-title">Eat Well. Perform Better.</h2>
          <p className="nutrition-hero-sub">Simple, evidence‑based habits for body composition and health.</p>
        </div>
      </div>

      {/* Foundations */}
      <section className="section">
        <h2 className="section-title">Foundations</h2>
        <div className="grid-columns">
          <div className="card">
            <h3>Energy Balance</h3>
            <ul className="list">
              <li>Fat loss: consistent calorie deficit (≈ 300–500 kcal/day).</li>
              <li>Maintenance: eat to match activity and hunger.</li>
              <li>Muscle gain: small surplus (≈ 200–300 kcal/day).</li>
            </ul>
          </div>
          <div className="card">
            <h3>Macronutrients</h3>
            <ul className="list">
              <li><span className="badge">Protein</span> {`1.6–2.2 g/kg`} bodyweight daily.</li>
              <li><span className="badge">Carbs</span> fuel training and recovery; favor fiber‑rich sources.</li>
              <li><span className="badge">Fats</span> 20–35% of calories; prioritize unsaturated fats.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Micros & Fiber</h3>
            <ul className="list">
              <li>2 servings fruit + 3+ servings veg per day.</li>
              <li>Fiber target: 25–38 g/day, or ≈14 g/1000 kcal.</li>
              <li>Consider a basic multi and omega‑3 if intake is low.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Targets */}
      <section className="section">
        <h2 className="section-title">Personal Targets</h2>
        <div className="calculator">
          <div className="controls-grid">
            <div className="control">
              <label htmlFor="weight">Weight (kg)</label>
              <input id="weight" type="number" min="35" max="200" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
            <div className="control">
              <label htmlFor="height">Height (cm)</label>
              <input id="height" type="number" min="120" max="220" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} />
            </div>
            <div className="control">
              <label htmlFor="age">Age</label>
              <input id="age" type="number" min="14" max="90" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="control">
              <label htmlFor="sex">Sex</label>
              <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="control">
              <label htmlFor="activity">Activity</label>
              <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value={1.2}>Sedentary</option>
                <option value={1.375}>Lightly active</option>
                <option value={1.55}>Moderately active</option>
                <option value={1.725}>Very active</option>
                <option value={1.9}>Athlete</option>
              </select>
            </div>
          </div>
          <div className="results-row">
            <div className="chip protein">Protein {proteinLow}–{proteinHigh} g/day</div>
            <div className="chip water">Water {waterMl}–{waterMl + 200} ml/day</div>
            <div className="chip cut">Cut {cutKcal || 0} kcal</div>
            <div className="chip maintain">Maintain {maintenance || 0} kcal</div>
            <div className="chip bulk">Bulk {bulkKcal || 0} kcal</div>
          </div>
        </div>
      </section>

      {/* Plate Method */}
      <section className="section">
        <h2 className="section-title">Balanced Plate</h2>
        <div className="grid-columns">
          <div className="card">
            <h3>Half Plate</h3>
            <p>Non‑starchy veg: spinach, broccoli, peppers, tomatoes, mixed greens.</p>
          </div>
          <div className="card">
            <h3>Quarter Plate</h3>
            <p>Protein: chicken, tofu, eggs, Greek yogurt, fish, lean beef.</p>
          </div>
          <div className="card">
            <h3>Quarter Plate</h3>
            <p>Smart carbs: rice, potatoes, oats, quinoa, whole‑grain breads.</p>
          </div>
        </div>
      </section>

      {/* Pre & Post Workout */}
      <section className="section">
        <h2 className="section-title">Training Nutrition</h2>
        <div className="grid-columns">
          <div className="card">
            <h3>Pre‑Workout (60–120 min)</h3>
            <ul className="list">
              <li>Carb + protein, low fat/fiber for comfort.</li>
              <li>Examples: oats + whey; yogurt + fruit; rice cakes + turkey.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Post‑Workout (0–2 hr)</h3>
            <ul className="list">
              <li>25–45 g protein + carbs to replenish.</li>
              <li>Examples: rice + chicken; smoothie with milk, banana, whey.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Day */}
      <section className="section">
        <h2 className="section-title">Sample Day of Eating</h2>
        <div className="example-day">
          <div>
            <strong>Breakfast:</strong> Greek yogurt, berries, oats, chia.
          </div>
          <div>
            <strong>Lunch:</strong> Rice bowl with chicken, mixed veg, olive oil.
          </div>
          <div>
            <strong>Snack:</strong> Apple + peanut butter, or protein shake.
          </div>
          <div>
            <strong>Dinner:</strong> Salmon, potatoes, salad, balsamic vinaigrette.
          </div>
        </div>
      </section>

      {/* Food Highlights (images) */}
      <section className="section">
        <h2 className="section-title">Food Highlights</h2>
        <div className="nutrition-grid">
          {foodSections.map((section, index) => (
            <div key={index} className="nutrition-card" style={{ backgroundImage: `url(${section.image})` }}>
              <div className="nutrition-card-overlay" />
              <div className="nutrition-card-content">
                <h2 className="nutrition-title">{section.title}</h2>
              </div>
              <div className="nutrition-hover-overlay">
                <ul className="food-list">
                  {section.foods.map((f, i) => (<li key={i}>{f}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Grocery List */}
      <section className="section">
        <h2 className="section-title">Grocery List</h2>
        <div className="grid-columns">
          <div className="card">
            <h3>Proteins</h3>
            <ul className="list">
              <li>Chicken, turkey, eggs, salmon, tuna, Greek yogurt, tofu, tempeh</li>
            </ul>
          </div>
          <div className="card">
            <h3>Carbs</h3>
            <ul className="list">
              <li>Rice, potatoes, oats, quinoa, beans, whole‑grain bread/tortillas</li>
            </ul>
          </div>
          <div className="card">
            <h3>Fats & Flavor</h3>
            <ul className="list">
              <li>Olive oil, avocado, nuts, seeds, dark chocolate, spices</li>
            </ul>
          </div>
          <div className="card">
            <h3>Produce</h3>
            <ul className="list">
              <li>Leafy greens, cruciferous veg, onions/garlic, citrus, berries</li>
            </ul>
          </div>
        </div>
      </section>

      <AppointmentForm service="Nutrition Planning" />
    </div>
  );
};

export default Nutrition;
