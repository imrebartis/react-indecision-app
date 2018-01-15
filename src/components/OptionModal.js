import React from 'react';
import Modal from 'react-modal';
// import { handleClearSelectedOption } from './IndecisionApp';

const OptionModal = (props) => (
    // the !! turns props.selectedOption into a boolean
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption} // when clicking background modal closes
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
//   <Modal
//     isOpen={!!props.selectedOption}
//     onRequestClose={props.handleClearSelectedOption}
//     contentLabel="Selected Option"
//   >
//     <h3>Selected Option</h3>
//     {props.selectedOption && <p>{props.selectedOption}</p>}
//     <button onClick={props.handleClearSelectedOption}>Okay</button>
//   </Modal>
);

export default OptionModal;