import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          dishId: dishId,
          author: author,
          rating: rating,
          comment: comment,
        },
      }),
  };
};

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // console.log(this.state)
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );
    // this.props.dispatch({
    //   type: "ADD_COMMENT",
    //   payload: {
    //     dishId: this.props.dishId,
    //     author: this.state.author,
    //     rating: this.state.rating,
    //     comment: this.state.comment,
    //   },
    // });

    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your Name"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your Feedback"
            onChange={this.handleInputChange}
            required
          ></Input>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);
