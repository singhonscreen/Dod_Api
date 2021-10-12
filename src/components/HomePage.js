import React, { useEffect, useState } from 'react';
import axios  from 'axios';

import DogImage from './DogImage';
const HomePage = () => {
       const [state, setState] = useState([]);
       const [imageSrc, setImageSrc] = useState()
       const [showData, setShowData] = useState("african");

       useEffect(()=>{
        const fetchApi = async()=>{
            const res = await axios.get('https://dog.ceo/api/breeds/list/all');
            // setState(res.data.message)
            // console.log(res)
          const data =  (Object.keys(res.data.message));
          setState(data)
          // console.log(data)
        }
        fetchApi();
       },[])
       
       useEffect(()=>{
        const fetchApi2 = async()=>{
            const res2 = await axios.get(`https://dog.ceo/api/breed/${showData}/images/random`);
           
            setImageSrc(res2.data.message)
          // console.log(res2.data.message)
        }
        fetchApi2();
       },[showData])

       const filterItem = (co) => {
        const updatedimg = state.filter((curelmt) => {
          return curelmt === co;
        })
        setShowData(updatedimg)
      }

    return (
      <>
        <div className = "main_container">

        <h4>BREEDS LIST
        </h4>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="true">
        {showData}
        </a>
        <ul className="dropdown-menu drop_down" aria-labelledby="navbarDropdown">
        {
            state.map((item)=>{
                return    <li><button className="dropdown-item" onClick={() => filterItem(item)} >{item}</button></li>
              })
          }
         
        </ul>
        </div>
        <div>
        <DogImage imageSrc={imageSrc} />
        </div>
        </>
    )
}

export default HomePage
