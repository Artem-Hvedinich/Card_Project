import React, {useState} from 'react';
import {
    ButtonCancel,
    ButtonSave,
    ButtonsBlock,
    Close,
    Input,
    InputWrapper,
    Modal,
    ModalTextWrapper,
    ModalWindow,
    ModalWrapper,
    WrapperTextAndClose
} from "../../StylesComponents/ModalWrappers";
import {colors} from "../../StylesComponents/Colors";
import {TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";

type AddPackModalType = {
    setShow: (show: boolean) => void
}

export const AddPackModal = ({setShow}: AddPackModalType) => {

    const [packName, setPackName] = useState<string | null>(null);

    const closeModalClick = () => {
        setShow(false);
    }
    const saveClickHandler = () => {
        setShow(false);
    }

    return (
        <div>
            <ModalWrapper>
                <ModalWindow>
                    <Modal>
                        <WrapperTextAndClose>
                            <ModalTextWrapper>Add Pack</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Name pack</TextAuthWrapper>
                            <Input />
                        </InputWrapper>

                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                            <ButtonSave onClick={saveClickHandler}>Save</ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </ModalWindow>
            </ModalWrapper>
        </div>
    );
};