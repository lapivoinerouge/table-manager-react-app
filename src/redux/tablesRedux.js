//selectors
export const getAllTables = ({ tables }) => tables;

// action creators
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// actions
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
	return (dispatch) => {
		fetch('http://localhost:3131/api/tables')
		.then(res => res.json())
		.then(tables => dispatch(updateTables(tables)));
	}
}

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
			return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;