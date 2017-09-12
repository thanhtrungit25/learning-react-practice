import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

class Color extends Component {

    componentWillMount() {
        console.log('componentWillMount')
        this.style = { backgroundColor: "#CCC" }
    }

    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate')
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
        this.style = null
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props
        const status = (rating > prevProps.rating) ? 'better': 'worse'
        console.log(`${title} is getting ${status}`)
    }

    render() {
        console.log('**render**')
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