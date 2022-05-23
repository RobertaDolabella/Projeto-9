import { BrowserRouter, Routes, Route , useParams} from "react-router-dom";
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Header from "./Header";
import Movie from "./Movie";
import Footer from "./Footer";
import TimeSheet from './TimeSheet'
import Seats from "./Seats";
import Succeed from "./Succeed";

export default function App(){
const [image, setImage] = useState("")
const [id, setId] = useState("")
const [title, setTitle] = useState("")
const [lista, setLista] = useState([])
const [movieid, setMovieid] = useState(0)
const [showtime, setShowtime] = useState([])
const [timelist, setTimelist] = useState([])
const [time, setTime] = useState([])
const [seatlist, setSeatlist] = useState([])
const [selectseat, setSelectseat] = useState([]) 
const [showlist, setShowlist] = useState([])
const [timeid, setTimeid] = useState("")
const [weekday, setWeekday] = useState("")
const [name, setName] = useState("")
const [cpf, setCpf] = useState("")
const [list, setList] = useState([])
const [chosenseats, setChosenseats] = useState([])
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Movie 
            setImage={setImage}
            setId={setId} 
            id={id}
            setLista ={setLista}
            lista ={lista}
            setMovieid = {setMovieid}
            setTitle={setTitle}
            />}/>
            <Route path='/filme/:idMovie' element={< TimeSheet 
            lista={lista}
            id={id}
            title={title}
            setTitle={setTitle}
            setImage={setImage}
            setTime={setTime}
            time={time}
            setTimelist={setTimelist}
            timelist={timelist}
            showtime={showtime}
            setShowtime={setShowtime}
            setTimeid={setTimeid}
            setShowlist={setShowlist}
            showlist ={showlist}
            />}/>
             <Route path='/sessao/:idtime' element={< Seats
            seatlist={seatlist}
            setSeatlist= {setSeatlist}
            timeid= {timeid}
            
            setName={setName}
            setCpf = {setCpf}
            name={name}
            cpf={cpf}
            setList={setList}
            list={list}
            chosenseats ={chosenseats}
            setChosenseats ={setChosenseats}
            />}/>
             <Route path='/sessao/sucesso' element={< Succeed title={title}
             selectseat = {selectseat} timelist={timelist} timeid={timeid} showtime={showtime}
              setShowtime={setShowtime} setWeekday={setWeekday} weekday={weekday} setTime={setTime} time = {time}

            />}/>
        </Routes>
       
        < Footer title={title} image={image} id={id} lista = {lista} time={time}/>
    </BrowserRouter>
    )
   


}

ReactDOM.render(<App />, document.querySelector(".root"));