
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import './TimeSheet.css'
export default function TimeSheet({ setTitle, setImage, id, lista, timelist, setTimeid, setTimelist, time, setTime, showtimes, setShowtime }) {
    const { idMovie } = useParams();
    useEffect(() => {
        const promisseTime = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
        promisseTime.then(response => {
            setTimelist(response.data.days);

        });
    }, []);


    setTitle(lista[id - 1].title)
    setImage(lista[id - 1].posterURL)


    function timereturn(element) {

        let aux = [...element.showtimes]
        return (
            <div>
                <h2 className='day'> {element.weekday} - {element.date} </h2>
                <div>
                    {aux.map((internalElement) => <Link to={`/sessao/:${internalElement.id}`}><button className="time-button" onClick={() => setTimeid(internalElement.id)}>{internalElement.name}</button> </Link>)}
                </div>
            </div>
        )
    }


    return (
        <>
            <div>
                <h1>Selecione o Horário</h1>
            </div>
            <div className="time-container">
                {timelist.map((element) => timereturn(element))
                }
            </div>
        </>
    )

}