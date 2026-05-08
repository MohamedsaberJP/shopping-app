import React from 'react'
const CategoryCard = ({items,setcategory}) => {
  function handeling(e){
    setcategory(e);
  }

  return (
    <div className="category" >
      <div className="flex flex-col items-start w-full ">
      {items?.map((item,i)=>{
        return  <button key = {i} value={item.name} onClick={(e)=>handeling(e.target.value)}  className="cursor-pointer w-full text-left p-[5px] border-b border-transparent hover:border-b hover:border-[#ccc] transition-all">{item.name}</button>
      })}
    </div>
    </div>
  )
}

export default CategoryCard
