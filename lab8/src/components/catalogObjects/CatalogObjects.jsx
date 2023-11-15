import CatalogFilters from "../catalogFilters/CatalogFilters";
import Card from "../card/Card";
import {useState} from "react";

import './catalogObjects.css'

import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";
import {Link} from "react-router-dom";

const objectsData = [
  {
      id: 1,
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
      {
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 2000,
  },
  {
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 450,
  },
  {
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 700,
  },
  {
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 60,
  },
];

function CatalogObjects({onFilterApply}) {
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
};



  return (
    <section className="catalog">
      <div className="catalog-filters">
        <CatalogFilters onFilterApply={handleFilterApply} />
      </div>
      <div className="catalog-objects">
        {filteredObjects.map((object, index) => (
          // <Link to={`/object/${index}`} key={index}>
            <Card
              title={object.title}
              strength={object.strength}
              img={object.img}
              description={object.description}
              price={object.price}
            />
          // </Link>
        ))}
      </div>
    </section>
  )
}


export default CatalogObjects;