import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import FilterSidebar from "./FilterSidebar";
import MedicineCard from "./MedicineCard";
import "./Medicines.css"; // Import the CSS file for styling

const Medicines = () => {
  const [medicines, setMedicines] = useState([]); // State to hold medicine data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch medicine data from the backend
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:8080/medicines"); // Replace with your API URL
        setMedicines(response.data); // Set medicine data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Handle error
        setLoading(false); // Set loading to false
      }
    };
    const medicines = [
      { name: 'Medicine 1', price: 'Rs.1234', prescription: true },
      { name: 'Medicine 2', price: 'Rs.1234', prescription: false },
      { name: 'Medicine 3', price: 'Rs.1234', prescription: true },
  ];
    fetchMedicines(); // Call the function to fetch data
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error: {error}</p>; // Show error message

  return (
    <div className="medicines-page">
      <FilterSidebar />
      <div className="medicine-list">
        {medicines.map((medicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} /> // Use medicine._id as key
        ))}
      </div>
    </div>
  );
};

export default Medicines;
