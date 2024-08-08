import { css } from "@emotion/react";

export const reset = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    * {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #555555;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style-type: none;
    }

    button {
        border: none;
        padding: 5px 10px;
        color: #087fff;
        background-color: transparent;
        cursor: pointer;
    }

    button:active {
        color: #008ada40;
        background-color: transparent;
    }

    .ReactModal__Overlay {
        background-color: transparent !important;
    }

`;
