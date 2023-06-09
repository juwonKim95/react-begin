import React,{Component} from "react";
class ClassCounter extends Component {
    //constructor(props){
    //    super(props);
        //state초기값 설정
    //    this.state = {
    //        number: 0
    //    }
    //} 이렇게 쓰면 너무 길고 복잢하니까 밑에처럼 쓰기
    state = {
        number: 0
    }
    render(){
        const { number } = this.state;
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={()=>{
                    this.setState({ number: number+1 })
                }}>+1</button>
                <button onClick={()=>{
                    this.setState({ number: number-1})
                }}>-1</button>
            </div>
        )
    }
}
export default ClassCounter;