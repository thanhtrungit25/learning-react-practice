import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

const Color = ({ title, color, rating=0 }) =>
    <section className="color">
        <p>Color stateless functional</p>
        <div>
            <StarRating />
        </div>
    </section>

export default Color