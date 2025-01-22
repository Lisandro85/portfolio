import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import useTranslations from "../HoockTraslate/hookTraslate";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];
type Repo = {
  language?: string | null;
  name: string;
  id: number;
};

const Estadisticas = () => {
  const translations = useTranslations("statistics");
  const [languageData, setLanguageData] = useState<
    { name: string; value: number }[]
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

        const data = Object.keys(languageCount).map((language) => ({
          name: language,
          value: languageCount[language],
        }));

        setLanguageData(data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md p-4 mt-20">
      <h2 className="text-4xl text-center text-[#52efc2] mb-4 font-Amatic-SC font-bold">
        {translations.title}
      </h2>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:space-y-0 sm:space-x-2">
        <ul className="w-full sm:w-1/4 text-left mb-2">
          {languageData.map((language, index) => (
            <li
              key={language.name}
              className="flex items-center mb-1 text-2xl text-[#52efc2] font-Amatic-SC font-bold"
            >
              <span
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              {language.name}
            </li>
          ))}
        </ul>

        <div className="w-full sm:w-11/12">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={languageData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius="70%"
                fill="#8884d8"
              >
                {languageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
