
import axios from 'axios'
import { Link } from "react-router-dom";
import './Movies.css'
import { useState, useEffect } from 'react';

export default function Movie({ setId, setLista, lista}) {
    const [selected, setSelected] = useState(false)
    console.log("entrou")
    const [api, setApi] = useState([])
    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promisse.then(resposta => {
            setLista(resposta.data);
        });

    }, [])
    console.log(lista)
    
    return (
        <div className='movies'>
            {lista.map((element, index) =>
                <div className='movie'>
                    <Link to={`/filme/:${element.id}`}>
                        <button onClick={() => setId(element.id)}>
                            <img src={element.posterURL} width="120px" height="192px" ></img>
                        </button>

                    </Link>
                </div>
            )}
        </div>
    )
}
