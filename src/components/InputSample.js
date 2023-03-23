import React, { useState } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        username:'',
        usernickname:''
    });
    //구조분해할당
    const { username, usernickname } = inputs;
    const onChange = (e) => {
        //이벤트 객체 받음, 이벤트를 발생시킨게 target이 된다.
        const { value, name } = e.target;
            //setinput 상태 변경해주는...
            //스프레드구문:원래있던걸 넣어주는 구문
            //username,usernickname
            setInputs({
                username:'',
                usernickname:'',
                [name]:value
            });
    }
    const onReset = () => {
        setInputs({
            username:'',
            usernickname:''
            
        })       
    }
    return (
        <div>
            <input name="username" onChange={onChange} value={username}/>
            <input name="usernickname" onChange={onChange} value={usernickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span>값: {username}, {usernickname}</span>
            </div>
        </div>  
    );
};
export default InputSample;