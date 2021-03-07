import React from 'react'
import Modal from '../../Comps/ModalComps/Modal';

export default function CookieModal(props) {
    let {id, modal_viewed, cookie_accepted, close, accept, status} = props;
    console.log(props);
    return (
        <Modal is_open={status} is_mini={true}>
            
        </Modal>
    )
}
