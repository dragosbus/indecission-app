import React from 'react';
import Modal from 'react-modal';


export const OptionModal = (props) =>{
    return(
        <Modal 
            isOpen={!!props.selectedOption} 
            selectedOption={props.selectedOption}
            onRequestClose={props.hide}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.hide}>Okay</button>
        </Modal>
    );
};