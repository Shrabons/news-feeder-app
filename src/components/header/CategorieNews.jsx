import { useContext } from "react";
import { NewsHeadlineContext } from "../../context";

export default function CategorieNews() {
  const { categoriesName } = useContext(NewsHeadlineContext);
  function handleGenral(e) {
    let value = e.target.innerHTML.toLowerCase();
    categoriesName(value);
  }
  return (
    <div className="container mx-auto mt-6">
      <ul
        onClick={handleGenral}
        className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
      >
        <li>
          <a href="#">General</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Entertainment</a>
        </li>
        <li>
          <a href="#">Health</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
      </ul>
    </div>
  );
}
