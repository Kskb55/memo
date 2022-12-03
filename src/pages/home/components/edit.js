
import { useState } from 'react';
import {v4} from "uuid";

const Edit = ({setData,submitData}) =>{
    const [note1,setNote1] = useState("")
    
    function note1Change(e){
        setNote1(e.target.value)
    }
    const [note2,setNote2] = useState("")
    
    function note2Change(e){
        setNote2(e.target.value)
    }
    const [note3,setNote3] = useState("")
    
    function note3Change(e){
        setNote3(e.target.value)
    }
    const [note4,setNote4] = useState("")
    
    function note4Change(e){
        setNote4(e.target.value)
    }
    
    function addItem() {
        setData((rest) =>{
            submitData.current = true
            return [{id:v4(),note1,note2,note3,note4},...rest]
        }
        )
        setNote1("")
        setNote2("")
        setNote3("")
        setNote4("")
    }
 

    return <div>
        <div className="title">我的備忘錄</div>
        <div className="mother">
            <div className="container">
                <div className="font">記事:</div>
                <input type="text" value={note1} onChange={note1Change} placeholder="請輸入文字" className="input"></input>
                <div className="font">日期:</div>
                <input type="date"value={note2} onChange={note2Change} className="input"></input>
                <div className="font">時間:</div>
                <input type="time" value={note3} onChange={note3Change}className="input"></input>
                <div className="font">備註:</div>
                <textarea  value={note4}  onChange={note4Change} placeholder="說點什麼吧!" className="input textarea"></textarea>
                <div onClick={addItem} className="font button">新增</div>
             </div>
         </div>
   </div> 
};  

export default Edit ;