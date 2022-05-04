import React, {useState} from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {Header} from "../Header/Header";
import {Profile} from "./Profile/Profile";
import {PacksList} from "./PacksList/PacksList";

type ProfileType = {}

export type TypeIdPage = 1 | 2;

export const ProfileGeneral = NotAuthRedirect(({}: ProfileType) => {

    const [page, setPage] = useState<TypeIdPage>(2);

    const NewPage = (id: TypeIdPage) => setPage(id);

    return (
        <>
            <Header setPage={NewPage} page={page}/>
            {page === 1
            ?  <PacksList />
            :  <Profile/>
            }
        </>
    )
});

