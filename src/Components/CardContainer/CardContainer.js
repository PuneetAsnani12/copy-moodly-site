import Card from "../Card/Card";
import items from "../../storage/items"

const CardContainer = () => (
  <div className="CardContainer">
    {items.map((item)=>{
        return <Card title={item.name} Icon={item.image} sound={item.sound}></Card>
    })}
  </div>
);

export default CardContainer;
