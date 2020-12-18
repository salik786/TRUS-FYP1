import React, { useState, useEffect } from "react";
import LandService from "../service/LandService";
import { Link } from "react-router-dom";


function Admin() {
    const [land, setLand] = useState([]);
    const [currentLand, setCurrentLand] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveLand();
    }, []);


    const retrieveLand = () => {
        LandService.getAll()
            .then(response => {
                setLand(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveLand();
        setCurrentLand(null);
        setCurrentIndex(-1);
    };

    const setActiveLand = (land, index) => {
        setCurrentLand(land);
        setCurrentIndex(index);
    };

    const removeAllLand = () => {
        LandService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        LandService.findByTitle(searchTitle)
            .then(response => {
                setLand(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-8">

            </div>
            <div className="col-md-6">
                <h4>Here is a List of Lands For Approvals</h4>

                <ul className="list-group">
                    {land &&
                        land.map((land, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveLand(land, index)}
                                key={index}
                            >
                                {land.location}
                            </li>
                        ))}
                </ul>

                <h6 className="text-danger mt-2">Click one of these for approval</h6>
            </div>
            <div className="col-md-6">
                {currentLand ? (
                    <div>
                        <h4>Property Information</h4>

                        <div>
                            <label>
                                <strong>OwnerId:</strong>
                            </label>{" "}
                            {currentLand.ownercnic}
                        </div>
                        <div>
                            <label>
                                <strong>OwnerName</strong>
                            </label>{" "}
                            {currentLand.ownername}
                        </div>
                        <div>
                            <label>
                                <strong>Location</strong>
                            </label>{" "}
                            {currentLand.location}
                        </div>
                        <div>
                            <label>
                                <strong>City:</strong>
                            </label>{" "}
                            {currentLand.city}
                        </div>
                        <div>
                            <label>
                                <strong>Province</strong>
                            </label>{" "}

                        </div>
                        <div>

                        </div>

                        <Link
                            to={`survey/${currentLand.id}`}

                            className="btn btn-primary"
                        >
                            Generate Declartion Letter
            </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Given Property ...</p>
                        </div>
                    )}
            </div>
        </div>
    );

};

export default Admin;