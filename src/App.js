import React from "react";
import "./styles.css";
import { connect } from "./react-redux";

function App(props) {
  return (
    <div className="App">
      {props.count}
      <button onClick={() => props.addCount()}>增加</button>
    </div>
  );
}

const addCountAction = {
  type: "plus"
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => {
      dispatch(addCountAction);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
