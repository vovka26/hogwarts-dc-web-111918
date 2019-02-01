import React, {Component} from 'react'

class HogCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            details: false
        }
    }

    changeCheckedStateHandler = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    transformHogName = () => {
        const withUnderscores = this.props.hog.name.toLowerCase().split(' ').join('_')
        return require(`../hog-imgs/${withUnderscores}.jpg`)
    }

    changeDetailsState = () => {
        this.setState({
            details: !this.state.details
        })
    }

    render(){
        return (
            <div className='ui eight wide column card'>
                <h3 className='headerText' onClick={this.changeDetailsState}>{this.props.hog.name}</h3>
                {!this.state.details ? 
                <div className='image'>
                    <img src={this.transformHogName()} alt='' />
                </div>
                :
                <div className='content'>
                    <h4>Specialty: {this.props.hog.specialty}</h4>
                    <div className='hoggyText'>Greased: {this.props.hog.greased ? 'yes' : 'no'}</div>
                    <h4>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
                    <h4 className='achievementText'>Highest medal achieved: {this.props.hog['highest medal achieved']}</h4>
                </div>
                }
            </div>
        )
    }
}

export default HogCard