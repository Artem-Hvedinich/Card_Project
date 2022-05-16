import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import useDebounce from "../../UtilsFunction/Hook/useDebounce";
import {PacksInitialStateType, setMinCardsFilterAC} from "../../Store-Reducers/Packs-Reducer";
import {getAllPacksTC} from "../../Thunk's/PacksThunk";

export const DoubleRange = () => {

    const state = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);

    // const [min, setMin] = useState(state.params.min);
    // const [max, setMax] = useState(state.params.max);
    const [min, setMin] = useState(state.params.min);
    const [max, setMax] = useState(state.params.max);
    const dispatch = useTypedDispatch();

    const valueMinDeb = useDebounce(min, 1500);
    const valueMaxDeb = useDebounce(max, 1500);

    useEffect(() => {
        if (valueMinDeb) {
            min < max
                ? dispatch(setMinCardsFilterAC({min, max}))
                : dispatch(setMinCardsFilterAC({min: max, max: min}))
        }
        if (valueMaxDeb) {
            min < max
                ? dispatch(setMinCardsFilterAC({min, max}))
                : dispatch(setMinCardsFilterAC({min: max, max: min}))
        }
    }, [valueMinDeb, valueMaxDeb, setMinCardsFilterAC])

    useEffect(() => {
        setMin(state.minCardsCount)
        setMax(state.maxCardsCount)
    }, [state.minCardsCount, state.maxCardsCount]);

    const onChangeCallbackMin = (e: ChangeEvent<HTMLInputElement>) => setMin(+e.currentTarget.value);
    const onChangeCallbackMax = (e: ChangeEvent<HTMLInputElement>) => setMax(+e.currentTarget.value);
    const valueMax = max * 100 / state.maxCardsCount
    const valueMin = min * 100 / state.maxCardsCount

    return (
        <DoubleRangeWrapper>
            <NumberValue>
                <ValueWrapper value={min} count={-2.5}>
                    <Value>{min}</Value>
                </ValueWrapper>
                <ValueWrapper value={valueMax} count={-7.5}>
                    <Value>{max}</Value>
                </ValueWrapper>
            </NumberValue>
            <Slider/>
            <RangeInput>
                <Input index={min < max ? 1 : 2}
                       bgCol={min < max ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       type={'range'}
                       id={'valueMax'}
                       onChange={onChangeCallbackMax}
                       value={max}
                       min={state.minCardsCount} max={state.maxCardsCount}
                       slider={valueMax}
                />
                <Input index={min > max ? 1 : 2}
                       bgCol={min > max ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       id={'valueMin'}
                       type={'range'}
                       onChange={onChangeCallbackMin}
                       min={state.minCardsCount} max={state.maxCardsCount}
                       value={min}
                       slider={valueMin}
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
const Input = styled.input<{ slider: number, bgCol: string, index: number }>`
  display: flex;
  justify-content: start;
  z-index: ${({index}) => index};


  :after {
    height: 0.3vw;
    width: ${({slider}) => slider}%;
    position: absolute;
    top: 0.2vw;
    border-bottom-left-radius: 0.2vw;
    border-top-left-radius: 0.2vw;
    background: ${({bgCol}) => bgCol};
    content: '';
  }

  ::-webkit-slider-thumb {
    position: relative;
    z-index: 1;
    height: 0.7vw;
    width: 0.7vw;
    border: 0.25vw solid ${colors.Blue};
    border-radius: 50%;
    background: ${colors.WhiteColor};
    pointer-events: auto;
    -webkit-appearance: none;
  }
`