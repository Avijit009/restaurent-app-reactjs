import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";
import COMMENTS from "../../data/comments";

class Menu extends Component {
  
  state = {
    dishes: DISHES,
    comments: COMMENTS,
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
    const menu = this.state.dishes.map((dish) => {
      return (
        <MenuItem
          dish={dish}
          onSelectedDish={this.onSelectedDish}
          key={dish.id}
        />
      );
    });

    const comments = this.state.selectedDish
      ? this.state.comments.filter(
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

export default Menu;
