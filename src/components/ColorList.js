import { PropTypes } from 'react'
import Color from './Color'
import { rateColor, removeColor } from '../actions'
import '../../stylesheets/ColorList.scss'
import { sortFunction } from '../lib/array-helpers'

const ColorList = ({ store }) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))

    return (
        <div className="color-list">
            {(sortedColors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                sortedColors.map(color =>
                    <Color key={color.id}
                        {...color}
                        onRate={(rating) =>
                            store.dispatch(
                                rateColor(color.id, rating)
                            )
                        }
                        onRemove={() =>
                            store.dispatch(
                                removeColor(color.id)
                            )
                        }
                    />
                )
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func 
}

export default ColorList