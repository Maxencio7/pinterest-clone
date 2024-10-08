//import { useSearchParams } from "react-router-dom";
import SearchBar from "./Smaller-comps/SearchBar";
import PinGrid from "./Smaller-comps/PinGrid";

const SearchResults = () => {
  //const [searchParams] = useSearchParams();
  //const query = searchParams.get("q");
  return (
    <div>
      <SearchBar />
      <PinGrid />
    </div>
  );
};

export default SearchResults;
