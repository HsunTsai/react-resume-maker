import axios from 'axios';
import { openNotificationError } from '../../utils/notification';
import services from '../../config/services';

export const FETCH_RESUME_DATA_SUCCESS = 'FETCH_RESUME_DATA_SUCCESS';
export const FETCH_RESUME_DATA_FAILED = 'FETCH_RESUME_DATA_FAILED';

export const getResumeData = ({ dispatch }) => {
	axios
		.get(services.getResumeData)
		.then(response => {
			console.log('response', response);
			if (response.data) {
				dispatch({ type: FETCH_RESUME_DATA_SUCCESS, payload: response.data });
			} else {
				throw new Error('Parse resume data error');
			}
		})
		.catch(error => {
			dispatch({ type: FETCH_RESUME_DATA_FAILED });
			openNotificationError('error', 'Get Resume Data Error', error);
		});
};
