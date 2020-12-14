/**
 * 修改state的规则抽离，形成reducer
 */
const initialState = {
  count: 0
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1
      };
    case "subtract":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return initialState;
  }
}

/**
 *
 * @param {*} reducer
 */
export function createStore(reducer) {
  let currentState = {}; // 保存公共状态

  const observers = []; // 维护一个监听者队列

  const getState = () => currentState; // getter

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    // 当currentState没变化时，不需要推送，待优化
    observers.forEach((fn) => fn());
  }; // setter

  const subscribe = (observer) => {
    observers.push(observer);
  }; // notify

  dispatch({ type: "@@REDUX_INIT" }); // store 初始化

  return { getState, dispatch, subscribe };
}
