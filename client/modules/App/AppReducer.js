// Import Actions
// 该模块对应的 Actions 导入
import { TOGGLE_ADD_POST } from './AppActions';

// Initial State
// 初始化状态 state
const initialState = {
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
