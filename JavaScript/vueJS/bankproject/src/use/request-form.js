import * as yup from 'yup';
import { useField, useForm } from 'vee-validate'

export function useRequestFrom(fn) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            status: 'active'
        }
    });

    const { 
        value: nameV, 
        errorMessage: nameE, 
        handleBlur: nameB 
    } = useField('name',
        yup
            .string()
            .trim()
            .required('Это обязательное поле')
    )
    const { 
        value: phoneV, 
        errorMessage: phoneE, 
        handleBlur: phoneB 
    } = useField('phone',
        yup
            .string()
            .required('Это обязательное поле')
            .min(15, 'Введите корректный номер телефона')
    )
    const { 
        value: amountV, 
        errorMessage: amountE, 
        handleBlur: amountB 
    } = useField('amount',
        yup
            .number()
            .required('Это обязательное поле')
            .min(0, 'Сумма не может быть меньше нуля')
    )
    const { value: statusV } = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        nameV,
        nameE,
        nameB,
        phoneV,
        phoneE,
        phoneB,
        amountV,
        amountE,
        amountB,
        statusV,
        onSubmit,
        isSubmitting
    }
}