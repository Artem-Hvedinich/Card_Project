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
import {useAppSelector} from "../../../Store-Reducers/Store";
import {useNavigate, useParams} from "react-router-dom";
import {OnePacksType} from "../../../Types/PacksTypes";
import {CardsInitialStateType} from "../../../Store-Reducers/Cards-Reducer";
import {colors} from "../../StylesComponents/Colors";
import {RadioInput} from "../../../UtilsFunction/RadioInput";

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Сonfused', 'Knew the answer'];

const getCard = (cards: any) => {
    const sum = cards.reduce((acc: number, card: any) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card: any, i: number) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const LearnPackModal = () => {

    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    const pack = useAppSelector<OnePacksType[]>(state => state.PacksReducer.packs);
    const cards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const {packId} = useParams()
    const navigate = useNavigate();

    const closeModalClick = () => navigate(-1);
    const showAnswerClickHandler = () => setShowAnswer(true);
    let namePack = pack.find(el => el._id === packId)?.name;

    const [card, setCard] = useState({
        cardsPack_id: '',
        _id: '',
        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
    });

    useEffect(() => {
        setCard(getCard(cards.cards));
    }, [packId, cards, card]);

    const onNext = () => {
        setShowAnswer(false);
        setCard(getCard(cards));
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
                        <RadioInput options={grades}/>
                    </>}

                    <ButtonsBlock>
                        <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                        <ButtonSave bgColor={showAnswer ? colors.Green : colors.Blue}
                                    onClick={showAnswer ? onNext : showAnswerClickHandler} width={"230px"}>
                            {showAnswer ? 'Next' : 'Show answer'}</ButtonSave>
                    </ButtonsBlock>
                </Modal>
            </ModalWindow>
        </ModalWrapperClear>
    );
};
