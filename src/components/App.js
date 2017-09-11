import { Component } from 'react'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
    }

    render() {
        return (
            <div className="app">
                <p>App Component</p>
            </div>
        )
    }

}