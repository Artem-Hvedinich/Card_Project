import React from 'react';
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
import {FormWrapper, RememberMeWrapper, TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {createPackTC} from "../../../Thunk's/PacksThunk";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {FormikErrorType} from "../../../Types/PacksTypes";
import {StyledCheckBox} from "../../LoginAndRegistration/Login/Login";

type AddPackModalType = {
    setShow: (show: boolean) => void
}

export const AddPackModal = ({setShow}: AddPackModalType) => {

    const dispatch = useTypedDispatch();
    const maxLengthInput = 30;

    const closeModalClick = () => setShow(false);

    const loginForm = useFormik({
        initialValues: {namePack: '', private: false},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.namePack) {
                errors.namePack = "Field is required";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(createPackTC(values));
            setShow(false);
        },
    });

    return (
        <ModalWrapper>
            <ModalWindow>
                <FormWrapper onSubmit={loginForm.handleSubmit}>
                    <Modal>
                        <WrapperTextAndClose>
                            <ModalTextWrapper>Add Pack</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <Input maxLength={maxLengthInput}
                                   type="text"
                                   id="namePack"
                                   placeholder={"New pack name"}
                                   {...loginForm.getFieldProps("namePack")}
                            />
                        </InputWrapper>
                        <RememberMeWrapper margin={20}>
                            <StyledCheckBox width={30} height={30}
                                            type={"checkbox"}
                                            id="private"
                                            {...loginForm.getFieldProps("private")}
                            />
                            <TextAuthWrapper fontSz={17} opacity={1}
                                             color={colors.DarkBlue}>Private</TextAuthWrapper>
                        </RememberMeWrapper>

                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>
                                Cancel
                            </ButtonCancel>
                            <ButtonSave type="submit"
                                        disabled={!(loginForm.isValid && loginForm.dirty)}>
                                Save
                            </ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </FormWrapper>
            </ModalWindow>
        </ModalWrapper>
    );
};