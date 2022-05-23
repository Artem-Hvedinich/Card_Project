import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type OptionType = {
    title: string,
    grade: number
}

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: OptionType[]
    onChangeOption?: (grade: number) => void
}

export const RadioInput: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => onChangeOption ? onChangeOption(+e.currentTarget.value) : []


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div>
            <label key={o.grade}>
                <input
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    checked={o.grade === value}
                    value={o.grade}
                />
                {o.title}
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}
