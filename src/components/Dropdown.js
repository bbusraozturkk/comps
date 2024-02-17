import { useEffect, useRef, useState } from "react";
import {GoChevronDown} from "react-icons/go"
import Panel from "./Panel"

function Dropdown ({options, selection, onSelect}){

const [isOpen, setIsOpen] = useState(false);
const divEl = useRef();

useEffect(()=>{
const handler =(event)=>{
    if (!divEl.current){
        return;
    };

    if(!divEl.current.contains(event.target)){
        setIsOpen(false)
    }

};
document.addEventListener('click',handler,true);

return () =>{
    document.removeEventListener('click',handler);
};

},[]);

const handleClick = () =>{
setIsOpen(!isOpen); // paranetz içi true olursa kullanıcı açtığı zaman geri kapatamaz !isOpen şu an ne ise tam tersini yap demek 
};

const handleOptionClick = (option) =>{
setIsOpen(false); //dropdown'ı kapatır
onSelect(option); //kullanıcı hangi seçeneğe tıkladı
};

    const renderedOptions = options.map((option)=>{
return <div className="hover:bg-sky-100 rounded cursor-pointer p-1"onClick={() => handleOptionClick(option)} key ={option.value}>{option.label}</div>
    });

    return(
    <div ref={divEl} className="w-48 relative">
    <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{selection?.label || 'Select...'}<GoChevronDown/></Panel> 
    {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>} 
    </div> // açık değerine bağlı olarak divi gösterdiğimizden ve gizlediğimizden && ile emin oluruz
    );
}

export default Dropdown;