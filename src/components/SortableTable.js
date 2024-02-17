import { useState } from "react";
import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'

function SortableTable (props){

const [sortOrder, setSortOrder] = useState(null)
const [sortBy, setSortBy] = useState(null)

const {config,data} = props;

const handleClick =(label)=>{
if(sortOrder===null){
    setSortOrder("asc");
    setSortBy(label);
}else if(sortOrder === "asc"){
    setSortOrder("desc");
    setSortBy(label);
}else if (sortOrder === "desc"){
    setSortOrder(null);
    setSortBy(null);
}
}

const updateConfig = config.map((column)=>{
if(!column.sortValue){
    return column;
}

return {
    ...column,
    header: ()=> <th className="cursoe-pointer hover:bg-gray-100"onClick={()=>handleClick(column.label)}>{column.label}<div className="flex items-center">{getIcons(column.label,sortBy,sortOrder)}</div></th>
}
})

let sortedData = data;
if(sortOrder && sortBy){
    const {sortValue}=config.find(column=> column.label === sortBy);
    sortedData =[...data].sort((a,b)=>{
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder==='asc'? 1:-1;

        if(typeof valueA === 'string'){
            return valueA.localeCompare(valueB)*reverseOrder;
        } else{
            return (valueA-valueB)*reverseOrder;
        }
    })
}
    return(
    <Table {...props} data={sortedData} config={updateConfig}/>
    );
}

function getIcons(label,sortBy,sortOrder){
    if (label !== sortBy){
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>
    }

    if( sortOrder===null){
        return <div>
        <GoArrowSmallUp/>
        <GoArrowSmallDown/>
    </div>;
    }else if(sortOrder ==='asc'){
        return <div>
        <GoArrowSmallUp/>
    </div>;
    }else if(sortOrder ==='desc'){
        return <div>
        <GoArrowSmallDown/>
    </div>;
    }
}
export default SortableTable;