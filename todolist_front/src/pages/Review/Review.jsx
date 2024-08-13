import { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";

function Review() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    useEffect(() => { // 시작과 동시에 렌더링을 한번 더 하게 만듦
        // 마운트 지점
        console.log(number2); //0
        setNumber3(number * 10); 
        console.log(number3); //0
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]); // 실행될 함수, 배열. 2개의 변수를 받음 // number가 변했을 때 동작(첫 호출 때는 무조건 동작) // dependency가 없을 때는 처음 말고 동작하지 않음

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <MainContainer>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </MainContainer>
    );
}

export default Review;