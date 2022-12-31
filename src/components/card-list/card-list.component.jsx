import Card from "../card/card.component";
import './card-list.styles.css'


const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster,index) => {
            return <Card monster={monster} key={index} />
        })}
    </div>
)

export default CardList;