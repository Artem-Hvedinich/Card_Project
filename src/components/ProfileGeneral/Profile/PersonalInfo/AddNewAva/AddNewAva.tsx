import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import styled from "styled-components";
import {AddNewAvaIcon} from "../../../../../Assets/AddNewAvaIcon";
import {colors} from "../../../../StylesComponents/Colors";


type AddNewAvaType = {
    id?: string
    value?: any
    disabled?: any
    accept?: any
}


const NewAvatarWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 51vw;
  top: 39.5vh;
  width: 32px;
  height: 32px;
  background-color: ${colors.TextColor};
  opacity: 0.7;
  border-radius: 50%;
  border: 2px solid #ffffff;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }`

export const AddNewAva = ({id, value, disabled, accept}: AddNewAvaType) => {
        const [file, setFile] = useState<string>()

        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.files)
                setFile(window.URL.createObjectURL(e.currentTarget.files[0]))
        }
        console.log(file)
        return (
            <NewAvatarWrapper htmlFor={id}>
                <AddNewAvaIcon/>
                <input id={id} type={'file'}
                       style={{display: 'none'}}
                       onChange={onChange}/>
            </NewAvatarWrapper>
        );
    }
;