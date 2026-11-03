import { useEffect, useState } from "react";
import { placeholderFoods } from "../data/placeholderFoods";
import Section from "../components/Section";
import MealForm from "./MealForm";
import Button from "../components/Button";
import { useFoodData } from "../hooks/useFoodData";

interface ExcelRow {
  "Food name in English": string;
  "Fibre (g)": number;
}

const Meal = ({
  nextStep,
  updateMealData,
  mealData,
  setTotalFibre,
  previousStep,
}: any) => {
  const { foods, loading, error } = useFoodData();
  const [isMealValid, setIsMealValid] = useState(false);

  useEffect(() => {
    setIsMealValid(!!mealData.meal && mealData.yourMeal.length > 0);
  }, [mealData]);

  return (
    <>
      <Section>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-display font-extrabold text-3xl text-brand-dark">
            Indicate meal of the day
          </h1>
        </div>

        <div className="flex flex-col gap-y-3 mt-8">
          {loading && <p className="text-gray-500">Loading foods...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <MealForm
              data={foods}
              mealData={mealData}
              updateMealData={updateMealData}
              setTotalFibre={setTotalFibre}
            />
          )}
        </div>
      </Section>

      <div className="w-full flex gap-x-4 justify-center mt-8">
        <Button
          onClick={previousStep}
          disabled={!isMealValid}
          className="bg-white! border-2 border-brand-dark/20! text-brand-dark!"
        >
          Previous
        </Button>
        <Button onClick={nextStep} disabled={!isMealValid}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Meal;
