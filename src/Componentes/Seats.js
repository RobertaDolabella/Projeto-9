import axios from 'axios'
import { Link } from "react-router-dom";
import './Seats.css'
import SeatsAvailable from './SeatsAvailable';
import SeatsNotAvailable from './SeatsNotAvailable';
import SeatSelected from './SeatSelected';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
export default function Seats({ setSeatlist, seatlist, timeid, setCpf, setName, name, cpf, setSelectseat }) {
    const { idtime } = useParams();
    const navigate = useNavigate();
let chosenseats =[]


    useEffect(() => {
        const promisseSeats = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${timeid}/seats`)
        promisseSeats.then(response => {
            setSeatlist(response.data.seats);
        });
	}, []);

    let listaAux = [...seatlist]
    listaAux = listaAux.map((value, i) => {
        return {
            ...value,
            tap: false
        }
    })
    
    function SeatStatus(element) {
        if (element.isAvailable === true) {
            return (
                <button className="available" onClick={(e) => Selectseat(e.target)}><SeatsAvailable number={element.name} /></button>
            )
        }
        if (element.isAvailable === false) {
            return (
                <button className="notAvailable" onClick={() => alert("Esse assento não se encontra disponivel")}><SeatsNotAvailable number={element.name} /></button>
            )
        }
        if (element.isAvailable === "selected") {
            return (
                <button className="selected" onClick={(e) => Unselectseat(e.target)} ><SeatSelected number={element.name} /> </button>
            )
        }
    }
    function Selectseat(event){
        let  element = event.innerHTML
          listaAux.filter((e,i)=>{
          if(e.name===element){
                let index = i
                listaAux[index].isAvailable = "selected"
          }
      })
   
    setSeatlist([...listaAux])
    }

    function Unselectseat(event){
        let  element = event.innerHTML
      listaAux.filter((e,i)=> { 
          if(e.name===element){
               let index = i
               listaAux[index].isAvailable = true
          }
      })
    
    setSeatlist([...listaAux])
    }
    function Filledform(){
        chosenseats = listaAux.filter((seats, i)=>seats.isAvailable==="selected")
            console.log(chosenseats)
        console.log(chosenseats)
        const userinfo = [{
            ids: chosenseats.map((seats)=>seats.id),
            name,
            cpf
        }]
        console.log(userinfo)
        let aux = chosenseats.map((seats)=>seats.name)
        console.log(aux)
        setSelectseat([...aux])
        useEffect(() => {
            const promissepost = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, userinfo)
            promissepost.then(()=>navigate('/sessao/sucesso'))
            promissepost.catch(()=>alert("deu ruim"))
        }, []);
    }

    return (
        <div>
            <h2>Selecione o(s) assento(s)</h2>
            <div className="conatiner-seats">
                {seatlist.map((element) => SeatStatus(element))}
            </div>
            <div className='legenda'>
                <div className='selected'>
                    <button></button>
                    <h6> selecionado</h6>
                </div>
                <div className='available'>
                    <button></button>
                    <h6> disponivel</h6>
                </div>
                <div className='notAvailable'>
                    <button></button>
                    <h6> indisponivel </h6>
                </div>
            </div>
            <div className='container-user'>
                <form>
                <div>
                    <h3>Nome do comprador:</h3>
                    <input placeholder='Digite seu nome...' onChange={(e)=>setName(e.target.value)} value={name} required></input>
                </div>
                <div>
                <h3>CPF do comprador:</h3>
                    <input placeholder='Digite seu CPF...' onChange={(e)=> setCpf(e.target.value)} value={cpf} required></input>
                </div>
                <button className='send' onClick = {Filledform} >Reservar assento(s) </button>
            </form>
            </div>
            

            

        </div>
    )

}