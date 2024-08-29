import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Creating a top workout session depends on your fitness goals, but here's a well-rounded, high-intensity session that targets major muscle groups, improves endurance, and boosts cardiovascular health. This workout is designed for intermediate to advanced fitness levels and should take about 45-60 minutes to complete.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Here are some of the features 
        </p>
        <div className="bootcamps">
          <div>
            <h4>1. Beginner Workout Plan</h4>
            <p>
            Duration: 4-6 weeks
            Goal: Build a foundation, improve overall fitness, and get accustomed to regular exercise.
            Frequency: 3-4 days per week
            </p>
          </div>
          <div>
            <h4>2. Intermediate Workout Plan</h4>
            <p>
            Duration: 6-8 weeks
            Goal: Build strength, endurance, and start to focus on specific goals like muscle gain or fat loss.
            Frequency: 4-5 days per week
            </p>
          </div>
          <div>
            <h4>3. Advanced Workout Plan</h4>
            <p>
            Duration: 8-12 weeks
            Goal: Focus on specific goals such as hypertrophy (muscle gain), fat loss, or athletic performance.
            Frequency: 5-6 days per week
            </p>
          </div>
          <div>
            <h4>4. Specialized Workout Routines</h4>
            <p>
                 Incorporate a mix of strength training and high-intensity interval training (HIIT).
                 Focus on compound movements like squats, deadlifts, and bench presses.
                 Include 20-30 minutes of HIIT or circuit training at the end of your strength sessions.
            </p>
          </div>
          <div>
            <h4>5. Progress Tracking & Adaptation</h4>
            <p>
            Tracking: Allow users to log their workouts, monitor progress (e.g., weights lifted, reps completed), and adjust their routines as needed.
            Adaptation: Offer guidance on when and how to progress (e.g., increasing weights, changing exercises) to keep the workouts challenging and effective.

            </p>
          </div>

          <div>
            <h4>6. Recovery & Wellness</h4>
            <p>
            Rest Day Activities: Suggest low-impact activities like yoga, stretching, or light swimming to aid recovery on rest days.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
