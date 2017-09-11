import Star from './Star'

const StarRating = ({ starsSelected=0, totalStars=5 }) =>
    <div className="star-rating">
        <p>StarRating stateless</p>
        <Star />
    </div>

export default StarRating