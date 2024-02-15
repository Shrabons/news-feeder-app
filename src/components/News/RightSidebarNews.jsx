import moment from "moment";
import { useEffect, useState } from "react";

export default function RightSidebarNews() {
  let api = `http://localhost:8000/v2/top-headlines`;

  let [sidebarData, setSidebarDat] = useState([]);
  useEffect(() => {
    async function sidebarFatchData() {
      let response = await fetch(api);

      let data = await response.json();
      setSidebarDat(data.articles);
    }
    sidebarFatchData();
    <span>Thursday, February 25, 2021</span>;
  }, [api]);

  let sidebarHeadline = sidebarData.slice(11, 12);
  let sidebar = sidebarData.slice(23);

  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2  divide-[#D5D1C9]">
        {sidebarHeadline.map((item, index) => (
          <div key={index} className="col-span-12 mb-6 md:col-span-8">
            <img
              className="w-full rounded-xl"
              src={item.urlToImage}
              alt="thumb"
            />

            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {item.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{item.description}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {moment(item.publishedAt).fromNow()}
              </p>
            </div>
          </div>
        ))}

        {sidebar.map((news, index) => (
          <div key={index} className="col-span-12 md:col-span-8 ">
            <div className="col-span-12 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
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
      </div>
    </div>
  );
}
