var startDate = new Date('2024-09-01');
var weekType
// Задаем дату, для которой нужно проверить неделю
var currentDate = new Date();

// Расчет количества недель между начальной датой и текущей датой
var diffInWeeks = Math.floor((currentDate - startDate) / (7 * 24 * 60 * 60 * 1000));

// Проверка, является ли неделя четной или нечетной
if (diffInWeeks % 2 === 0) {
  var weekType = 'вторая';
} else {
  var weekType = 'первая';
}
// Вывод результата
console.log('Текущая неделя: ' + diffInWeeks);
console.log('Тип недели: ' + weekType);