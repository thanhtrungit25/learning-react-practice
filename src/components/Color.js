import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

const Color = ({ title, color, rating=0 }) =>
    <section className="color">
        <h1>Color title</h1>
        <button>X</button>
        <div className="color"
             style={{ backgroundColor: "blue" }}>
        </div>
        <div>
            <StarRating />
        </div>
    </section>

export default Color