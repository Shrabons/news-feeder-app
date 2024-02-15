import { NewsHeadlineContext } from "../context";
import { useNewsQurey } from "../hooks";

export default function NewsHeadlineProvider({ children }) {
  let api = `http://localhost:8000/v2/top-headlines`;
  const { news, error, loading, fetchNewsData } = useNewsQurey();

  let categoriesName = (name) => {
    if (name === "general") {
      fetchNewsData(api);
    } else if (name === "business") {
      fetchNewsData(`${api}?category=${name}`);
    } else if (name === "entertainment") {
      fetchNewsData(`${api}?category=${name}`);
    } else if (name === "health") {
      fetchNewsData(`${api}?category=${name}`);
    } else if (name === "sports") {
      fetchNewsData(`${api}?category=${name}`);
    } else if (name === "technology") {
      fetchNewsData(`${api}?category=${name}`);
    } else if (name === "science") {
      fetchNewsData(`${api}?category=${name}`);
    }
  };

  let type = "searching";

  let searchingDataName = (search) => {
    if (search) {
      fetchNewsData(`http://localhost:8000/v2/search?q=${search}`, type);
    } else {
      fetchNewsData(api);
    }
  };

  return (
    <NewsHeadlineContext.Provider
      value={{ news, error, loading, categoriesName, searchingDataName }}
    >
      {children}
    </NewsHeadlineContext.Provider>
  );
}
