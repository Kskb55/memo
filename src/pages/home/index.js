



import {API_GET_DATA} from '../../global/constance.js' ;



import List from './components/list.js';
import Edit from './components/edit.js';
import './index.css'
import './cssreset.css'
import { useState,useEffect,useRef } from 'react';

async function fetchData(setData){
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    setData(data)
}
async function fetchSetData(data){
    await fetch(API_GET_DATA,{
       method :"PUT",
       headers:{
        'Content-type':'application/json'
       },
       body: JSON.stringify({data})
    })
}



const Home = () =>{

    const [data,setData] = useState([]);
    const submitData = useRef(false);


    useEffect(()=>{
        if(!submitData){
            return
        }else{
        fetchSetData(data).then(data =>submitData.current= false)
    }
    },[data])

    useEffect(()=>{
        fetchData(setData)
    },[])
    // // 綁定框框內德data

    return <div className = "app">
        <Edit setData={setData} submitData={submitData} />
        <List data={data} deleteData={setData} submitData={submitData} />
        
    </div>
};

export default Home ;