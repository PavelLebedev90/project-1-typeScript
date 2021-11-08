
import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
}
const Accordion = (props: AccordionPropsType) => {
    debugger
    if(props.collapsed){
        return(
            <>
                <AccordionTitle title = {props.titleValue}/>
                <AccordionBody/>
            </>
        );
    }else{
        return(
            <>
                <AccordionTitle title = {props.titleValue}/>

            </>
        );
    }

}
type AccordionTitlePropsType = {
    title: string,
}
function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;