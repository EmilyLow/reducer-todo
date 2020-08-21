
export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";


export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 1892987589
  }, {
    item: 'Cloud watch',
    completed: true,
    id: 2892987589
  }, 
  {
    item: 'Origami',
    completed: false,
    id: 3892987589
  }]

  export const todoReducer = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...state, {item: action.payload, completed:false, id: new Date() }]

      case MARK_COMPLETE:
        return state.map((todo) => {
          if(action.payload === todo.id) {
           return {...todo, completed: !todo.completed};
          }
          else {
            return todo;
          }
        }) 
        default: 
          return state;
    
      }
  };