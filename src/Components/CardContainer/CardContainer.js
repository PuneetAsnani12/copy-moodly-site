import Card from "../Card/Card";
import items from "../../storage/items"
import "./card-container.styles.scss"
const CardContainer = () => (
  <div className="Card-Container">
    {items.map((item)=>{
        return <Card key={item.name} title={item.name} Icon={item.image} sound={item.sound}></Card>
    })}
  </div>
);

export default CardContainer;
