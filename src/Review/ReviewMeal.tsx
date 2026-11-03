import { useEffect, useState } from "react";
import { placeholderFoods } from "../data/placeholderFoods";
import Section from "../components/Section";
import Button from "../components/Button";
import Result from "./Result";
import ReviewForm from "./ReviewForm";

interface ExcelRow {
  "Food name in English": string;
  Fibre?: number;
}

const ReviewMeal = ({
  nextStep,
  previousStep,
  updateMealData,
  mealData,
  disabled,
}: any) => {
  const [isMealValid, setIsMealValid] = useState(false);

  const allData: ExcelRow[] = placeholderFoods;

  useEffect(() => {
    setIsMealValid(!!mealData.meal && mealData.yourMeal.length > 0);
  }, [mealData]);

  return (
    <>
      <Section>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-display font-extrabold text-3xl text-brand-dark">Indicate meal of the day</h1>
        </div>

        <div className="flex flex-col gap-y-3 mt-8">
          <ReviewForm
            data={allData}
            mealData={mealData}
            updateMealData={updateMealData}
            disabled={disabled}
          />
        </div>
        <h1 className="font-display font-extrabold text-3xl text-brand-dark my-8">Your Food</h1>
        <Result yourMeal={mealData.yourMeal} updateMealData={updateMealData} />
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

export default ReviewMeal;
