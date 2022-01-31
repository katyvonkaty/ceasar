import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  onFormSubmitTest = (event) => {
    event.preventDefault();
    this.props.onFormSubmitTest(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
          <p> Get Cryptic Below </p>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button class="ui purple basic button" onClick={this.onFormSubmit}>
              {" "}
            <b>  Encrypt </b>
            </button>
            <button
              class="ui purple basic button"
              onClick={this.onFormSubmitTest}
            >
              {" "}
              <b> Decrypt </b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
