import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsListContainer from '../containers/HogsListContainer'
import Filter from './Filter'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        greased: false, 
        sorting: 'no-sortings'
      }
    }

  onChangeGreased = (e) => {
    this.setState({
        greased : e.target.checked
    })
  }

  onChangeFilter = (e) => {
      this.setState({sorting : e.target.value})
  }

  filterGreasedHogs = () => {
    const hogsArray = hogs
    
    if (this.state.greased) {
      return hogsArray.filter(hog => hog.greased === true)
    }else {
      return hogsArray.filter(hog => hog.greased === false)
    }
  }

  filteredHogs = () => {
    const hogsArray = this.filterGreasedHogs()

    const currentFilter = this.state.sorting

    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    const sortedByName = hogsArray.slice().sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    
    const sortedByWeight = hogsArray.slice().sort((a,b) => {
      return a[weight] - b[weight]
    })
    
    if (currentFilter === 'name') {
      return sortedByName
    }else if (currentFilter === 'weight') {
      return sortedByWeight
    }else{
      return hogsArray
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Filter onChangeFilter={this.onChangeFilter} onChangeGreased={this.onChangeGreased}/>
          <HogsListContainer hogsData={this.filteredHogs()}/>
      </div>
    )
  }
}

export default App;
