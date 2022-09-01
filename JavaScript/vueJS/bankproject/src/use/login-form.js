import { computed, watch, ref, onMounted } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { error } from '@/utils/error'

export function useLoginForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const PASSWORD_MIN_LENGTH = 6;

    onMounted(() => {
        if(!store.getters['messages/messages'].find((i) => i.status === 'testing')) {
            store.commit('messages/addMessage', 
            {
                message: `Создайте аккаунт или воспользуйтесь тестовым - email: test@gmail.com, pasword: testing`,
                status: 'testing'
            })
        }
        if(route.query.message === 'INVALID_AUTH') {
            store.commit('messages/addMessage', 
            {
                message: error('INVALID_AUTH'),
                status: 'danger'
            })
        }
        store.commit('messages/statusChange', true)
    })

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

    const toSignupPage = () => router.push('/signup');
    
    const openMessage = () => store.commit('messages/statusChange', true)
    
    const isTooManyAttempts = computed(() => submitCount.value >= 3)
    const timeout = ref(10000)
    watch(isTooManyAttempts, val => {
        if(val) {
            setTimeout(() => submitCount.value = 0, timeout.value)
            const timer = setInterval(() => {
                if(timeout.value <= 0) {
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
            await store.dispatch('auth/login', values)
            router.push('/')
        } catch(e) {
            console.log(e)
        }
    })

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
        timeout,
        openMessage,
        messagesIsOpen: computed(() => store.getters['messages/isOpen']),
        toSignupPage
    }
}