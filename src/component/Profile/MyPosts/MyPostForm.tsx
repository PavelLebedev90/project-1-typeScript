import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import React from 'react';
import {maxLength20, minLength2, renderField, required} from '../../Common/Validation';

export type MyPostFormType = {
    newPostText: string
}
const MyPostForm = (props: InjectedFormProps<MyPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={renderField}
                       placeholder={'add post'}
                       validate={[required, maxLength20, minLength2]}
                />
            </div>
            <div>
                <button disabled={props.submitting}>
                    Add post
                </button>
            </div>
        </form>
    )
}
export const MyPostFormContainer = reduxForm<MyPostFormType>({form: 'addNewPost'})(MyPostForm)
