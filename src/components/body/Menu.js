import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";

import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comments";


const mapStateToProps = (state) =>{
  console.log(state);
  return{
      dishes: state.dishes,
      comments: state.comments
  }
}

class Menu extends Component {
  
  state = {
    // dishes: DISHES,
    // comments: COMMENTS,
    selectedDish: null,
    modalOpen: false,
  };

  onSelectedDish = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: true,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    document.title = "Menu";
    const menu = this.props.dishes.map((dish) => {
      return (
        <MenuItem
          dish={dish}
          onSelectedDish={this.onSelectedDish}
          key={dish.id}
        />
      );
    });

    const comments = this.state.selectedDish
      ? this.props.comments.filter(
          (comment) => comment.dishId === this.state.selectedDish.id
        )
      : [];

    const dishDetail = this.state.selectedDish ? (
      <DishDetail dish={this.state.selectedDish} comments={comments} />
    ) : null;

    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>

          <Modal isOpen={this.state.modalOpen}>
            {dishDetail}
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>
                {" "}
                Close{" "}
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps) (Menu);
