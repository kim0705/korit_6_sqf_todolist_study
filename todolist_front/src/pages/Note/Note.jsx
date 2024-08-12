import React, { useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';

function Note(props) {

    const [input, setInput] = useState("");

    // const handelInputChange = (e) => {
    //     setInput(input => {
    //         return {
    //             ...input,
    //             [e.target.name]: e.target.value
    //         }
    //     }
    //     )
    // }

    const handelInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        console.log("메모: " + input);

        if (!input) {
            alert("메모를 입력하세요");
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
        if (e.key === "Shift" && e.key === "Enter") {
            
        }
    }

    return (
        <MainContainer>
            <div>
                <h2>메모</h2>
            </div>
            <div>
                {/* <input type="text" name='input' onChange={handelInputChange} /> */}
                <textarea name="input" onChange={handelInputChange} onKeyDown={handleEnter} ></textarea>
            </div>
            <button onClick={handleSubmit}>확인</button>
        </MainContainer>
    );
}

export default Note;