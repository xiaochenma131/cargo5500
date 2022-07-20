import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function SearchForm(props) {
    const navigate = useNavigate();
    const [Year, setYear] = useState('');
    const params = useParams();
    // const [Make, setMake] = useState('');
    // const [Model, setModel] = useState('');
    // const [State, setState] = useState('');

    function searchCars() {
        console.log('*****Search is running*****');
        // Axios.get('/api/cars/search' + params.year)
        //     .then(response => {
        //         navigate('/search');
        //     })
        //     .catch(error => console.log(error));
        Axios.get('/api/cars/search', { params: { Year: Year } }).catch(error => console.log(error));
    }

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
                {/* <Button size="lg" className="search-form-button" type="submit" onClick={() => searchCars()} >
                    Submit
                </Button> */}
                <input type="submit" value = "test"></input>
            </form>
            
        </div>
    )
}