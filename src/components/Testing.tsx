import React from 'react';
import SuperInputText from "./SuperComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "./SuperComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "./SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "./SuperComponents/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "./SuperComponents/c5-SuperSelect/SuperSelect";
import SuperRadio from "./SuperComponents/c6-SuperRadio/SuperRadio";
import SuperRange from "./SuperComponents/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./SuperComponents/c8-SuperDoubleRange/SuperDoubleRange";

export const Testing = () => {
    return (
        <div>
            <SuperInputText value={'Hello'}/>
            <SuperButton>add</SuperButton>
            <SuperCheckbox/>
            <div><SuperEditableSpan value={'artem'}/></div>
            <SuperSelect options={['artem', 'kate', 'vlad']}/>
            <SuperRadio options={['artem', 'kate', 'vlad']}/>
            <SuperRange valueMinHandler={1}/>
            <SuperDoubleRange valueMinHandler={1} valueMaxHandler={100} numberContentMin={1} numberContentMax={100}/>
        </div>
    )
}
