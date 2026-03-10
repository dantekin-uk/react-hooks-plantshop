import React, { useState } from "react";

function PlantCard({ plant }) {
  // Local state to track if a plant is in stock (non-persisting)
  const [isInStock, setIsInStock] = useState(true);

  // Function to toggle the in-stock status
  function handleToggleStock() {
    setIsInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* Conditional rendering for the in-stock button */}
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
