import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    onChangeRange2?: (value: number) => void
    valueMin: number
    valueMax: number

}

export const DoubleRange = ({onChangeRange, onChangeRange2, valueMin, valueMax,}: SuperDoubleRangePropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange2 && onChangeRange2(+e.currentTarget.value)
    }

    return (
        <>
            <NumberValue>
                <ValueWrapper value={valueMin} count={0}>
                    <Value>{valueMin}</Value>
                </ValueWrapper>
                <ValueWrapper value={valueMax} count={-5}>
                    <Value>{valueMax}</Value>
                </ValueWrapper>
            </NumberValue>
            <Slider/>
            <RangeInput>
                <Input bgCol={valueMin < valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       type={'range'}
                       id={'valueMax'}
                       onChange={onChangeCallback2}
                       value={valueMax}
                       min={'0'} max={'50'}
                />
                <Input bgCol={valueMin > valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       id={'valueMin'}
                       type={'range'}
                       onChange={onChangeCallback}
                       min={'0'} max={'50'}
                       value={valueMin}
                />
            </RangeInput>
        </>
    )
}
const NumberValue = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7vw;
  color: #0a043a;
`
const ValueWrapper = styled.div<{ value: number, count: number }>`
  position: relative;
  left: ${({value}) => value}%;
  transform: translate(${({count}) => `${count}vw`});
`
const Value = styled.label`
  //position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.2vw;
  background-color: rgb(45, 46, 70);
  width: 1.5vw;
  height: 1.5vw;
`

const Slider = styled.div`
  display: flex;
  justify-content: center;
  top: 0.5vw;
  left: 1.7vw;
  height: 0.3vw;
  width: 6.5vw;
  position: relative;
  background: rgb(126, 128, 175);
  border-radius: 0.2vw;
`

const RangeInput = styled.span`
  left: 1.7vw;
  position: relative;

  input {
    position: absolute;
    width: 6.5vw;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`
const Input = styled.input<{ value: number, bgCol: string }>`
  display: flex;
  justify-content: start;

  ::-webkit-slider-thumb {
    height: 0.7vw;
    width: 0.7vw;
    border-radius: 20%;
    background: ${colors.DarkBlue};
    pointer-events: auto;
    -webkit-appearance: none;
  }

  :after {
    height: 0.3vw;
    width: ${({value}) => value * 1.8}%;
    position: absolute;
    top: 0.2vw;
    border-bottom-left-radius: 0.2vw;
    border-top-left-radius: 0.2vw;
    background: ${({bgCol}) => bgCol};
    content: '';
  }
`