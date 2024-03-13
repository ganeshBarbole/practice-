import React, { useState } from 'react'
import data from './data/data'

const App = () => {
 const [selected , setSelected] = useState(null)
 const [enableMultipleSelection , setEnableMultipleSelction] = useState(false)
 const[multiple,setMultiple] = useState([])

 const handleSingleSelection = (getId) => {
    setSelected(getId === selected ? null : getId);
 }

 const handleMultiSelection = (getId) => {
    let multi = [...multiple]
    let findcurr = multi.indexOf(getId)
    if(findcurr === -1)
    {multi.push(getId)}
    else{
      multi.splice(findcurr,1)
    }
    console.log(multiple,findcurr)
    setMultiple(multi)
 }

  return (
    <div className='flex flex-col bg-slate-300 items-center justify-center gap-2 h-screen w-full '>
      <button className = {`bg-[#f4b41a] p-2 text-3xl font-bold shadow-lg rounded-lg hover:bg-slate-200 ${enableMultipleSelection ? "bg-[#f4b41a]" : "bg-white"}`}  onClick={()=>setEnableMultipleSelction(!enableMultipleSelection)}>Enable Multi Selection</button>
      <div className='flex-col flex  w-[600px] h-[400px]'>
        {data && data.length > 0 ? 
           data.map(dataItem => <div className='text-[#143d59] font-bold text-xl m-5 bg-[#f4b41a] border border-black' key={dataItem.id}>
            <div className= ' cursor-pointer m-3 flex justify-between' onClick={()=>enableMultipleSelection 
              ? handleMultiSelection(dataItem.id) 
              :handleSingleSelection(dataItem.id)}>{dataItem.id}. {dataItem.question}
            <span className=''>+</span></div>
            { selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='p-3'>{dataItem.answer}</div> :null} 
            </div>  
            )
            : 
            <div className='font-bold text-black text-2xl items-center'>No data found</div>
        }
      </div>
    </div>
  )
}

export default App;

