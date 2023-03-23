import React,{useState} from "react";
const FuncComponent2 = ({ name, children }) => {
    // { name: "green", children: "안녕하세요"}
    const [ number, setNumber ] = useState(0);
    const onAddNumber = () => {
        setNumber(number+1)
    }
    return(
        <div>
            <h2>{number}<button onClick={onAddNumber}>+1</button></h2>
            {name} {children}
        </div>
    )
}
export default FuncComponent2;