import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";

function SearchUser() {
  const [search, setSearch] = useState("");
  const [nodata, setNoData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // const url2 = "http://localhost/test/userincome.php";
    // const apiUrl2 = `${url}?category=${category}&page=${1}&token=${token}&search=${search}`;
    // axios
    //   .get(apiUrl2)
    //   .then((response) => {
    //     setItemData(response?.data?.data); //Transactions
    //     setTotalPage(response?.data?.total_page);
    //     setCurrentPage(response?.data?.current_page);
    //   })
    //   .catch((error) => {
    //     setNoData(error.response.data.detail);
    //     setItemData("");
    //   });
  };
  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" onClick={handleSearch}>
            <IoSearch className="searchIcon" />
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchUser;
