import moment from "moment";
import { useContext } from "react";
import { NewsHeadlineContext } from "../../context";

export const NewsItemTeumbMd = () => {
  const { news } = useContext(NewsHeadlineContext);
  let midHeadLindeNews = news.slice(2, 3);

  return (
    <>
      {midHeadLindeNews.map((news, index) => (
        <div
          key={index}
          className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
        >
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {news.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{news.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {moment(news.publishedAt).fromNow()}
            </p>
          </div>
          {news.urlToImage && (
            <div className="col-span-12 md:col-span-6">
              <img className="w-full" src={news.urlToImage} alt="thumb" />
            </div>
          )}
        </div>
      ))}
    </>
  );
};
