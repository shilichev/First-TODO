import {
  ADD_NEW_TODO,
  DELETE_TODO_BY_ID,
  UPDATE_TODO_BY_ID,
  SET_TODOS_LIST,
} from "../constants/constants";

const initialState = [];

const todosReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_TODOS_LIST: {
      return actions.todos;
    }
    case ADD_NEW_TODO: {
      return [actions.newTodo, ...state];
    }
    case UPDATE_TODO_BY_ID: {
      return state.map((item) => {
        if (item.id === actions.id) {
          return { ...item, ...actions.newTodo };
        }

        return item;
      });
    }
    case DELETE_TODO_BY_ID: {
      return state.filter((item) => item.id !== actions.id);
    }
    default:
      return state;
  }
};

export default todosReducer;
