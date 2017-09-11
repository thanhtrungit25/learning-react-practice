import Star from './Star'

const StarRating = ({ starsSelected=0, totalStars=5 }) =>
    <div className="star-rating">
        <p>StarRating stateless</p>
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i} />
        )}
    </div>

export default StarRating