import { getLink } from "../actions/request";
import { useRef } from "react";

export default function CodeArea(props){
    const inputRef = useRef();
    return (
        <div className="flex flex-col items-center justify-center m-[50px]">
        <div className="circles" id="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
            <textarea ref={inputRef} className="w-[calc(100%-20px)] lg:w-[700px] border-0 outline-0 rounded-sm p-[20px]" placeholder="Enter the code here" rows={8}></textarea>
            <button onClick={() => {getLink(inputRef.current.value);props.loadingFunction(true);}} className="bg-white text-[20px] m-[10px] w-fit rounded-md p-[10px]">Get Link!</button>
        </div>
    );
}