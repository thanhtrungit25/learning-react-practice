import { Component } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'

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
                <AddColorForm />
                <ColorList />
            </div>
        )
    }

}