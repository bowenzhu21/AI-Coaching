import React, { useMemo, useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Fitness.css';

const Fitness = () => {
  const [split, setSplit] = useState('3'); // '3' | '4' | '5'
  // Quick Metrics state
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(70);
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState('male'); // 'male' | 'female'
  const [activity, setActivity] = useState(1.55);

  const bmi = useMemo(() => {
    const h = Number(heightCm);
    const w = Number(weightKg);
    if (!h || !w) return 0;
    return +(w / Math.pow(h / 100, 2)).toFixed(1);
  }, [heightCm, weightKg]);

  const bmiCategory = useMemo(() => {
    if (!bmi) return '-';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }, [bmi]);

  const proteinLow = useMemo(() => Math.round(Number(weightKg) * 1.6), [weightKg]);
  const proteinHigh = useMemo(() => Math.round(Number(weightKg) * 2.2), [weightKg]);

  const bmr = useMemo(() => {
    const w = Number(weightKg);
    const h = Number(heightCm);
    const a = Number(age);
    if (!w || !h || !a) return 0;
    const base = 10 * w + 6.25 * h - 5 * a;
    return Math.round(sex === 'male' ? base + 5 : base - 161);
  }, [weightKg, heightCm, age, sex]);

  const maintenance = useMemo(() => Math.round(bmr * Number(activity) || 0), [bmr, activity]);
  const cut = useMemo(() => (maintenance ? maintenance - 300 : 0), [maintenance]);
  const bulk = useMemo(() => (maintenance ? maintenance + 300 : 0), [maintenance]);
  return (
    <div
      className="fitness-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.76)), url('/bowen/images/fitness_bg.jpg')",
      }}
    >
      <h1 className="page-title">Fitness</h1>
      {/* Hero */}
      <div className="hero" style={{ backgroundImage: `url('/bowen/images/fitness_main.png')` }}>
        <div className="hero-overlay">
          <h2 className="hero-title">Build Strength. Look Athletic.</h2>
          <p className="hero-subtitle">Evidence-based programs, minimalist templates, and real results.</p>
          <button className="cta" onClick={() => document.getElementById('coaching')?.scrollIntoView({ behavior: 'smooth' })}>Get Coaching</button>
        </div>
      </div>

      {false && ( <section className="section">
        <h2 className="section-title">Choose Your Split</h2>
        <div className="split-selector">
          <button className={split === '3' ? 'active' : ''} onClick={() => setSplit('3')}>3-Day (Balanced)</button>
          <button className={split === '4' ? 'active' : ''} onClick={() => setSplit('4')}>4-Day (Chest/Back/Legs/Arms)</button>
          <button className={split === '5' ? 'active' : ''} onClick={() => setSplit('5')}>5-Day (Chest/Back/Legs/Arms/Glutes)</button>
        </div>

        {split === '3' && (
          <>
            <h3 className="section-subtitle">3-Day Balanced: Push / Pull / Legs</h3>
            <div className="carousel">
              {/* Push */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Push (90 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill (5 mins)</li><hr />
                    <li>Flat Dumbell Press (8 x 4)</li><hr />
                    <li>Shoulder Press (8 x 4)</li><hr />
                    <li>Lateral Raises (8 x 4)</li><hr />
                    <li>Overhead Tricep Extensions (8 x 4)</li><hr />
                    <li>V Bar Pushdown (8 x 4)</li><hr />
                    <li>Chest Fly (8 x 4)</li><hr />
                    <li>Treadmill (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Pull */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Pull (75 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill (5 mins)</li><hr />
                    <li>Lat Pulldown (8 x 4)</li><hr />
                    <li>Cable Rows (8 x 4)</li><hr />
                    <li>Assisted Lateral Raises (8 x 4)</li><hr />
                    <li>Face Pulls (8 x 4)</li><hr />
                    <li>Cable Bicep Curls (8 x 4)</li><hr />
                    <li>Hammer Curls (8 x 4)</li><hr />
                    <li>Treadmill (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (90 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master (5 mins)</li><hr />
                    <li>Back Squat – Heavy (4 x 3)</li><hr />
                    <li>Back Squat – Volume (8 x 3)</li><hr />
                    <li>Hip Thrusts (8 x 4)</li><hr />
                    <li>Hamstring Curl or RDL (8 x 4)</li><hr />
                    <li>Seated Calf Raises (8 x 4)</li><hr />
                    <li>Back Extensions (8 x 4)</li><hr />
                    <li>Stair Master (10 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {split === '4' && (
          <>
            <h3 className="section-subtitle">4-Day: Chest / Back / Legs / Arms</h3>
            <div className="carousel">
              {/* Chest (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Chest (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Dumbbell Chest Press (8–10 x 4)</li><hr />
                    <li>Shoulder Press (8–10 x 3)</li><hr />
                    <li>Lateral Raises (12 x 3)</li><hr />
                    <li>Chest Flys (10–12 x 3)</li><hr />
                    <li>Incline Chest Press (8–10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Back (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Back (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Pull-ups (AMRAP x 3) or Lat Pulldown (8–10 x 3)</li><hr />
                    <li>Rows (8–10 x 4)</li><hr />
                    <li>Face Pulls (12 x 3)</li><hr />
                    <li>Lat Pulldowns (10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs (Lower body -> Stair Master warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Squats (5 x 5 or 8 x 3)</li><hr />
                    <li>Hip Thrusts (8–10 x 4)</li><hr />
                    <li>Bulgarian Split Squats (10/side x 3)</li><hr />
                    <li>Leg Press (10–12 x 3)</li><hr />
                    <li>Seated Calf Raises (12–15 x 4)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Arms (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Arms (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Overhead Tricep Pulls/Extensions (10–12 x 3)</li><hr />
                    <li>Inward Hammer Curls (10–12 x 3)</li><hr />
                    <li>Seated Lateral Raises (12 x 3)</li><hr />
                    <li>Tricep Pulldowns (10–12 x 3)</li><hr />
                    <li>Cable Curls (10–12 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {split === '5' && (
          <>
            <h3 className="section-subtitle">5-Day: Chest / Back / Legs / Arms / Glutes & Calves</h3>
            <div className="carousel">
              {/* Chest */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Chest (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Dumbbell Chest Press (8–10 x 4)</li><hr />
                    <li>Shoulder Press (8–10 x 3)</li><hr />
                    <li>Lateral Raises (12 x 3)</li><hr />
                    <li>Chest Flys (10–12 x 3)</li><hr />
                    <li>Incline Chest Press (8–10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Back */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Back (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Pull-ups (AMRAP x 3) or Lat Pulldown (8–10 x 3)</li><hr />
                    <li>Rows (8–10 x 4)</li><hr />
                    <li>Face Pulls (12 x 3)</li><hr />
                    <li>Lat Pulldowns (10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Squats (5 x 5 or 8 x 3)</li><hr />
                    <li>Hip Thrusts (8–10 x 4)</li><hr />
                    <li>Bulgarian Split Squats (10/side x 3)</li><hr />
                    <li>Leg Press (10–12 x 3)</li><hr />
                    <li>Seated Calf Raises (12–15 x 4)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Arms */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Arms (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Overhead Tricep Pulls/Extensions (10–12 x 3)</li><hr />
                    <li>Inward Hammer Curls (10–12 x 3)</li><hr />
                    <li>Seated Lateral Raises (12 x 3)</li><hr />
                    <li>Tricep Pulldowns (10–12 x 3)</li><hr />
                    <li>Cable Curls (10–12 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Glutes & Calves */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Glutes & Calves (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Hip Thrusts (10 x 4)</li><hr />
                    <li>Romanian Deadlift or Hamstring Curl (8–10 x 3)</li><hr />
                    <li>Glute Bridge/Abduction (12 x 3)</li><hr />
                    <li>Standing Calf Raises (15 x 4)</li><hr />
                    <li>Seated Calf Raises (12–15 x 3)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      )}

      {/* Quick Metrics */}
      <section className="section">
        <h2 className="section-title">Quick Metrics</h2>
        <div className="metrics-grid">
          <div className="card">
            <h3 className="card-title">Body Metrics</h3>
            <div className="input-row">
              <label htmlFor="height">Height (cm)</label>
              <input id="height" type="number" min="100" max="230" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} />
            </div>
            <div className="input-row">
              <label htmlFor="weight">Weight (kg)</label>
              <input id="weight" type="number" min="30" max="200" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
            <div className="stats">
              <div className="stat"><div className="stat-label">BMI</div><div className="stat-value">{bmi || '-'} <span className="muted">({bmiCategory})</span></div></div>
              <div className="stat"><div className="stat-label">Protein</div><div className="stat-value">{proteinLow}–{proteinHigh} g/day</div></div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Calories (TDEE)</h3>
            <div className="input-row">
              <label htmlFor="age">Age</label>
              <input id="age" type="number" min="10" max="90" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="input-row">
              <label htmlFor="sex">Sex</label>
              <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input-row">
              <label htmlFor="activity">Activity</label>
              <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value={1.2}>Sedentary (1.2)</option>
                <option value={1.375}>Light (1.375)</option>
                <option value={1.55}>Moderate (1.55)</option>
                <option value={1.725}>Very Active (1.725)</option>
              </select>
            </div>
            <div className="stats">
              <div className="stat"><div className="stat-label">BMR</div><div className="stat-value">{bmr || '-'}</div></div>
              <div className="stat"><div className="stat-label">Maintenance</div><div className="stat-value">{maintenance || '-'}</div></div>
              <div className="stat"><div className="stat-label">Cut</div><div className="stat-value">{cut || '-'}</div></div>
              <div className="stat"><div className="stat-label">Bulk</div><div className="stat-value">{bulk || '-'}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section">
        <h2 className="section-title">Programs Overview</h2>
        <div className="programs-grid">
          <div className={`program-card ${split === '3' ? 'active' : ''}`} onClick={() => setSplit('3')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSplit('3')}>
            <img src="/bowen/images/push.webp" alt="3-Day Balanced program" />
            <div className="program-content">
              <h3>3-Day Balanced</h3>
              <p>Classic Push / Pull / Legs split for busy weeks.</p>
            </div>
          </div>
          <div className={`program-card ${split === '4' ? 'active' : ''}`} onClick={() => setSplit('4')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSplit('4')}>
            <img src="/bowen/images/pull.webp" alt="4-Day Chest Back Legs Arms program" />
            <div className="program-content">
              <h3>4-Day Split</h3>
              <p>Chest, Back, Legs, Arms — 60 minutes each.</p>
            </div>
          </div>
          <div className={`program-card ${split === '5' ? 'active' : ''}`} onClick={() => setSplit('5')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSplit('5')}>
            <img src="/bowen/images/leg.webp" alt="5-Day Chest Back Legs Arms Glutes program" />
            <div className="program-content">
              <h3>5-Day Split</h3>
              <p>Chest, Back, Legs, Arms, Glutes & Calves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Split (moved below Programs) */}
      <section className="section">
        <h2 className="section-title">Choose Your Split</h2>
        <div className="split-selector">
          <button className={split === '3' ? 'active' : ''} onClick={() => setSplit('3')}>3-Day (Balanced)</button>
          <button className={split === '4' ? 'active' : ''} onClick={() => setSplit('4')}>4-Day (Upper Focus)</button>
          <button className={split === '5' ? 'active' : ''} onClick={() => setSplit('5')}>5-Day (Lower Focus)</button>
        </div>

        {split === '3' && (
          <>
            <h3 className="section-subtitle">3-Day Balanced: Push / Pull / Legs</h3>
            <div className="carousel">
              {/* Push */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Push (90 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill (5 mins)</li><hr />
                    <li>Flat Dumbell Press (8 x 4)</li><hr />
                    <li>Shoulder Press (8 x 4)</li><hr />
                    <li>Lateral Raises (8 x 4)</li><hr />
                    <li>Overhead Tricep Extensions (8 x 4)</li><hr />
                    <li>V Bar Pushdown (8 x 4)</li><hr />
                    <li>Chest Fly (8 x 4)</li><hr />
                    <li>Treadmill (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Pull */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Pull (75 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill (5 mins)</li><hr />
                    <li>Lat Pulldown (8 x 4)</li><hr />
                    <li>Cable Rows (8 x 4)</li><hr />
                    <li>Assisted Lateral Raises (8 x 4)</li><hr />
                    <li>Face Pulls (8 x 4)</li><hr />
                    <li>Cable Bicep Curls (8 x 4)</li><hr />
                    <li>Hammer Curls (8 x 4)</li><hr />
                    <li>Treadmill (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (90 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master (5 mins)</li><hr />
                    <li>Back Squat – Heavy (4 x 3)</li><hr />
                    <li>Back Squat – Volume (8 x 3)</li><hr />
                    <li>Hip Thrusts (8 x 4)</li><hr />
                    <li>Hamstring Curl or RDL (8–10 x 4)</li><hr />
                    <li>Seated Calf Raises (8 x 4)</li><hr />
                    <li>Back Extensions (8 x 4)</li><hr />
                    <li>Stair Master (10 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {split === '4' && (
          <>
            <h3 className="section-subtitle">4-Day: Chest / Back / Legs / Arms</h3>
            <div className="carousel">
              {/* Chest (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Chest (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Dumbbell Chest Press (8–10 x 4)</li><hr />
                    <li>Shoulder Press (8–10 x 3)</li><hr />
                    <li>Lateral Raises (12 x 3)</li><hr />
                    <li>Chest Flys (10–12 x 3)</li><hr />
                    <li>Incline Chest Press (8–10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Back (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Back (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Pull-ups (AMRAP x 3) or Lat Pulldown (8–10 x 3)</li><hr />
                    <li>Rows (8–10 x 4)</li><hr />
                    <li>Face Pulls (12 x 3)</li><hr />
                    <li>Lat Pulldowns (10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs (Lower body -> Stair Master warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Squats (5 x 5 or 8 x 3)</li><hr />
                    <li>Hip Thrusts (8–10 x 4)</li><hr />
                    <li>Bulgarian Split Squats (10/side x 3)</li><hr />
                    <li>Leg Press (10–12 x 3)</li><hr />
                    <li>Seated Calf Raises (12–15 x 4)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Arms (Upper body -> Treadmill warmup/cooldown) */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Arms (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Overhead Tricep Pulls/Extensions (10–12 x 3)</li><hr />
                    <li>Inward Hammer Curls (10–12 x 3)</li><hr />
                    <li>Seated Lateral Raises (12 x 3)</li><hr />
                    <li>Tricep Pulldowns (10–12 x 3)</li><hr />
                    <li>Cable Curls (10–12 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {split === '5' && (
          <>
            <h3 className="section-subtitle">5-Day: Chest / Back / Legs / Arms / Glutes & Calves</h3>
            <div className="carousel">
              {/* Chest */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Chest (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Dumbbell Chest Press (8–10 x 4)</li><hr />
                    <li>Shoulder Press (8–10 x 3)</li><hr />
                    <li>Lateral Raises (12 x 3)</li><hr />
                    <li>Chest Flys (10–12 x 3)</li><hr />
                    <li>Incline Chest Press (8–10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Back */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/pull.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Back (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Pull-ups (AMRAP x 3) or Lat Pulldown (8–10 x 3)</li><hr />
                    <li>Rows (8–10 x 4)</li><hr />
                    <li>Face Pulls (12 x 3)</li><hr />
                    <li>Lat Pulldowns (10 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Legs */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Legs (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Squats (5 x 5 or 8 x 3)</li><hr />
                    <li>Hip Thrusts (8–10 x 4)</li><hr />
                    <li>Bulgarian Split Squats (10/side x 3)</li><hr />
                    <li>Leg Press (10–12 x 3)</li><hr />
                    <li>Seated Calf Raises (12–15 x 4)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Arms */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/push.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Arms (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Treadmill Warmup (5 mins)</li><hr />
                    <li>Overhead Tricep Pulls/Extensions (10–12 x 3)</li><hr />
                    <li>Inward Hammer Curls (10–12 x 3)</li><hr />
                    <li>Seated Lateral Raises (12 x 3)</li><hr />
                    <li>Tricep Pulldowns (10–12 x 3)</li><hr />
                    <li>Cable Curls (10–12 x 3)</li><hr />
                    <li>Treadmill Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Glutes & Calves */}
              <div className="routine-card wide-card image-card">
                <div className="card-background" style={{ backgroundImage: `url('/bowen/images/leg.webp')` }}></div>
                <div className="card-content">
                  <h3 className="routine-title">Glutes & Calves (60 mins)</h3>
                  <ul className="exercise-list">
                    <li>Stair Master Warmup (5 mins)</li><hr />
                    <li>Hip Thrusts (10 x 4)</li><hr />
                    <li>Romanian Deadlift or Hamstring Curl (8–10 x 3)</li><hr />
                    <li>Glute Bridge/Abduction (12 x 3)</li><hr />
                    <li>Standing Calf Raises (15 x 4)</li><hr />
                    <li>Seated Calf Raises (12–15 x 3)</li><hr />
                    <li>Stair Master Cooldown (5 mins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Recovery Checklist */}
      <section className="section">
        <h2 className="section-title">Recovery Checklist</h2>
        <div className="metrics-grid">
          <div className="card">
            <h3 className="card-title">Daily Targets</h3>
            <ul className="tips-list">
              <li>Sleep: 7–9 hours</li>
              <li>Hydration: 30–35 ml/kg bodyweight</li>
              <li>Protein: {proteinLow}–{proteinHigh} g/day</li>
              <li>Steps: 6,000–10,000</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">Form Cues</h3>
            <ul className="tips-list">
              <li>Maintain neutral spine; brace core on compounds</li>
              <li>Use full range of motion; control eccentrics</li>
              <li>Stop 1–3 reps shy of failure (RIR 1–3)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery removed as requested */}

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src="/bowen/images/person_1.jpg" alt="Client A" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/bowen/images/anti.jpg'; }} />
            <blockquote>Added 40 lbs to my squat in 8 weeks while dropping 3% body fat. The templates are simple and effective.</blockquote>
            <div className="author">— J., Student Athlete</div>
          </div>
          <div className="testimonial">
            <img src="/bowen/images/person_2.jpg" alt="Client B" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/bowen/images/ginger.jpg'; }} />
            <blockquote>Clear structure, great cues, and realistic nutrition targets. Recovery checklist kept me consistent.</blockquote>
            <div className="author">— A., Beginner Lifter</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">FAQ</h2>
        <div className="faq">
          <details className="faq-item">
            <summary>How should I progress weights?</summary>
            <p>Add 2.5–5% when you complete all sets with 1–2 reps in reserve. Otherwise keep weight and aim for extra reps next week.</p>
          </details>
          <details className="faq-item">
            <summary>How many rest days?</summary>
            <p>At least 1–2 per week. On rest days, keep steps and mobility, and prioritize sleep and protein.</p>
          </details>
          <details className="faq-item">
            <summary>What if I have 30 minutes only?</summary>
            <p>Do the warm-up, 1–2 compounds, and 1 accessory superset. Keep rests short (60–90s).</p>
          </details>
        </div>
      </section>
      <div id="coaching">
        <AppointmentForm service="Fitness Coaching" />
      </div>
    </div>
  );
};

export default Fitness;
