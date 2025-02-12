import React, {Component} from "react";

// 클래스 방식
class Classcomp extends Component {
    render() {
        return (
            <h1>Class Component</h1>
        )
    }
}

// 함수형 방식
function FunctionComp(){
    return (
        <h1>Function Component</h1>
    )
}

const ArrowFunctionComp = () => {
    return (
        <h1>Arrow Function Component</h1>
    )
}

export {Classcomp, FunctionComp, ArrowFunctionComp};
