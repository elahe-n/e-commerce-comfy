import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      loading: false,
      products: action.payload,
      featuredProducts: featured,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, loading: false, error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleLoading: true, singleError: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, product: action.payload, singleLoading: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleError: true, singleLoading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
