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
import {detelePackTC} from "../../../Thunk's/PacksThunk";
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {OnePacksType} from "../../../Types/PacksTypes";

type DeletePackModalType = {
    id: string
    setShow: (show: boolean) => void
}

export const DeletePackModal = ({setShow, id}: DeletePackModalType) => {

    const statePack = useAppSelector<OnePacksType[]>(state => state.PacksReducer.data.cardPacks)
    const dispatch = useTypedDispatch();

    const closeModalClick = () => setShow(false);
    const deleteClickHandler = () => {
        setShow(false);
        dispatch(detelePackTC(id));
    };
    let findName = statePack.find(el => el._id === id);
    let name = findName && findName.name;

    return (
        <ModalWrapper>
            <ModalWindow>
                <Modal>
                    <WrapperTextAndClose>
                        <ModalTextWrapper>Delete Pack</ModalTextWrapper>
                        <Close onClick={closeModalClick}/>
                    </WrapperTextAndClose>

                    <WrapperText>
                        {`Do you really want to remove `}<b>{name}</b>{`?
                            All cards will be excluded from this course.`}
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