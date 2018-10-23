$(document).ready(function () {
    var _Seconds = $('.timer').text(),
        int;
    int = setInterval(function () { // запускаем интервал
        if (_Seconds > 0) {
            _Seconds--; // вычитаем 1
            $('.timer').text(_Seconds); // выводим получившееся значение в блок
        } else {
            clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
            alert('End!');
        }
    }, 1000);
});