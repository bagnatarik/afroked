import UserFromTelegram from "../interfaces/IUserFromTelegram";

export function parseFromTelegram(): UserFromTelegram {
    const initDataString: string = window.Telegram.WebApp.initData

    const params = new URLSearchParams(initDataString)

    let initData: UserFromTelegram = {
        id: undefined,
        first_name: undefined,
        last_name: undefined,
    }

    params.forEach(function (value, key) {
        if (key === 'user' && value.startsWith('{') && value.endsWith('}')) {
            initData = JSON.parse(value)
        }
    });

    return initData
}