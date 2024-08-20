import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;

    & > button {
        margin-left: 10px;
    }
`;