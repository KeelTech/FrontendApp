import { API_GET, API_POST } from '../../api/api.js';
import CONFIG from '../../config'
import { SAVE_LOGIN_PHONE_NUMBER } from '../../constants/types';



export const getProfile = (cb) => (dispatch) => {

	API_GET('customer/getCustomerProfile').then(function (response) {
		if (response && response.statusCode == 1){
			dispatch({
				type: SAVE_LOGIN_PHONE_NUMBER,
				payload: response.data
			})
		}
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	})
}
