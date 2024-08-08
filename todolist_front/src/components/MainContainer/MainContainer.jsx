/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import * as s from './style';
import RegisterModal from '../RegisterModal/RegisterModal';

function MainContainer({ children }) {

    const [modalElement, setModalElement] = useState(<></>);
    const containerRef = useRef();

    // mount된 시점에 containerRef의 값이 존재하면 reactModal을 렌더링
    useEffect(() => {
        if (!!containerRef) {
            setModalElement(<RegisterModal containerRef={containerRef} />);
        }
    }, [containerRef]);


    return (
        <div css={s.container} ref={containerRef} >
            {modalElement}
            {children}
        </div>
    );
}

export default MainContainer;