import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import '../../../stylesheets/Color.scss'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { removeColor, rateColor } from '../../actions'

class Color extends Component {

    render() {
        const {id, title, color, rating, timestamp, onRate, onRemove } = this.props
        const { store } = this.context
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>
                    <FaTrash />
                </button>
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating}
                                onRate={onRate} />
                </div>
            </section>
        )
    }
}

Color.contextTypes = {
    store: PropTypes.object
}

Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

Color.defaultProps = {
    rating: 0
}

export default Color