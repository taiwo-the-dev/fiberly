import { useState } from 'react';
import Header from './components/Header';
import Meal from './Meal/Meal';
import Welcome from './welcome/Welcome';
import Result from './Result';
import ReviewMeal from './Review/ReviewMeal';
import Footer from './components/Footer';
import Landing from './Landing';

import spiral from './assets/spiral.svg';

interface PersonalData {
  name: string;
  age: string;
  gender: string;
}

interface MealData {
  meal: string;
  mealContent: string[];
  yourMeal: string[];
}

function App() {
  const [step, setStep] = useState(0);
  const [disabled] = useState(true);
  const [personalData, setFormData] = useState<PersonalData>({
    name: '',
    gender: '',
    age: '',
  });
  const [mealData, setMealData] = useState<MealData>({
    meal: '',
    mealContent: [],
    yourMeal: [],
  });
  const [fibre, setFibre] = useState('0');
  const [totalFibre, setTotalFibre] = useState('0');

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updatePersonalData = (values: Partial<PersonalData>) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  const updateMealData = (values: Partial<MealData>) => {
    setMealData((prev) => ({ ...prev, ...values }));
  };

  return (
    <div className='flex flex-col min-h-screen relative'>

      
      {step > 0 && <Header />}
      <main className='flex-grow relative z-10'>
        {step === 0 && <Landing onStart={nextStep} />}
        {step === 1 && (
          <Welcome
            nextStep={nextStep}
            updateData={updatePersonalData}
            personalData={personalData}
            fibre={fibre}
            setFibre={setFibre}
          />
        )}
        {step === 2 && (
          <Meal
            nextStep={nextStep}
            PreviousStep={prevStep}
            updateMealData={updateMealData}
            mealData={mealData}
            setTotalFibre={setTotalFibre}
          />
        )}
        {step === 3 && (
          <ReviewMeal
            nextStep={nextStep}
            updateMealData={updateMealData}
            mealData={mealData}
            disabled={disabled}
            previousStep={prevStep}
          />
        )}
        {step === 4 && (
          <Result
            personalData={personalData}
            mealData={mealData}
            totalFibre={totalFibre}
            fibre={fibre}
          />
        )}
      </main>
      {step > 0 && (
        <div className='absolute bottom-0 right-0 pointer-events-none'>
          <img src={spiral} alt="" />
        </div>
      )}
      {step > 0 && <Footer />}
    </div>
  );
}

export default App;
