import React, {useEffect} from 'react';
import {
    ButtonCancel, ButtonSave, ButtonsBlock, Close, Input, InputWrapper, Modal,
    ModalTextWrapper, ModalWindow, ModalWrapper, WrapperTextAndClose
} from '../../StylesComponents/ModalWrappers';
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {OnePacksType} from "../../../Types/PacksTypes";
import {FormWrapper, RememberMeWrapper, TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {colors} from "../../StylesComponents/Colors";
import {StyledCheckBox} from '../../LoginAndRegistration/Login/Login';
import {useFormik} from "formik";
import {updatePackTC} from "../../../Thunk's/PacksThunk";

type EditPackModalType = {
    el: OnePacksType
    setShow: (show: boolean) => void
}

type FormikErrorType = {
    namePack?: string;
    private?: boolean
};

export const EditPackModal = ({el, setShow}: EditPackModalType) => {

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
            loginForm.resetForm();
            dispatch(updatePackTC(el._id, values ));
            setShow(false);
        },
    });

    useEffect(() => {
        loginForm.setFieldValue('namePack', el.name);
    },[]);

    return (
        <ModalWrapper>
            <ModalWindow>
                <FormWrapper onSubmit={loginForm.handleSubmit}>
                    <Modal>
                        <WrapperTextAndClose style={{display: "flex", justifyContent: "center"}}>
                            <ModalTextWrapper>Edit pack</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>New pack
                                name</TextAuthWrapper>
                            <Input maxLength={maxLengthInput}
                                   type="text"
                                   id="namePack"
                                   placeholder={"New pack name"}
                                   {...loginForm.getFieldProps("namePack")}
                            />
                            <RememberMeWrapper>
                                <StyledCheckBox type={"checkbox"}
                                                id="private"
                                                {...loginForm.getFieldProps("private")}
                                />
                                <TextAuthWrapper fontSz={13} opacity={1} color={colors.DarkBlue}> Remember me</TextAuthWrapper>
                            </RememberMeWrapper>
                        </InputWrapper>

                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>
                                Cancel
                            </ButtonCancel>
                            <ButtonSave type="submit" disabled={!(loginForm.isValid && loginForm.dirty) || el.name === loginForm.values.namePack}>
                                Save change
                            </ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </FormWrapper>
            </ModalWindow>
        </ModalWrapper>
    );
};