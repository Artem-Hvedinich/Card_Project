export type ResponseDataLoginOrAuthMe = {
    _id: string | null;
    email: string | null;
    name: string | null;
    avatar?: string | null;
    publicCardPacksCount: number | null;
// количество колод

    created: Date | null;
    updated: Date | null;
    isAdmin: boolean | null;
    verified: boolean | null; // подтвердил ли почту
    rememberMe: boolean | null;

    error?: string | null;
};
