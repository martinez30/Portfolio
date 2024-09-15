import { ChangeEvent, ChangeEventHandler, FocusEventHandler } from "react"
import styled from "styled-components"

interface Props {
    label: string,
    value: string,
    name: string,
    textarea?: boolean,
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function Input(props: Props) {
    return (
        <Fieldset>
            <legend>{props.label}</legend>
            {props.textarea ? (
                <textarea
                    name={props.name}
                    value={props.value}
                    style={{ height: 100 }}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            ) : (
                <input
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            )}
        </Fieldset>
    )
}

const Fieldset = styled.fieldset`
    border-color: #6A3894;
    border-width: 2px;

    legend {
        font-size: 2rem;
    }

    input, textarea {
        width: 99%;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 20px;
        resize: none;
    }
`