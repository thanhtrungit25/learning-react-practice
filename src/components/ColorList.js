import Color from './Color'
import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {
            (colors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                colors.map((color) =>
                    <Color key={color.id}
                        {...color}
                    />
        )}
    </div>

export default ColorList