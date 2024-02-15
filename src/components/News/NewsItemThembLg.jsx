import moment from "moment";
import { useContext } from "react";
import { NewsHeadlineContext } from "../../context";

export default function NewsItemThumbLg() {
  const { news, loading } = useContext(NewsHeadlineContext);
  let topHeadLindeNews = news.slice(0, 2);

  return (
    <>
      {topHeadLindeNews.map((item, index) => (
        <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
          <div
            className={`col-span-12 lg:col-span-${
              item.urlToImage ? "4" : "12"
            }`}
          >
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {item.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{item.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {moment(item.publishedAt).fromNow()}
            </p>
          </div>
          {item.urlToImage && (
            <div className="col-span-12 lg:col-span-8">
              <img className="w-full " src={item.urlToImage} alt="thumb" />
              <p className="mt-5 text-base text-[#5C5955]">
                Illustration: {item.author}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
