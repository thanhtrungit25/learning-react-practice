import '../../stylesheets/APP.scss'
import { NewColor, Menu, Colors } from './containers'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App