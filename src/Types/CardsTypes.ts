export type FilterCardsType = "All" | "My";

export type OnePacksType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}

type ResponseCardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    _id: string
    user_id: string
    created: string
    updated: string
}

export type GetCardsResponseType = {
    cards: ResponseCardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: number
}

export type ResponsePacksType = {
    cardPack: OnePacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}