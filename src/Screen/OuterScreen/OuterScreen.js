import React, { Component } from 'react'
import OuterScreenSlider from '../../Component/OuterScreenSlider'
import navigationStrings from '../../constants/navigationStrings'

export default class OuterScreen extends Component {
    _onDone=()=>{
        this.props.navigation.navigate(navigationStrings.OUTERPAGE)
    }
    render() {
        return (
           <>
                <OuterScreenSlider _onDone={this._onDone}/>
        </>
        )
    }
}
