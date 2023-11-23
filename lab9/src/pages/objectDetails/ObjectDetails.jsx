import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDetailedStoneInfo} from "../../fetching"; // Assuming the fetching file is in the same directory as your component

import './objectDetails.css'

const ObjectDetails = () => {
  const { id } = useParams();
  const [objectsData, setObjectsData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log("use item")

    // Fetch detailed stone info when the component mounts
    getDetailedStoneInfo(id)
      .then(response => {
        console.log("select item")
        setSelectedItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching detailed stone info:', error);
      });
  }, [id]);

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  const imagePath = selectedItem.img;

  return (
    <section>
      <div className="object-detail">
        <div className="left-side">
          <img className="object-detail__img" src={imagePath} alt={selectedItem.title} height={300} width={300} />
        </div>
        <div className="right-side">
          <div className="object-detail__strength">
            Strength: {selectedItem.strength}
          </div>
          <div className="object-detail__title">
            {selectedItem.title}
          </div>
          <div className="object-detail__description">
            {selectedItem.description}
          </div>

          <div className="object-ditail__fields">
            <div className="input">
              <form>
                <label>
                  <input type="number" id="fname" placeholder="Countable field" min={1} />
                </label>
              </form>
            </div>
            <div className="options">
              <select>
                <option value="someOption">Any item</option>
                <option value="otherOption">Item 1</option>
                <option value="otherOption">Item 2</option>
                <option value="otherOption">Item 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="object-detail__price">Price: {selectedItem.price} $</div>
    </section>
  );
}

export default ObjectDetails;
