import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import useTranslations from "../HoockTraslate/hookTraslate";

const COLORS = ["#00A9E0", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

type Repo = {
  language?: string | null;
  name: string;
  id: number;
};

const Estadisticas = () => {
  const translations = useTranslations("statistics");
  const [languageData, setLanguageData] = useState<
    { name: string; value: number; percentage: string }[]
  >([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Lisandro85/repos"
        );
        const repos = await response.json();

        const languageCount: { [key: string]: number } = {};
        repos.forEach((repo: Repo) => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        const total = Object.values(languageCount).reduce(
          (sum, count) => sum + count,
          0
        );

        const data = Object.keys(languageCount).map((language) => ({
          name: language,
          value: languageCount[language],
          percentage: ((languageCount[language] / total) * 100).toFixed(1),
        }));

        setLanguageData(data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <div className="p-2 max-w-sm mx-4 flex justify-center flex-col items-center w-full overflow-hidden bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md  mt-20">
      <h2 className="text-4xl text-center text-[#52efc2] mb-4 font-Amatic-SC font-bold">
        {translations.title}
      </h2>

      <ResponsiveContainer width="100%" height={250} className="p-2">
        <PieChart>
          <Pie
            data={languageData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="60%"
            label={({ name, percentage }) => `${name} (${percentage}%)`}
            labelLine={false}
            className="text-xs sm:text-sm md:text-base"
          >
            {languageData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            wrapperClassName="text-xs sm:text-sm md:text-base"
            formatter={(value, name) => [`${value} repos`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Estadisticas;
