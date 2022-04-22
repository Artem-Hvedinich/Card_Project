import React from 'react';
import styled from "styled-components";
import {TextWrapper} from "./Wrapper";
import {Input} from "./Button";

const InputTitleWrapper = styled.div`
`
export const InputAndText = ({text, value, type, fontSz, opacity, color}:
                                 { text?: string, value: string, type?: string, fontSz: number, opacity?: number, color: string }) => {
    return (
        <InputTitleWrapper>
            <TextWrapper fontSz={fontSz} color={color} opacity={opacity}>{text}</TextWrapper>
            <Input value={value} type={type}/>
        </InputTitleWrapper>
    )
}
