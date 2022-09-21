import axios from "axios";
//-------------------Data Request--------------------//
export const GetDataRequest = "GetDataRequest";
export const GetDataSuccess = "GetDataSuccess";
export const GetDataFailure = "GetDataFailure";

//-------------------City Request--------------------//
export const GetCityRequest = "GetCityRequest";
export const GetCitySuccess =  "GetCitySuccess";
export const GetCityFailure = "GetCityFailure";

//-------------------Terms Request--------------------//
export const GetTermsRequest = "GetTermsRequest";
export const GetTermsSuccess = "GetTermsSuccess";
export const GetTermsFailure = "GetTermsFailure";





//-------------------network calls--------------------//
export const getData = (payload) => (dispatch) => {
  dispatch({ type: GetDataRequest });
  return axios
    .get(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`)
    .then((res) => {
      dispatch({ type:GetDataSuccess, payload: res.data.data });
      return { type: GetDataSuccess };
    })
    .catch((e) => {
      dispatch({ type:GetDataFailure, payload: e });
      return { type: GetDataFailure };
    });
};


export const getCityData = (payload) => (dispatch) => {
  dispatch({ type:GetCityRequest });
  return axios
    .get(`https://devapi.wtfup.me/gym/places`)
    .then((res) => {dispatch({ type:GetCitySuccess, payload: res.data.data });
      return { type:GetCitySuccess };
    })
    .catch((e) => {
      dispatch({ type:GetCityFailure, payload: e });
      return { type:GetCityFailure };
    });
};


export const getTermsData = (payload) => (dispatch) => {
  dispatch({ type:GetTermsRequest });
  return axios
    .get(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231",
    
    )
    .then((res) => {
      dispatch({ type:GetTermsSuccess, payload: res.data.terms });
      return { type:GetTermsSuccess };
    })
    .catch((error) => {
      dispatch({ type:GetTermsFailure, payload: error });
      return { type:GetTermsFailure };
    });
};
