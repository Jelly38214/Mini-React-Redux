import React from "react";

export const ReactReduxContext = React.createContext(null);
// 引入store， 使用getState获取， dispatch修改， subscribe 监听更新

// 包含两个组件<Provider /> & <Consumer />
/**
 * Provide
 */
export default class Provider extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    this.state = { store };
  }

  componentDidMount() {
    this.state.store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <ReactReduxContext.Provider value={this.state}>
        {this.props.children}
      </ReactReduxContext.Provider>
    );
  }
}

/**
 * Connect: connect(mapStateToProps, mapDispatchToProps)(App)
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    class Connect extends React.Component {
      static contextType = ReactReduxContext;
      componentDidMount() {
        this.context.store.subscribe(this.handleStoreChange.bind(this));
      }

      handleStoreChange() {
        this.forceUpdate();
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        );
      }
    }

    return Connect;
  };
}
