export function getEndOfNextWeek(): string {
  // Получаем текущую дату
  let currentDate: Date = new Date();

  // День недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
  let currentDay: number = currentDate.getDay();

  // Считаем разницу дней между текущим днем и концом недели (воскресенье - 6)
  let diff: number = 6 - currentDay;

  // Добавляем дни к текущей дате для получения даты конца текущей недели
  let endOfCurrentWeek: Date = new Date(currentDate);
  endOfCurrentWeek.setDate(currentDate.getDate() + diff);

  // Добавляем 7 дней для получения даты конца следующей недели
  let endOfNextWeek: Date = new Date(endOfCurrentWeek);
  endOfNextWeek.setDate(endOfCurrentWeek.getDate() + 7);

  // Форматируем дату в формат "ДД-ММ-ГГГГ"
  let day: string = ('0' + endOfNextWeek.getDate()).slice(-2);
  let month: string = ('0' + (endOfNextWeek.getMonth() + 1)).slice(-2);
  let year: number = endOfNextWeek.getFullYear();

  return `${day}.${month}.${year}`;
}
