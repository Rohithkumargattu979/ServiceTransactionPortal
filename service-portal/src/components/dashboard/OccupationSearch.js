import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./OS.css";

function OccupationSearch() {
  const [professionals, setprofessionals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchByCity, setSearchByCity] = useState("");
  const [searchByLocation, setsearchByLocation] = useState("");
  const [filteredprofessionals, setFilteredprofessionals] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/professionals/all")
      .then((res) => {
        setprofessionals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredprofessionals(
      professionals.filter((element) =>
        element.occupation.toLowerCase().includes(searchByCity.toLowerCase())
      ).filter((element) =>
        element.location.toLowerCase().includes(searchByLocation.toLowerCase())
      )
    );
  }, [searchByCity,searchByLocation, professionals]);

  if (loading) {
    return <p>Loading Occupations...</p>;
  }

  return (
    <div className="Search">
      <h1>List of professionals</h1>
      <input
        className="search-input-city"
        type="text"
        placeholder="Search by City..."
        onChange={(e) => setsearchByLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by Occupation..."
        onChange={(e) => setSearchByCity(e.target.value)}
      />
      {filteredprofessionals.map((element, idx)  => (
        <ProfessionalDetail key={idx} {...element} />
      ))}
     {filteredprofessionals.length===0 ? <h1>NO Results :(</h1> : <h1></h1>}
    </div>
  );
}

const ProfessionalDetail = (props) => {
  const { occupation, fullName, phoneNo, location } = props;

  return (
    <>
          
          <div className='ml-5 mt-3'>
            <Card style={{ width: '14rem' }}>
              <Card.Body>
                <Card.Title style={{color: 'black' }}>{fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{occupation}</Card.Subtitle>
                <Card.Text className="mb-2 text-muted" style={{color: 'black'}}>
                  <small>{location}</small>
                </Card.Text>
                <Card.Text style={{color: 'black'}}>
                <small>{phoneNo} </small>
                </Card.Text>
              </Card.Body>
           </Card>
      </div>
    </>
  );
};




const rootElement = document.getElementById("root");
ReactDOM.render(<OccupationSearch />, rootElement);
export default OccupationSearch;