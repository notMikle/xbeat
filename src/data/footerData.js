import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Помощь",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Трэк номер",
                path: "/"
            },
            {
                id: 3,
                link: "Отменить заказ",
                path: "/"
            },
            {
                id: 4,
                link: "Вернуть товар",
                path: "/"
            },
            {
                id: 5,
                link: "Еще что нибудь",
                path: "/"
            },
        ]
    },

    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "О нас",
                path: "/"
            },
            {
                id: 2,
                link: "Контакты",
                path: "/"
            },
            {
                id: 3,
                link: "Ватсап",
                path: "/"
            },
            {
                id: 4,
                link: "Телеграм",
                path: "/"
            },
            {
                id: 5,
                link: "Инстаграм",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
