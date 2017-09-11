import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

const Color = ({ title, color, rating=0 }) =>
    <section className="color">
        <h1>{title}</h1>
        <button>X</button>
        <div className="color"
             style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating />
        </div>
    </section>

export default Color