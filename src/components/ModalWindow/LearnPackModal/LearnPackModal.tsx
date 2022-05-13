import React, {useState} from 'react';
import {
    ButtonCancel, ButtonSave, ButtonsBlock, Modal,
    ModalTextWrapper, ModalWindow, ModalWrapper, WrapperText, WrapperTextAndClose
} from '../../StylesComponents/ModalWrappers';
import {useAppSelector} from "../../../Store-Reducers/Store";
import {useNavigate} from "react-router-dom";
import {OnePacksType} from "../../../Types/PacksTypes";


export const LearnPackModal = () => {

    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const pack = useAppSelector<OnePacksType[]>(state => state.PacksReducer.data.cardPacks);
    const packId = document.location.hash.slice(13);
    const navigate = useNavigate();

    const closeModalClick = () => navigate(-1);
    const showAnswerClickHandler = () => setShowAnswer(true);
    let question = "Some q";
    let findPack = pack.find(el => el._id === packId);
    let namePack = findPack && findPack.name;

    return (
        <ModalWrapper>
            <ModalWindow>
                <Modal>
                    <WrapperTextAndClose style={{display: "flex", justifyContent: "center"}}>
                        <ModalTextWrapper>Learn "{`${namePack}`}"</ModalTextWrapper>
                        {/*<Close onClick={closeModalClick}/>*/}
                    </WrapperTextAndClose>

                    <WrapperText>
                        <b>Question:</b> "{question}"
                    </WrapperText>

                    <ButtonsBlock>
                        <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                        <ButtonSave width={"230px"} onClick={showAnswerClickHandler}>Show answer</ButtonSave>
                    </ButtonsBlock>
                </Modal>
            </ModalWindow>
        </ModalWrapper>
    );
};