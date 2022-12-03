import "./item.css";




const Item = ({id,note1,note2,note3,note4,deleteData,submitData}) =>{
    function delete1 (){
        deleteData((prev)=>{
            submitData.current = true
            return prev.filter(item =>item.id !== id )
        })
    }

    return <div className="item">
        <div className="text font">
            標題: {note1}<br/>日期時間: {note2} {note3} <br/>備註: {note4}
        </div>
        <div className="btn" onClick={delete1}>刪除</div>
    </div>
};

export default Item ;