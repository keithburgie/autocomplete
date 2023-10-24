import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { searchItems } from "../../api/services";
import debouncedProductSearch from "./debouncedProductSearch";

const ProductSearchContext = createContext();

/**
 * Access the ProductSearchContext from any child of the ProductSearchContextProvider.
 * @example const { searchResults, numSearchResults } = useProductSearch();
 */
export const useProductSearch = () => {
  return useContext(ProductSearchContext);
};

/**
 * Provides the ProductSearchContext to any of its children.
 * @example 
 * ```
  const ProductSearch = () => {
    return (
      <ProductSearchContextProvider>
        <Searchbar />
       <SearchResults />
      </ProductSearchContextProvider>
    );
  };
  ```
 */
export const ProductSearchContextProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [numSearchResults, setTotalResults] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentResultsPage, setCurrentResultsPage] = useState(1);
  const [prefetchedData, setPrefetchedData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchRef = useRef(
    debouncedProductSearch({
      action: searchItems,
      setSearchResults,
      setTotalResults,
      setPrefetchedData,
      page: currentResultsPage,
    })
  );

  useEffect(() => {
    const showSearchResultsPanel =
      searchValue.length > 0 && searchResults.length > 0;
    setShowSearchResults(showSearchResultsPanel);
  }, [searchResults, searchValue.length]);

  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  console.log("showSearch:", showSearch);
  console.log("searchResults:", searchResults);
  console.log("numSearchResults:", numSearchResults);
  console.log("showSearchResults:", showSearchResults);
  console.log("currentResultsPage:", currentResultsPage);
  console.log("prefetchedData:", prefetchedData);
  console.log("searchValue:", searchValue);
  console.log("");

  useEffect(() => {
    if (searchValue) {
      debouncedSearchRef.current(searchValue, currentResultsPage);
    }
  }, [searchValue, currentResultsPage]);

  return (
    <ProductSearchContext.Provider
      value={{
        showSearch,
        setShowSearch,
        searchResults,
        setSearchResults,
        numSearchResults,
        setTotalResults,
        showSearchResults,
        setShowSearchResults,
        currentResultsPage,
        setCurrentResultsPage,
        prefetchedData,
        setPrefetchedData,
        searchValue,
        setSearchValue,
        toggleShowSearch,
      }}
    >
      {children}
    </ProductSearchContext.Provider>
  );
};

ProductSearchContextProvider.propTypes = {
  children: PropTypes.node,
};
