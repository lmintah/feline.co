import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';
import Scroll from './Scroll';
import './App.css';

const state = {
  friends: friends,
  searchfield: ''
}

class App extends Component {
  constructor(){
    super()
    this.state={
      friends: friends,
      searchfield: ''
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }
  render (){
    const filteredFriends = this.state.friends.filter(friends=>{
      return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
    <div className='tc'>
    <h1>Feline & Company</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
      <CardList friends={filteredFriends}/>
    </Scroll>
    </div>
  );
  }
}

export default App;
