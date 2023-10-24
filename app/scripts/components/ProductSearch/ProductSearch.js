import React from "react";
import {
  ProductSearchContextProvider,
  useProductSearch,
} from "./ProductSearchContext";
import { SearchResults, Searchbar } from "../Searchbar";

/**
 * Must live outside of `ProductSearchContextProvider` to access `showSearchResults`
 */
const SearchbarAndResults = () => {
  const { showSearchResults } = useProductSearch();
  return (
    <>
      <Searchbar />
      {showSearchResults && <SearchResults />}
    </>
  );
};

const ProductSearch = () => {
  return (
    <ProductSearchContextProvider>
      <SearchbarAndResults />
    </ProductSearchContextProvider>
  );
};

export default ProductSearch;
