import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, watch, computed } from 'vue'

export function useSignupForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const router = useRouter();
    const store = useStore();
    const PASSWORD_MIN_LENGTH = 6;
    const FAIconValue = ref('fa-solid fa-eye');

    const toAuthPage = () => router.push('/auth');

    const openMessage = () => store.commit('messages/statusChange', true)

    const passwordToggle = (pas) => {
        pas.getAttribute('type') === 'password' ? pas.setAttribute('type', 'text') : pas.setAttribute('type', 'password');
        FAIconValue.value === 'fa-solid fa-eye' ? FAIconValue.value = 'fa-solid fa-eye-slash' : FAIconValue.value = 'fa-solid fa-eye';
    }

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Это обязательное поле')
            .email('Необходимо ввести корректный email')
    );
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Это обязательное поле')
            .min(PASSWORD_MIN_LENGTH, `Пароль должен содержать не меньше ${PASSWORD_MIN_LENGTH} символов`)
    );

    const isTooManyAttempts = computed(() => submitCount.value >= 3)
    const timeout = ref(10000)
    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, timeout.value)
            const timer = setInterval(() => {
                if (timeout.value <= 0) {
                    clearInterval(timer)
                    timeout.value = 10000
                } else {
                    timeout.value -= 1000
                }
            }, 1000)
        }
    })

    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('signup/signup', values)
            router.push('/auth')
            store.commit('messages/addMessage',
                {
                    message: 'Аккаунт успешно создан, теперь можете в него войти.',
                    status: 'primary'
                })
        } catch (e) {
            console.log(e)
        }
    })

    return {
        toAuthPage,
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
        openMessage,
        isTooManyAttempts,
        timeout,
        messagesIsOpen: computed(() => store.getters['messages/isOpen']),
        passwordToggle,
        FAIconValue
    }
}