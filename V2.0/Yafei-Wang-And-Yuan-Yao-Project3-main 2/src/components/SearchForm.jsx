import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

export default function SearchForm(props) {
    const navigate = useNavigate();
    const [Year, setYear] = useState('');
    const params = useParams();
    // const [Make, setMake] = useState('');
    // const [Model, setModel] = useState('');
    // const [State, setState] = useState('');

    function searchCars() {
        Axios.get('/api/cars/' + params.year)
            .then(response => {
                navigate('/');
            })
            .catch(error => console.log(error));
        // Axios.get('/api/cars/', { params: { Year: Year } }).catch(error => console.log(error));
    }

    return (
        <div>
            <form className="search-form">
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
                <input class="search-form-button" type="submit" value="Search" onClick={() => searchCars()} />
            </form>
        </div>
    )
}