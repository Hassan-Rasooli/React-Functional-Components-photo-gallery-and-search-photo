import './card.style.css'

const Card = ({ monster }) => {
    const { id, firstName, maidenName, image } = monster;

    return (
        <div className="card-container" key={id}>
            <img
                alt={`monster ${firstName}`}
                src={image}
            />
            <h2>{maidenName}</h2>
        </div>
    )
}


export default Card;