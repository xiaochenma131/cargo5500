import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CarCards from "./CarCards";


export default function SearchForm(props) {
    const [Year, setYear] = useState('');
    // const params = useParams();
    // // const [Make, setMake] = useState('');
    // // const [Model, setModel] = useState('');
    // // const [State, setState] = useState('');

    // function searchCars() {
    //     Axios.get('/api/cars/' + params.year)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    //     // Axios.get('/api/cars/', { params: { Year: Year } }).catch(error => console.log(error));
    // }
    const params = useParams();
    const [cars, setCars] = useState('');

    function getCars() {
        Axios.get("/api/cars/search" + params.Year)
            .then(function (response) {
                setCars(response.data);
            })
    }

    useEffect(getCars, []);
    return (
        <div>
            <form className="search-form" onSubmit={() => searchCars()}>
                <label>
                    Year:{' '}
                    <input type="text" name="Year" value={Year} onChange={e => setYear(e.target.value)} />
                </label>
                {/* <label>
                    Make:{' '}
                    <input type="text" name="Make" value={Make} onChange={e => setMake(e.target.value)} />
                </label>
                <label>
                    Model:{' '}
                    <input type="text" name="Model" value={Model} onChange={e => setModel(e.target.value)} />
                </label>
                <label>
                    State:{' '}
                    <input type="text" name="State" value={State} onChange={e => setState(e.target.value)} />
                </label> */}
                <input class="search-form-button" type="submit" value="Search" as={Link} to="/search" onClick={() => getCars()} />
                {/* <input class="search-form-button" type="submit" value="Search" /> */}
            </form >
            <CarCards cars={cars} />
        </div >
    )
}