import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

class Color extends Component {

    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    render() {
        const {title, color, rating, onRate, onRemove} = this.props
        return (
            <section className="color" style={this.style}>
                <h1>{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div>
            </section>
        )
    }

}


Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
}

Color.defaultProps = {
    rating: 0,
    onRate: f=>f,
    onRemove: f=>f
}

export default Color