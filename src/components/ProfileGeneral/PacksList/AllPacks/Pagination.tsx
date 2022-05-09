import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from '../../../StylesComponents/Button';
import {ButtonProfile} from "../../../StylesComponents/ProfileAndPacksWrapper";


export const Pagination = ({totalItemsCount, pageSize, onPageChanged, portionSize, currentPage}: {
    totalItemsCount: number, pageSize: number, portionSize: number, currentPage: number
    onPageChanged: (pageNumber: number) => void
}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPositionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPositionPageNumber = portionNumber * portionSize
    return (
        <NumbersWrapper>
            {portionNumber > 1 && <ButtonProfile color={'#ffffff'} bgColor={'#110e0e'} width={4} height={1.5}
                                          onClick={() => setPortionNumber(portionNumber - 1)}>Prev</ButtonProfile>}

            {pages.filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber)
                .map((p) => <PageWrap onClick={() => onPageChanged(p)}
                                      active={currentPage === p}>{p}</PageWrap>)}
            {portionCount > portionNumber &&
                <ButtonProfile color={'#ffffff'} bgColor={'#110e0e'} width={4} height={1.5}
                        onClick={() => setPortionNumber(portionNumber + 1)}>Next</ButtonProfile>}
        </NumbersWrapper>
    )
}
const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 1vw`

const PageWrap = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 2vw;
  background: ${({active}) => active && '#4d655b'};
  border-radius: ${({active}) => active && 10}%;
  cursor: pointer;
  font-size: ${({active}) => active ? 18 : 14}px;

  :hover {
    background: grey;
    border-radius: 50%;
    font-size: 18px;
  }`