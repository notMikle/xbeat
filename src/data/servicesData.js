import {FaShippingFast, FaShieldAlt, FaUser, FaCreditCard, FaHome } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast color={"#a61c00"} />,
        title: "Быстрая доставка",
        info: "Почтой России или СДЭК",
    },
    {
        id: 3,
        icon: <FaHome color={"#a61c00"} />,
        title: "г.Белгород",
        info: "Самовывоз или доставка бесплатно",
    },
    {
        id: 2,
        icon: <FaShieldAlt color={"#a61c00"}  />,
        title: "Оригинальная продукция",
        info: "Мы являемся официальным представителем Bandido",
    },

    {
        id: 4,
        icon: <FaUser color={"#a61c00"}/>,
        title: "Индивидуальный подход",
        info: "Мы ценим наших клиентов и ориентируемся на долгосрочное сотрудничество",
    },
];

export default servicesData;