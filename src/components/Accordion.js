import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";

function Accordion ({items}){
    const [expandedIndex, setExpandedIndex] =useState(-1)
    const renderedItems = items.map((item,index)=>{  //kullanıcıya bileşenlerin listesini göstermek için map fonksiyonu kullanırız.İtems dizisi içindeki bütün öğeler buraya gönderilecek biz de onları alacağız.
      const isExpanded = index === expandedIndex;

      const icon = <span className="text-2xl">
       {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> } 
      </span>
//eğer isExpanded doğruysa hemen sağındaki değeri al yani down eğer isexpanded yanlışsa lefti al 

//eğer isExpanded doğru ise son doğru değeri alacağız. yani divi. bu yüzden buradaki divi content değişkenine atacağız
// eğer isExpanded değeri yanlış ise, isexpanded olacak ilk yanlış değeri geri alacağız
        return(
        <div key ={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"onClick={()=>setExpandedIndex(isExpanded ? -1 : index)}>{item.label}{icon}</div> 
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
        );
    });
    return(<div className="border-x border-t rounded">{renderedItems}</div>);
}

export default Accordion;