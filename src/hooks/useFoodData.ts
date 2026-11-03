import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import type { Food } from "../types/food";

const NAME_COLUMN = "Food name in English";
const FIBRE_COLUMN = "Fibre (g)";

const toNumber = (value: unknown): number | null => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = parseFloat(value.replace(/[[\]]/g, ""));
    return Number.isNaN(parsed) ? null : parsed;
  }
  return null;
};

export const useFoodData = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const response = await fetch("/data.xlsx");
        if (!response.ok) throw new Error("Could not download the food list.");

        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);

        if (
          rows.length === 0 ||
          !(NAME_COLUMN in rows[0]) ||
          !(FIBRE_COLUMN in rows[0])
        ) {
          throw new Error(
            `The sheet must have "${NAME_COLUMN}" and "${FIBRE_COLUMN}" columns.`,
          );
        }

        const cleaned: Food[] = [];
        rows.forEach((row, index) => {
          const name = String(row[NAME_COLUMN] ?? "").trim();
          const fibre = toNumber(row[FIBRE_COLUMN]);
          if (!name || fibre === null) {
            console.warn(
              `Skipping row ${index + 2}: missing name or fibre value`,
            );
            return;
          }
          cleaned.push({ name, fibre });
        });

        setFoods(cleaned);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong loading foods.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  return { foods, loading, error };
};
