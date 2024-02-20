import { api } from './Api';

const textForTelegram = (orderText: string) => {
  const currentDate = new Date().toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
  let contentOrder = `новый заказ с ${window.location.host} (${currentDate}):%0A%0A`;
  contentOrder += `%0A`;
  contentOrder += orderText;
  return contentOrder;
};

function sendOrder(
  orderText: string,
  orderCompleted: () => void,
  orderNotCompleted: () => void,
  city: string
) {
  const text = textForTelegram(orderText);
  api
    .sendTelegramBackend(text, city)
    .then((res) => {
      if (!res) {
        return Promise.reject(`Ошибка получения данных`);
      } else {
        orderCompleted();
      }
    })
    .catch((err) => {
      console.log(err);
      orderNotCompleted();
    });
}
export default sendOrder;
