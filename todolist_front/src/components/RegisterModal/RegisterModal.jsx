/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';
import RegisterTodo from '../RegisterTodo/RegisterTodo';


function RegisterModal({ containerRef }) {
    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);
    const [ animation, setAnimation ] = useState("registerModalContentOpen");

    const closeModal = () => {
        setAnimation("registerModalContentClose");
        setTimeout(() => {
            setAnimation("registerModalContentOpen");
            setOpen(false);
        }, 500);
    }

    return (
        <ReactModal
            style={{
                overlay: {
                    position: "absolute", 
                    backgroundColor: "transparent",
                    zIndex: "50"
                },
                content: {
                    inset: "auto 0 0", 
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    padding: "0",
                    width: "100%",
                    height: "80%",
                    animation: `${animation} 0.5s 1`,
                    animationTimingFunction: "ease-in-out"
                },
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current}
        >
            <RegisterTodo closeModal={closeModal}/>
        </ReactModal>
    );
}

export default RegisterModal;