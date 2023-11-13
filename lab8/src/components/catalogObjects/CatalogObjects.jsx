import CatalogFilters from "../catalogFilters/CatalogFilters";
import Card from "../card/Card";
import {useState} from "react";

import './catalogObjects.css'

import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";

const objectsData = [
  {
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 1000,
  },
  {
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 800,
  },
  {
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 900,
  },
  {
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 100,
  },
];

function CatalogObjects() {
    const allObjectsData = objectsData;
    const [filteredObjects, setFilteredObjects] = useState(allObjectsData);

    const handleFilterApply = (selectedFilters) => {
  const filtered = allObjectsData.filter((object) => {
    // Check if the selected filter value is not "Any [property]"
    const nameMatch =
      selectedFilters.name !== "Any name" ? object.title === selectedFilters.name : true;
    const priceMatch =
      selectedFilters.price !== "Any price" ? object.price === selectedFilters.price : true;
    const strengthMatch =
      selectedFilters.strength !== "Any strength"
        ? object.strength === selectedFilters.strength
        : true;

    // Return true if all conditions are met
    return nameMatch && priceMatch && strengthMatch;
  });

  // Update the state with the filtered objects
  setFilteredObjects(filtered);
};

  return (
    <section className="catalog">
      <div className="catalog-filters">
        <CatalogFilters onFilterApply={handleFilterApply} />
      </div>
      <div className="catalog-objects">
        {filteredObjects.map((object, index) => (
          <Card
            key={index}
            title={object.title}
            strength={object.strength}
            img={object.img}
            description={object.description}
            price={object.price}
          />
        ))}
      </div>
    </section>
  );
}


export default CatalogObjects;