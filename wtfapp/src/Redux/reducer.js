import {
  GetTermsFailure,
  GetTermsSuccess,
  GetTermsRequest,
  GetCityFailure,
  GetCitySuccess,
  GetCityRequest,
  GetDataFailure,
  GetDataSuccess,
  GetDataRequest,
} from "./action.js";

const initialState = {
  data: [],
  cityData: [],
  termsData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case  GetDataRequest: {
      return { ...state, isLoading: true, isError: false };
    }
    case GetDataSuccess: {
      return { ...state, isLoading: false, isError: false, data: payload };
    }
    case GetDataFailure: {
      return { ...state, isLoading: false, isError: true,data:[] };
    }
    case GetCityRequest: {
      return { ...state, isLoading: true, isError: false };
    }
    case GetCitySuccess: {
      return { ...state, isLoading: false, isError: false, cityData: payload };
    }
    case GetCityFailure: {
      return { ...state, isLoading: false, isError: true };
    }
    case GetTermsRequest: {
      return { ...state, isLoading: true, isError: false };
    }
    case GetTermsSuccess: {
      return { ...state, isLoading: false, isError: false, termsData: payload };
    }
    case GetTermsFailure: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
