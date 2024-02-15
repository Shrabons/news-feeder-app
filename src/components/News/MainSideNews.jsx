import moment from "moment";
import { useContext } from "react";
import { NewsHeadlineContext } from "../../context";
import { NewsItemTeumbMd } from "./NewsItemTeumbMd";
import NewsItemThumbLg from "./NewsItemThembLg";
import NotFound from "./NotFound";

export default function MainSideNews() {
  const { news } = useContext(NewsHeadlineContext);
  let allHeadLindeNews = news.slice(3);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {news.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <NewsItemThumbLg />
          <NewsItemTeumbMd />
          {allHeadLindeNews.map((news, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {news.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">{news.description}</p>
                <p className="mt-5 text-base text-[#94908C]">
                  {moment(news.publishedAt).fromNow()}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
