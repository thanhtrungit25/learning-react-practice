import Color from './Color'
import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        <Color />
    </div>

export default ColorList