import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {CardsInitialStateType} from "../../../../Store-Reducers/Packs-Reducer";
import {CardTable} from "./Table/Table";
import {ProfileWrapper, TitleProfileWrapper} from '../../../StylesComponents/ProfileAndPacksWrapper';
import styled from "styled-components";
import SerchImg from '../../../../Assets/Union.svg'
import {colors} from "../../../StylesComponents/Colors";
import {Pagination} from "./Pagination";
import {getAllPacksTC, getOnePagePacksTC} from '../../../../Thunk\'s/PacksThunk';
import {AddPackModal} from "../../../ModalWindow/AddPackModal/AddPackModal";
import {OnePacksType} from "../../../../Types/PacksTypes";

type AllPacksType = {
    packsArray: OnePacksType[];
    namePage: string
}

export const AllPacks = ({namePage, packsArray}: AllPacksType) => {

    const statePack = useAppSelector<CardsInitialStateType>(state => state.PacksReducer);
    const dispatch = useTypedDispatch();
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<string>('');

    useEffect(() => {
        dispatch(getAllPacksTC());
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
    const learnPackHandler = (id: string) => {};

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
                       onLearnClick={learnPackHandler}
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


const PaginationBlock = styled.div`
  position: relative;
  width: 100%;
`
const SearchBlock = styled.div`
  display: flex;
`
const InputWrapper = styled.input`
  height: 4vh;
  width: 90%;
  border-radius: 0.3vw;
  margin-right: 2vw;
  background: url(${SerchImg}) no-repeat scroll 0.5vw 0.5vw;
  background-size: 1vw;
  padding-left: 2vw;
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
  }`
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