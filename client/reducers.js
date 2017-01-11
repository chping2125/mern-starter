/**
 * Root Reducer
 * 根（全局）状态管理
 */
import { combineReducers } from 'redux';

// Import Reducers
// 导入不同模块的状态管理
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
// 使用 combineReducers 来把多个 reducer 创建成一个根 reducer。
// 详细可以参考 http://uprogrammer.cn/redux-in-chinese/docs/api/combineReducers.html
export default combineReducers({
  app,
  posts,
  intl,
});
