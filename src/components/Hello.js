import React from 'react';
function Hello({name, message, isSpecial}){
   
    return (
    <>
        <div className='green'>
        {/* isSpecial을 받아줌 */}
        {isSpecial && <b>* </b> }
        {name}님 {message}</div>
        <p>재미있는..? 리액트</p>
    </>
    )
}
//기본값 설정
Hello.defaultProps = {
    name: "이름"
}

export default Hello;