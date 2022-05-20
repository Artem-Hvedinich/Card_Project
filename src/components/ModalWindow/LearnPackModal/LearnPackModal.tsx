import React, {useEffect, useState} from 'react';
import {
    ButtonCancel,
    ButtonSave,
    ButtonsBlock,
    Modal,
    ModalTextWrapper,
    ModalWindow,
    ModalWrapperClear,
    WrapperText,
    WrapperTextAndClose
} from '../../StylesComponents/ModalWrappers';
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {useNavigate, useParams} from "react-router-dom";
import {OnePacksType} from "../../../Types/PacksTypes";
import {colors} from "../../StylesComponents/Colors";
import {RadioInput} from "../../Common/RadioInput";
import {OneCardType} from "../../../Types/CardTypes";
import {getCardsTC, updatedGradeTC} from "../../../Thunk's/CardsThunk";
import {Random} from "../../../UtilsFunction/Random";

export const LearnPackModal = () => {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const pack = useAppSelector<OnePacksType[]>(state => state.PacksReducer.packs);
    const cards = useAppSelector<OneCardType[]>(state => state.CardsReducer.cards);
    const {packId} = useParams()
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();
    const closeModalClick = () => navigate(-1);

    const [card, setCard] = useState({} as OneCardType);

    useEffect(() => {
        cards.length > 0 && setCard(Random(cards))
        dispatch(getCardsTC())
    }, []);

    const namePack = pack.find(el => el._id === packId)?.name;

    const showAnswerClickHandler = () => {
        setShowAnswer(true);
    }

    const [grade, setGrade] = useState<number>();
    const grades = [
        {title: 'Did not know', grade: 1},
        {title: 'Forgot', grade: 2},
        {title: 'A lot of thought', grade: 3},
        {title: 'Сonfused', grade: 4},
        {title: 'Knew the answer', grade: 5}
    ]

    const onChangeOption = (grade: number) => {
        setGrade(grade)
    }

    const onNext = () => {
        grade && dispatch(updatedGradeTC(grade, card._id))
        setCard(Random(cards))
        setShowAnswer(false);
    }

    return (
        <ModalWrapperClear>
            <ModalWindow>
                <Modal>
                    <WrapperTextAndClose style={{display: "flex", justifyContent: "center"}}>
                        <ModalTextWrapper>Learn "{namePack}"</ModalTextWrapper>
                    </WrapperTextAndClose>

                    <WrapperText>
                        <b>Question:</b> "{card.question}"
                    </WrapperText>
                    {showAnswer && <>
                        <WrapperText>
                            <b>Answer:</b> "{card.answer}"
                        </WrapperText>
                        <RadioInput options={grades} value={grade} onChangeOption={onChangeOption}/>
                    </>}

                    <ButtonsBlock>
                        <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                        <ButtonSave bgColor={showAnswer ? colors.Green : colors.Blue}
                                    onClick={showAnswer ? onNext : showAnswerClickHandler} width={"230px"}>
                            {showAnswer ? 'Next' : 'Show answer'}
                        </ButtonSave>
                    </ButtonsBlock>
                </Modal>
            </ModalWindow>
        </ModalWrapperClear>
    );
};
