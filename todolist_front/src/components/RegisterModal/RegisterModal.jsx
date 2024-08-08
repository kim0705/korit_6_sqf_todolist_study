import React from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';
ReactModal.setAppElement("#root");

function RegisterModal({ containerRef }) {
    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <ReactModal
            style={{
                overlay: {
                    
                },
                content: {
            
                },
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current}
        >

        </ReactModal>
    );
}

export default RegisterModal;