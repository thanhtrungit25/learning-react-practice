import { PropTypes } from 'react'
import Star from './Star'

const StarRating = ({ starsSelected=0, totalStars=5, onRate=f=>f }) =>
    <div className="star-rating">
        <p>StarRating stateless</p>
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}
            />
        )}
        <p>{starsSelected} of {totalStars}</p>
    </div>

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating