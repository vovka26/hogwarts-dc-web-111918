import React, {Component} from 'react'
import HogCard from '../components/HogCard'


class HogsListContainer extends Component {
    render(){
        return (
            <div className='ui cards'>
                {this.hogsData !==null ? this.props.hogsData.map((hog, index) => <HogCard hog={hog} key={index}/>) : null}
            </div>
        )
    }
}

export default HogsListContainer