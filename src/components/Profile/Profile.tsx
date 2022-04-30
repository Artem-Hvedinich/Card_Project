import React from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";

export const Profile = NotAuthRedirect(() => {
    return (
        <div>
            <h1>Page is in progress</h1>
        </div>
    )
});


