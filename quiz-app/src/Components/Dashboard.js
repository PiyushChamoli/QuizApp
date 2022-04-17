import React, { Component } from "react";
import { Route } from "react-router-dom";
import Category from "./Category";
import Header from "./Header";
import Levels from "./Levels";
import QuizPage from "./QuizPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { category: null, level: null };
  }

  handleAddCategory = (event, category) => {
    console.log("clicked");
    this.setState({ category: category });
  };

  handleDifficulty = (event, level) => {
    this.setState({ level: level });
  };

  render() {
    return (
      <>
        <Header />
        <Route path="/" exact>
          <Category
            category={this.state.category}
            handleAddCategory={this.handleAddCategory}
          />
          <Levels
            level={this.state.level}
            category={this.state.category}
            handleDifficulty={this.handleDifficulty}
          />
        </Route>
        <Route path="/quiz/:category/:level" component={QuizPage} />
      </>
    );
  }
}

export default Dashboard;
