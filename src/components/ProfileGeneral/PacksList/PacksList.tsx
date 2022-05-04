import React, {ChangeEvent, useState} from 'react';
import s from "./PacksList.module.css";
import {GeneralProfileWrapper, ProfileWrapper} from "../../StylesComponents/Wrapper";

export const PacksList = () => {

    const [value, setValue] = useState<string>("");

    const onChangeHandler = (text: ChangeEvent<HTMLInputElement>) => setValue(`${text}`);
    const [active, setActive] = useState<boolean>(false);

    const onClickHandler = () => setActive(!active);

    const TableList = [
        {id: 1, name: 'Name'},
        {id: 2, name: 'Cards'},
        {id: 3, name: 'Last Updated'},
        {id: 4, name: 'Created by'},
        {id: 5, name: 'Actions'},
    ];

    const itemPack = [
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
        {name: "Pack Name", numberCards: 4, date: "18.01.2021", nameCreated: "Ivan Petrov", actions: "asd"},
    ];

    return (
        <GeneralProfileWrapper>
            <div className={s.tools_block}>
                <div className={s.text_filter}>Show packs cards</div>
                <div className={s.buttons_block}>
                    <button className={active ? s.buttons_filter : `${s.buttons_filter + active}`}
                            onClick={onClickHandler}>
                        My
                    </button>
                    <div className={s.palka}/>
                    <button className={!active ? `${s.buttons_filter + active}` : s.buttons_filter}
                            onClick={onClickHandler}>
                        All
                    </button>
                </div>
                <div className={s.text_filter}>Number of cards</div>
            </div>
            <ProfileWrapper>

                <div className={s.title}>Packs List</div>

                <div className={s.search_block}>
                    <input className={s.search_input}
                           placeholder={"Search..."}
                           onChange={(e) => onChangeHandler(e)}
                           value={value}
                    />
                    <button className={s.button_add}>
                        Add new pack
                    </button>
                </div>

                <div className={s.packs_block}>
                    <table className={s.table}>
                        <div className={s.item_columns}>
                            {TableList.map(el => <li className={s.name_columns_li} key={el.id}>{el.name}</li>)}
                        </div>
                        {itemPack.map(el =>
                            <tr className={s.li}>
                                <td>{el.name}</td>
                                <td>{el.numberCards}</td>
                                <td>{el.date}</td>
                                <td>{el.nameCreated}</td>
                                <td>{el.actions}</td>
                            </tr>)
                        }
                    </table>
                </div>

            </ProfileWrapper>
        </GeneralProfileWrapper>
    );
};

