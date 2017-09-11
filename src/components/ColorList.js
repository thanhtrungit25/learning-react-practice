import Color from './Color'
import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        <p>ColorList stateless functional</p>
        <Color />
    </div>

export default ColorList