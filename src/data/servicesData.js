import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Доставка быстрая как самолет",
        info: "24 часа",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "100 процентов оригинал",
        info: "турки говорят",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Баночки наши - деньги ваши",
        info: "зуб даю",
    },
    {
        id: 4,
        icon: <FaCreditCard />,
        title: "Не спиздим 100%",
        info: "отвечаю",
    },
];

export default servicesData;