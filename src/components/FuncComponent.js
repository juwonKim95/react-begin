import React from "react";
function FuncComponent(props){
    const { name,  children } = props;
    return (
        <div>{name} {children}</div>
    )
}
//화살표함수로 적으면
//const FuncComponent = () => {
//    return (
//        <div>안녕하세요</div>
//    )
//}
FuncComponent.defaultProps = {
    name: "aaaaa"
}
export default FuncComponent;