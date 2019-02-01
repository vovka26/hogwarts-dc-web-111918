import React, {Component} from 'react'

class Filter extends Component {
    render(){
        return (
            <div className='filterWrapper'>
                <div><label>Greased: <input 
                    onChange={this.props.onChangeGreased}
                    type='checkbox'
                    value='greased'/>
                </label>
                </div>
                <select onChange={this.props.onChangeFilter}>
                    <option value='no-sorting'>No Sorting</option>
                    <option value='name'>Sort By Name</option>
                    <option value='weight'>Sort By Weight</option>
                </select>
            </div>
        )
    }
}

export default Filter