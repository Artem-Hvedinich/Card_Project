import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";
import {CardsMinMaxFilterTC} from "../Thunk's/PacksThunk";
import {useAppSelector, useTypedDispatch} from "../Store-Reducers/Store";
import {ResponsePacksType} from "../Types/PacksTypes";
import useDebounce from "./Hook/useDebounce";

export const DoubleRange = () => {

    const data = useAppSelector<ResponsePacksType>(state => state.PacksReducer.data);

    const [valueMin, setValueMin] = useState(data.minCardsCount);
    const [valueMax, setValueMax] = useState(data.maxCardsCount);

    const valueMinDeb = useDebounce(valueMin, 1500)
    const valueMaxDeb = useDebounce(valueMax, 1500)

    useEffect(() => {
        console.log('Effect')
        if (valueMinDeb) {
            valueMin < valueMax ? dispatch(CardsMinMaxFilterTC(valueMin, valueMax))
                : dispatch(CardsMinMaxFilterTC(valueMax, valueMin))
        }
        if (valueMaxDeb) {
            valueMin < valueMax ? dispatch(CardsMinMaxFilterTC(valueMin, valueMax))
                : dispatch(CardsMinMaxFilterTC(valueMax, valueMin))
        }
    }, [valueMinDeb,valueMaxDeb])

    useEffect(() => {
        setValueMin(data.minCardsCount)
        setValueMax(data.maxCardsCount)
    }, [data.minCardsCount, data.maxCardsCount])

    const dispatch = useTypedDispatch();

    const onChangeCallbackMin = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMin(+e.currentTarget.value)
    }
    const onChangeCallbackMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(+e.currentTarget.value)
    }

    return (
        <DoubleRangeWrapper>
            <NumberValue>
                <ValueWrapper value={valueMin} count={-2}>
                    <Value>{valueMin}</Value>
                </ValueWrapper>
                <ValueWrapper value={valueMax} count={-7}>
                    <Value>{valueMax}</Value>
                </ValueWrapper>
            </NumberValue>
            <Slider/>
            <RangeInput>
                <Input index={valueMin < valueMax ? 1 : 2}
                       bgCol={valueMin < valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       type={'range'}
                       id={'valueMax'}
                       onChange={onChangeCallbackMax}
                       value={valueMax}
                       min={'0'} max={valueMax}
                />
                <Input index={valueMin > valueMax ? 1 : 2}
                       bgCol={valueMin > valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       id={'valueMin'}
                       type={'range'}
                       onChange={onChangeCallbackMin}
                       min={'0'} max={valueMax}
                       value={valueMin}
                />
            </RangeInput>
        </DoubleRangeWrapper>
    )
}
const DoubleRangeWrapper = styled.div``

const NumberValue = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7vw;
  color: #0a043a;
`
const ValueWrapper = styled.div<{ value: number, count: number }>`
  position: relative;
  left: ${({value}) => value * 1.85}%;
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
  height: 0.3vw;
  width: 10vw;
  position: relative;
  background: rgb(126, 128, 175);
  border-radius: 0.2vw;
`

const RangeInput = styled.span`
  position: relative;

  input {
    position: absolute;
    width: 10vw;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`
const Input = styled.input<{ value: number, bgCol: string, index: number }>`
  display: flex;
  justify-content: start;
  z-index: ${({index}) => index};

  ::-webkit-slider-thumb {
    height: 0.7vw;
    width: 0.7vw;
    border: 0.25vw solid ${colors.Blue};
    border-radius: 50%;
    background: ${colors.WhiteColor};
    pointer-events: auto;
    -webkit-appearance: none;
  }

  :after {
    height: 0.3vw;
    width: ${({value}) => value * 1.87}%;
    position: absolute;
    top: 0.2vw;
    border-bottom-left-radius: 0.2vw;
    border-top-left-radius: 0.2vw;
    background: ${({bgCol}) => bgCol};
    content: '';
  }
`