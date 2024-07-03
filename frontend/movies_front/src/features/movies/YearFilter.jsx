import { useSearchParams } from "react-router-dom";
import "../../styles/layout/SelectFilter.scss";

function YearFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleYearChange(e) {
    const selectedYear = e.target.value;
    setSearchParams({ year: selectedYear });
  }

  console.log(searchParams);
  const years = Array.from(
    { length: 2024 - 1950 + 1 },
    (_, index) => 2024 - index
  );

  return (
    <select onChange={handleYearChange} className="select__filter">
      <option>Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export default YearFilter;
