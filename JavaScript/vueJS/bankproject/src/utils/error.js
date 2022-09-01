const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден.',
    INVALID_PASSWORD: 'Неверный пароль. Попробуйте снова.',
    INVALID_AUTH: 'Необходимо пройти авторизацию на сайте.',
    EMAIL_EXISTS: 'Аккаунт с таким логином уже существует.'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка.'
}