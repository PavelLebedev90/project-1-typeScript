import {FormErrors, InjectedFormProps} from 'redux-form';
import {WrappedFieldProps} from 'redux-form/lib/Field';
import classes from './Validation.module.css'

export const required = (value: string) => (value ? undefined : 'Required')
const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength20 = maxLength(20)
export const maxLength30 = maxLength(30)
export const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)


export const renderField = (
    {
                                input,
                                meta: {touched, error, warning},
                                ...props
                            }
             :WrappedFieldProps
) => {
const classError = touched && (error || warning)
    return (
        <div>
                <textarea className={classError? classes.error : ''}
                    {...props} {...input}/>
            <div className={classError? classes.errorMessage:''}>
                {touched &&
            ((error &&
                    <span>
            {error}
          </span>) ||
                (warning &&
                    <span>
              {warning}
            </span>))}
            </div>
        </div>
    )
}

export const renderFieldLogin = (
    {
        input,
        meta: {touched, error, warning},
        ...props
    }
        :WrappedFieldProps
) => {
    const classError = touched && (error || warning)
    return (
        <div>
                <input className={classError? classes.error : ''}
                          {...props} {...input}/>
            <div className={classError? classes.errorMessage:''}>
                {touched &&
                ((error &&
                        <span>
            {error}
          </span>) ||
                    (warning &&
                        <span>
              {warning}
            </span>))}
            </div>
        </div>
    )
}
