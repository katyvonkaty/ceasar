import React from "react";
import SearchBar from "./SearchBar"
import Intro from "./Intro"

import encrypt from "../apis/encrypt"

class App extends React.Component {

  state={encrypt: "", decrypt:""}

  onTermSubmit = async (term) => {
    const response = await encrypt.get(`/encrypt/${term}`, {
      params: {
        term: term,
      }
    });

    this.setState({encrypt:response.data})
}


  onTermSubmitTest = async (term) => {
    const response = await encrypt.get(`/decrypt/${term}`, {
      params: {
        term: term,
      }
    });

    this.setState({decrypt:response.data})
}

  render(){
    return  (
      <div className="ui container">
      <Intro />
      <img src="https://media.istockphoto.com/vectors/roman-citizens-man-and-woman-vector-id1218894295?k=20&m=1218894295&s=612x612&w=0&h=mGKwWPRkqoTIUzskgOfOPGzNOfcKO6T61qC3a4YcESc=" />
        <SearchBar onFormSubmit={this.onTermSubmit} onFormSubmitTest={this.onTermSubmitTest}/>
         <p> <b>Encrypted Text:</b> {this.state.encrypt} </p>
         <p> <b>Decrypted Text:</b> {this.state.decrypt} </p>
      </div>
    )
  }
}

export default App;
