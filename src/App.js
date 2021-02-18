import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ''
    };
  }
  handleChnage = e => {
    this.setState({ searchField: e.target.value});
  };
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( Response => Response.json())
  .then(users => this.setState({monsters : users}));
}
  render() {
    const { monsters, searchField } = this.state; 
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) //This includ emethodis used to search the valuein the array monster.name
    );
    return (     
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox 
       placeholder = 'Search Monsters'
       handleChnage =  { this.handleChnage }
      /> 
      <Cardlist monsters = {filterMonsters}/>
    </div>
    )
  }
}


export default App;
