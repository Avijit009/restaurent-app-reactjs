import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
  console.log(state);
  return{
      dishes: state.dishes,
      sample: state.sample
  }
}

export class Home extends Component {
  render() {
    document.title = 'Home';
    return <div>Home</div>;
  }
}

export default connect(mapStateToProps) (Home);
