
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/widgetSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={handleSearch}
        className="border p-2 rounded w-2/3  "
      />
  );
};

export default SearchBar;
