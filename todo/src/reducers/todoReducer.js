
export const ADD_TODO = "ADD_TODO"


export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 1892987589
  }, {
    item: 'Cloud watch',
    completed: false,
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
        default: 
          return state;
    
      }
  };