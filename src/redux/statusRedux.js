//selectors
export const getStatusOptions = ({ status }) => status;

// action creators
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_STATUS_OPTIONS = createActionName('UPDATE_STATUS_OPTIONS');

// actions
export const updateStatusOptions = payload => ({ type: UPDATE_STATUS_OPTIONS, payload });

export const fetchStatusOptions = () => {
	return (dispatch) => {
		fetch('http://localhost:3131/api/status')
		.then(res => res.json())
		.then(statusOptions => dispatch(updateStatusOptions(statusOptions)));
	}
}

// action creators
const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUS_OPTIONS:
			return [...action.payload];
    default:
      return statePart;
  };
};
export default statusReducer;