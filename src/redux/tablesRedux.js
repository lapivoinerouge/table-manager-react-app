//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// action creators
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// actions
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });

// requests to API
export const fetchTables = () => {
	return (dispatch) => {
		fetch('http://localhost:3131/api/tables')
		.then(res => res.json())
		.then(tables => dispatch(updateTables(tables)));
	}
};

export const editTable = table => {
	return (dispatch) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(table)
		}

		fetch('http://localhost:3131/api/tables/' + table.id, options)
		.then(() => dispatch(updateTable(table)));
	}
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
			return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map(table => table.id === action.payload.id ? { ...table, ...action.payload } : table);
    default:
      return statePart;
  };
};
export default tablesReducer;