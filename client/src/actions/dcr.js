import * as api from '../api';

export const getDCRs = () => async (dispatch)=> {
  try {
    const { data } = await api.fetchDCRs();

    dispatch({type: "FETCH_ALL", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

export const createDCR = (dcr) => async (dispatch) => {
  try {
    const { data } = await api.createDCR(dcr);

    dispatch({type: "CREATE", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}