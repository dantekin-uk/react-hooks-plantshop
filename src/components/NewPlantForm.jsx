import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handler for form submission to create a new plant
  function handleSubmit(e) {
    e.preventDefault();
    // POST request to add a new plant to the backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: parseFloat(price),
      }),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddPlant(newPlant)); // Callback to update parent state
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled inputs for plant details */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
