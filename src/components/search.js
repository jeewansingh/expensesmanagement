import { IoSearch } from "react-icons/io5";
function Search() {
  return (
    <>
      <div className="search">
        <IoSearch className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
}
export default Search;
