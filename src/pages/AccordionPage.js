import Accordion from "../components/Accordion";

function AccordionPage(){
const items = [
{
    id:'1',
    label:'can I use react on a project',
    content:'you can use react on any project you want'
},
{
    id:'2',
    label:'can I use react on a project',
    content:'you can use react on any project you want'
},
{
    id:'3',
    label:'can I use react on a project',
    content:'you can use react on any project you want'
}
];


    return <Accordion items={items}/>;
}

export default AccordionPage;
