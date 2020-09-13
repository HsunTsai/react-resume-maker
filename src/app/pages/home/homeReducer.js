import { FETCH_RESUME_DATA_SUCCESS, FETCH_RESUME_DATA_FAILED } from './homeAction';

const INITIAL_STATE = {
	resumeData: null,
};

const home = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_RESUME_DATA_SUCCESS:
			return { ...state, resumeData: action.payload };
		case FETCH_RESUME_DATA_FAILED:
			return { ...state, resumeData: {} };
		default:
			return state;
	}
};

export default home;
