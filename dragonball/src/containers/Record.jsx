import React, {Component} from 'react'
import recordImg from '../public/images/record.png'

export default class Record extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div >
                <img style={{width:"100%", height: "80%", background: `url(${recordImg})`, backgroundSize: "cover"}} src={recordImg} alt={"record"}/>
            </div>
        )
    }

}
