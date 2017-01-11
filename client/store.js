/**
 * Main store function
 * 状态管理函数
 */
import { createStore, applyMiddleware, compose } from 'redux';
// redux-thunk 是一个比较流行的 redux 异步 action 中间件
// 详细了解请参考 http://www.tuicool.com/articles/ZviErea
import thunk from 'redux-thunk';
//redux-devtools 是一个非常棒的工具，它可以让你实时的监控Redux的状态树的Store
import DevTools from './modules/App/components/DevTools';
// 导入全局状态管理配置
import rootReducer from './reducers';

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  // 增强 store 的中间件： react-thunk
  const enhancers = [
    // 关于react-redux 的 applyMiddleware 方法看一看这里： http://uprogrammer.cn/redux-in-chinese/docs/api/applyMiddleware.html
    applyMiddleware(thunk),
  ];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    // 仅仅在客户端开发环境中使用devTools工具来监控 store
    // 用createDevTools()创建的DevTools组件有个特殊的静态方法instrument(),它返回一个store的增强器,
    // 在开发中你需要在compose中使用。即 const enhancers = compose(DevTools.instrument())
    // 注意：DevTools.instrument()要放在 applyMiddleware 后，因为你的 applyMiddleware 可以存在异步行为，
    // 为了确保所有的actions显示在store中，所以要放在后面。
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  // 创建 store
  // 关于react-redux createStore()方法可以看这里 http://uprogrammer.cn/redux-in-chinese/docs/api/createStore.html
  //
  // compose函数从右到左来组合多个函数。
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // For hot reloading reducers
  // 自动加载 reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // 让 webpack 热更新替换 reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      // 替换 store 当前用来计算 state 的 reducer。
      // 这是一个高级 API。只有在你需要实现代码分隔，而且需要立即加载一些 reducer 的时候才可能会用到它。
      // 在实现 Redux 热加载机制的时候用到它了。
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
