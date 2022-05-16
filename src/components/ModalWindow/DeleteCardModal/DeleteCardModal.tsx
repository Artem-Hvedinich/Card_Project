import React from 'react';
import {
    ButtonCancel, ButtonDelete, ButtonsBlock,
    Close,
    Modal,
    ModalTextWrapper,
    ModalWindow,
    ModalWrapper,
    WrapperText,
    WrapperTextAndClose
} from '../../StylesComponents/ModalWrappers';
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {deleteCardTC} from "../../../Thunk's/CardsThunk";

type DeleteCardModalType = {
    nameCard: string
    id: string
    setShow: (show: boolean) => void
}

export const DeleteCardModal = ({setShow, id, nameCard}: DeleteCardModalType) => {

    const dispatch = useTypedDispatch();

    const closeModalClick = () => setShow(false);
    const deleteClickHandler = () => {
        setShow(false);
        dispatch(deleteCardTC(id));
    };

    return (
        <ModalWrapper>
            <ModalWindow>
                <Modal>
                    <WrapperTextAndClose>
                        <ModalTextWrapper>Delete Card</ModalTextWrapper>
                        <Close onClick={closeModalClick}/>
                    </WrapperTextAndClose>

                    <WrapperText>
                        {`Do you really want to remove `}<b>{nameCard}</b> ?
                        <p>{`This card will be permanently deleted.`}</p>
                    </WrapperText>

                    <ButtonsBlock>
                        <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                        <ButtonDelete onClick={deleteClickHandler}>Delete</ButtonDelete>
                    </ButtonsBlock>
                </Modal>
            </ModalWindow>
        </ModalWrapper>
    );
};