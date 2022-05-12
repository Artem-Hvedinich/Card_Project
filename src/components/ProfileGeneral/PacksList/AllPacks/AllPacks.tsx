import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {PacksInitialStateType} from "../../../../Store-Reducers/Packs-Reducer";
import {CardTable} from "./Table/Table";
import {ProfileWrapper, TitleProfileWrapper} from '../../../StylesComponents/ProfileAndPacksWrapper';
import styled from "styled-components";
import {colors} from "../../../StylesComponents/Colors";
import {Pagination} from "../../../Common/Pagination";
import {getAllPacksTC, getOnePagePacksTC} from '../../../../Thunk\'s/PacksThunk';
import {AddPackModal} from "../../../ModalWindow/AddPackModal/AddPackModal";
import {OnePacksType} from "../../../../Types/PacksTypes";
import { InputWrapper, PaginationBlock, SearchBlock } from '../../../StylesComponents/CardsWrapper';

type AllPacksType = {
    myId?: string
    packsArray: OnePacksType[];
    namePage: string
}

export const AllPacks = ({namePage, packsArray, myId}: AllPacksType) => {

    const statePack = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<string>('');
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getAllPacksTC(myId));
    }, []);

    let pageCount = 10;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error && error.trim() !== '') setError(null)
        if (e.ctrlKey || e.key === "Enter") {
        } else {
            setError('Error value')
        }
    };

    const onChangeSearchHandler = (text: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(text.currentTarget.value);
    }
    const addPackHandler = () => setShowAddModal(true);
    const editPackHandler = (id: string) => {
        if (showEditModal.length === 0 ) {
            setShowEditModal(id);
        } else {
            setShowEditModal('');
        }
    }

    const onPageChanged = (numberPage: number) => dispatch(getOnePagePacksTC(numberPage));

    return (
        <ProfileWrapper>
            {showAddModal
                ? <AddPackModal setShow={setShowAddModal}/>
                : <></>
            }
            <TitleProfileWrapper fontSz={1.5}>{namePage}</TitleProfileWrapper>

            <SearchBlock>
                <InputWrapper
                    placeholder={"Search..."}
                    onChange={(e) => onChangeSearchHandler(e)}
                    value={value}
                    onKeyPress={(e) => onKeyPress(e)}
                />
                <ButtonAddNewPack onClick={addPackHandler}>Add new pack</ButtonAddNewPack>
            </SearchBlock>

            <CardTable itemPack={packsArray}
                       showEditModal={showEditModal}
                       setShowEditModal={setShowEditModal}
                       onEditClick={editPackHandler}
                       isFetching={statePack.isFetching}/>

            <PaginationBlock>
                <Pagination portionSize={pageCount}
                            totalItemsCount={statePack.data.cardPacksTotalCount}
                            pageSize={statePack.data.pageCount}
                            onPageChanged={onPageChanged}
                            currentPage={statePack.data.page}/>
            </PaginationBlock>
        </ProfileWrapper>
    );
};


const ButtonAddNewPack = styled.button`
  width: 20%;
  height: 2vw;
  font-size: 0.8vw;
  background-color: ${colors.Blue};
  color: ${colors.WhiteColor};
  border-radius: 2vw;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;`