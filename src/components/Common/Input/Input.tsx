import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {ChangePackTC} from "../../../Thunk's/PacksThunk";

type InputType = {
    _id: string
    setShowEditModal: (id: string) => void
}

export const Input = ({setShowEditModal, _id}: InputType) => {

    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const dispatch = useTypedDispatch();
    const myId = useAppSelector<string | null>(state => state.AuthorizationReducer._id);

    const maxLengthInput = 30;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error && error.trim() !== '') setError(null)
        if (e.ctrlKey || e.key === "Enter") {
            setShowEditModal('');
            dispatch(ChangePackTC(_id, value));
        } else {
            setError('Error value')
        }
    };

    const onChangeHandler = (text: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(text.currentTarget.value);
    }

    return (
        <>
            <InputWrapper placeholder={"Change Name"}
                          maxLength={maxLengthInput}
                          onChange={(e) => onChangeHandler(e)}
                          value={value}
                          onKeyPress={(e) => onKeyPress(e)}/>
        </>
    );
};

const InputWrapper = styled.input<{ width?: string }>`
  height: 4vh;
  width: 100%;
  border-radius: 0.3vw;
  background-size: 1vw;
  margin: 5px 15px 0 20px;
  font-size: 0.9vw;
  border: 1px solid #D9D9F1;
  opacity: 0.7;

  :nth-child(1) {
    background-color: #ECECF9;
  }

  :hover {
    border: 1px solid #635D80;
  }

  :focus {
    outline: none;
    border: 1px solid #635D80;
  }

  @media (max-width: 1550px) {
    margin: 0 0 0 15px;
  }
`;