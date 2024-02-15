import { useEffect, useState } from "react";

const useNewsQurey = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState({
    state: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchNewsData = async (api, type) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "The Fatching News data !",
      });

      let response;
      if (api) {
        response = await fetch(api);
      } else {
        response = await fetch(`http://localhost:8000/v2/top-headlines`);
      }

      if (!response.ok) {
        const errorMessage = `Failed Fatching Data : ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (type === "searching") {
        setNews(data.result);
      } else {
        setNews(data.articles);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "The Fatching News data !",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Loading Page .............",
    });
    fetchNewsData();
  }, []);

  return {
    news,
    error,
    loading,
    fetchNewsData,
  };
};

export default useNewsQurey;
