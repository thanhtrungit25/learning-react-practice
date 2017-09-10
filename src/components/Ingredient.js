const Ingredient = ({ name, amount, measurement }) =>
    <div>
        <li className="amount"><span>{name} </span></li>
        <li className="measurement"><span>{measurement} </span></li>
        <li className="name"><span>{name} </span></li>
    </div>

Ingredient.displayName = "Ingredient"

export default Ingredient