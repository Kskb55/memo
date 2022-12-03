import Item from './item';



const List = ({data,deleteData,submitData}) =>{



    return <div>
        <div className="font list">已新增列表</div>
        {
            data.map((item)=> {
                const {id,note1,note2,note3,note4}=item
                return <Item 
                note1={note1} 
                note2={note2}
                note3={note3}
                note4={note4}
                key={id}
                deleteData={deleteData}
                id={id}
                submitData={submitData}
                />
            } )
        }
   
    
        

    </div>

};

export default List ;