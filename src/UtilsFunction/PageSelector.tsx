import React, {useState, KeyboardEvent, useEffect} from "react";
import OutsideAlerter from "./Hook/useClose";
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

type SelectPropsType = {
    value: any
    onChange: (value: number) => void
    items: number[]
}

export const PageSelect = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i === props.value)
    const hoveredItem = props.items.find(i => i === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const onClickItems = (value: any) => {
        props.onChange(value);
        setActive(!active)
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === 'ArrowDown') {
                if (props.items[i] === hoveredItem) {
                    if (props.items[i + 1]) {
                        setHoveredElement(props.items[i + 1])
                        return
                    }
                }
            }
            if (e.key === 'ArrowUp') {
                if (props.items[i] === hoveredItem) {
                    if (props.items[i - 1]) {
                        setHoveredElement(props.items[i - 1])
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0])
            }
        }
        if (e.key === 'Enter') {
            setActive(false)
            props.onChange(hoveredElement)
        }
        if (e.key === 'Escape') {
            setActive(false)
        }
    }

    const outsideHandler = () => {
        setActive(false)
    }

    // const ClassName = active ? s.main_active : s.main

    return (
        <OutsideAlerter outsideHandler={outsideHandler}>
            <Select
                onKeyUp={onKeyUp} tabIndex={0}>
                <Main
                    active={active}
                    onClick={() => setActive(!active)}>
                    {selectedItem && selectedItem}
                </Main>

                {active &&
                    <Items>
                        {props.items.map(i =>
                            <Option
                                active={hoveredItem === i}
                                key={i}
                                onClick={() => {
                                    onClickItems(i)
                                }}>
                                {i}
                            </Option>)}
                    </Items>}
            </Select>
        </OutsideAlerter>
    )
}

const Select = styled.div`
`


const Main = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.15vw solid ${colors.AzureishWhite};
  height: 1.5vw;
  width: 3vw;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({active}) => active ? '0.2vw 0.2vw 0 0' : '0.2vw'};
  border-bottom: ${({active}) => active && 'none'};
  transition: 0.3s all;

  :hover {
    cursor: pointer;
    font-size: 0.9vw;
  }
`
const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 3vw;
  height: 3.9vw;
  overflow-y: scroll;
  position: absolute;
  border: 0.15vw solid ${colors.AzureishWhite};
  border-top: none;
  border-radius: 0 0 0.15vw 0.15vw;
  background-color: ${colors.Lavender};
  cursor: pointer;
  transition: 0.3s all;
  
::-webkit-scrollbar{
  width: 0.1vw;
}`

const Option = styled.div<{ active: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({active}) => active && '0.9vw'};
  background-color: ${({active}) => active && colors.FilterButtonColor};
  color: ${colors.Blue};
  transition: 0.3s all;
  font-weight: 500;

  :hover {
    background-color: ${colors.FilterButtonColor};
  }`