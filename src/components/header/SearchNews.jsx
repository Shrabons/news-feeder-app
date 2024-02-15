import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import SearchIcon from "../../assets/icons/search.svg";
import { NewsHeadlineContext } from "../../context";
import { useSearchDebonce } from "../../hooks";
export default function SearchNews() {
  let [searchingData, setSearchingData] = useState("");

  let [searchShow, setSearchShow] = useState(false);

  const { searchingDataName } = useContext(NewsHeadlineContext);

  // let handleSearchingSubmit = (e) => {
  //   e.preventDefault();
  //   searchingDataName(searchingData);
  // };

  let doSearch = useSearchDebonce((term) => {
    searchingDataName(term);
  }, 500);

  let handleChangeSearch = (e) => {
    let value = e.target.value;
    setSearchingData(value);
    doSearch(value);
  };

  return (
    <div className="flex items-center space-x-3 lg:space-x-8 relative">
      {searchShow ? (
        <form className="flex abolute top-0 left-0">
          <div className="flex items-center space-x-2 pr-2 bg-[#bdc3c7] rounded-lg ">
            <input
              className=" bg-[#bdc3c7] py-2 px-3  outline-none  rounded-lg "
              type="search"
              placeholder="Search News"
              onChange={handleChangeSearch}
              required
            />
            <button type="submit">
              <img src={SearchIcon} />
            </button>
          </div>
          <button
            onClick={() => setSearchShow(!searchShow)}
            className="bg-red-500 py-1 px-3 text-lg rounded-lg text-white font-bold ml-1"
          >
            <FaTimes />
          </button>
        </form>
      ) : (
        <img onClick={() => setSearchShow(!searchShow)} src={SearchIcon} />
      )}
    </div>
  );
}
