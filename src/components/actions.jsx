import axios from 'axios';
import {FormDataSchema} from "./schema";

export default async function sendMessage(name, phone, dataTech) {
    console.log(dataTech.cartItems[0].id)
    try {
        const telegramResponse = await axios.post(`https://api.telegram.org/bot7003902578:AAHZEutxZGtg0XAg7l7WE8iCkcNPlcUm-gg/sendMessage`, {
            chat_id: -1001923149371,
            parse_mode: 'html',
            text: `Новая заявка!
            Имя: ${name} 
            Телефон: ${phone}
            Хочет купить: ${dataTech.cartItems.map(el=>
                `${el.brand} - ${el.quantity} шт `
            )}
            Итого: ${dataTech.cartItems.reduce((acc,el)=>
                el.finalPrice*el.quantity+acc, 0)} рублей
            `
        });
        return telegramResponse.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message');
    }
}

export async function addEntry(data, dataTech) {
    const result = FormDataSchema.safeParse(data)
    console.log(result)
    if (result.success) {
        sendMessage(data.name, data.phone, dataTech)
        console.log(dataTech)
        return { success: true, data: result.data }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}