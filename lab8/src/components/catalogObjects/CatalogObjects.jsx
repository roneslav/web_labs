import './catalogObjects.css'
import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";
import CatalogFilters from "../catalogFilters/CatalogFilters";
import Objects from "../objects/Objects";
import Card from "../card/Card";


const objectsData = [
  { title: "Diamond", strength: "high", img: diamondImg, description: "It is a jewelry stone.", price: "1000 $" },
  { title: "Rubin", strength: "low", img: rubinImg, description: "It is a jewelry stone.", price: "800 $" },
  { title: "Smaragd", strength: "medium", img: smaragdImg, description: "It is a jewelry stone.", price: "900 $" },
  { title: "Stone", strength: "low", img: stoneImg, description: "It is a jewelry stone.", price: "100 $" },
];

function CatalogObjects() {
  return (
    <section className="catalog">
        <div className="catalog-filters">
            <CatalogFilters />
        </div>
      <div className="catalog-objects">
        {objectsData.map((object, e) => (
          <Card key={e} title={object.title} strength={object.strength} img={object.img} description={object.description} price={object.price} />
        ))}
      </div>
    </section>
  );
}


export default CatalogObjects;