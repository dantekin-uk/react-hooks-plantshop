import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to store the list of plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // State to store the current search term for filtering plants
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all plants from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Handler function to add a newly created plant to the state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Logic to filter the plants shown on the page based on the search query
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
