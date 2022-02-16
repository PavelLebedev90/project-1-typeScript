import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {maxLength20, minLength2, renderField, required} from '../../Common/Validation';

export type AddMessageFormType = {
    newMessage: string
}
const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={renderField}
                       name={'newMessage'}
                       placeholder={'new Message'}
                       validate={[required, maxLength20, minLength2]}
                />
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}
export const AddMessageFormContainer = reduxForm<AddMessageFormType>({form: 'addNewMessage'})(AddMessageForm)
