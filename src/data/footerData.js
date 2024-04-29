import {PiTelegramLogo} from "react-icons/pi";
import {AiOutlinePhone, AiOutlineWhatsApp} from "react-icons/ai";

export const footMenu = [
    {
        id: 1,
        title: "Помощь",
        menu: [
            {
                id: 1,
                link: "Варианты доставки",
                path: "/"
            },
            {
                id: 2,
                link: "Правила возврата",
                path: "/"
            },
            {
                id: 3,
                link: "Оплата",
                path: "/"
            },
            {
                id: 4,
                link: "Для оптовиков",
                path: "/"
            },
        ]
    },

    {
        id: 3,
        title: "О компании",
        menu: [
            {
                id: 1,
                link: "Как нас найти",
                path: "/"
            },
            {
                id: 2,
                link: "Сотрудничество",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <PiTelegramLogo />,
        path: "https://t.me/bandidorussia",
    },
    {
        id: 2,
        icon: <AiOutlineWhatsApp />,
        path: "https://wa.me/+79507157766",
    },
    {
        id: 3,
        icon: <AiOutlinePhone />,
        path: "/",
    },
];
