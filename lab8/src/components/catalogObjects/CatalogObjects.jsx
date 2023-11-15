import CatalogFilters from "../catalogFilters/CatalogFilters";
import Card from "../card/Card";
import React, {useState} from "react";

import './catalogObjects.css'

import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";

export const objectsData = [
  {
      id: 0,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 1000,
  },
  {
      id: 1,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 800,
  },
  {
      id: 2,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 900,
  },
  {
      id: 3,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 100,
  },
  {
      id: 4,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 2000,
  },
  {
      id: 5,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 450,
  },
  {
      id: 6,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 700,
  },
  {
      id: 7,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 60,
  },
];

function CatalogObjects({ onFilterApply }) {
  const allObjectsData = objectsData;
  const [filteredObjects, setFilteredObjects] = useState(allObjectsData);

  const handleFilterApply = (selectedFilters) => {
    const searchQuery = document.getElementById("mySearch").value.toLowerCase();

    const filtered = allObjectsData.filter((object) => {
      // Check if the selected filter value is not "Any [property]"
      const nameMatch =
        selectedFilters.name !== "Any name" ? object.title === selectedFilters.name : true;

      // Check if the selected price range is not "Any price"
      const priceRange = selectedFilters.price.split('-');
      const minPrice = parseFloat(priceRange[0]);
      const maxPrice = parseFloat(priceRange[1]);

      const priceMatch =
        selectedFilters.price !== "Any price"
          ? object.price >= minPrice && object.price <= maxPrice
          : true;

      const strengthMatch =
        selectedFilters.strength !== "Any strength"
          ? object.strength === selectedFilters.strength
          : true;

      const nameSearchMatch = object.title.toLowerCase().includes(searchQuery);

      // Return true if all conditions are met
      return nameMatch && priceMatch && strengthMatch && nameSearchMatch;
    });

    // Update the state with the filtered objects
    setFilteredObjects(filtered);

    // Pass the filtered objects to the parent component
    onFilterApply(filtered);
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
               itemId={object.id}
          />
        ))}
      </div>
    </section>
  );
}

export default CatalogObjects;
