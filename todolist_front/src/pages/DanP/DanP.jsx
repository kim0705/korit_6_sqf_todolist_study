import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

const parent = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    padding: 20px 40px;
    width: 150px;
    height: 50px;
    background-color: white;

    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start;
    }
    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }
    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;

    &:nth-of-type(1) {
        background-color: yellow;
        flex-shrink: 1;
    }
    &:nth-of-type(2) {
        background-color: green;
    }
    &:nth-of-type(3) {
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
`;

const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;

    & + button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        z-index: 0;
        background-color: pink;
    }
`;

function DanP(props) {
    return (
        <>
            <div css={parent}>
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3</div>
                <div css={child}>4</div>
                <div css={child}>5</div>
                <div css={inputBox}>
                    <input css={input} type="text" />
                    <button >OK</button>
                </div>
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>
    );
}

export default DanP;