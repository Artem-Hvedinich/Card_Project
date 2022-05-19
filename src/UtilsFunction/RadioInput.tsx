import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const RadioInput: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => onChangeOption ? onChangeOption(e.currentTarget.value) : []
    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div>
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    onChange={onChangeCallback}
                    checked={o === value}
                    value={o}
                />
                {o}
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}
