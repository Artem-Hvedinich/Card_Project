import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => onChangeOption ? onChangeOption(e.currentTarget.value) : []
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option key={i} value={o} className={''}> {o}</option>)) : []


    return (
        <select onChange={onChangeCallback} {...restProps} className={''}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
