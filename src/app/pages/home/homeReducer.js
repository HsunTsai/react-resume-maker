import { FETCH_RESUME_DATA_SUCCESS, FETCH_RESUME_DATA_FAILED } from './homeAction';

const INITIAL_STATE = {
	resumeData: null,
};

const home = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_RESUME_DATA_SUCCESS:
			return {
				...state,
				/* 把每張card都產生id 以利card dragger使用 */
				resumeData: {
					...action.payload,
					cards: action.payload.cards.map((item, index) => ({ ...item, id: index.toString() })),
				},
			};
		case FETCH_RESUME_DATA_FAILED:
			return { ...state, resumeData: {} };
		default:
			return state;
	}
};

export default home;
