ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.491227, 37.311896],
        zoom: 12,

        // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
        // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
        controls: []
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>Coral travel в Троицке</strong>',
            '<br/>',
            'Москва, Троицк, ул. Радужная 2, ТД Радужный, 2-этаж',
            '<br/>',
            'Телефон: <a href="tel:+74956459031">+7-495-645-90-31</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    var myPlacemark2 = new ymaps.Placemark([55.484413, 37.305753], {
        balloonContentBody: [
            '<address>',
            '<strong>Sunmar в Троицке</strong>',
            '<br/>',
            'Москва, Троицк, ул. Академическая площадь 5, ТЦ Академический, 2-этаж',
            '<br/>',
            'Телефон: <a href="tel:+74994993454">+7-499-499-34-54</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    var myPlacemark3 = new ymaps.Placemark([55.515801, 37.351158], {
        balloonContentBody: [
            '<address>',
            '<strong>Coral travel в Новых-Ватутинках</strong>',
            '<br/>',
            'Москва, поселение Десёновское, 2-я Нововатутинская улица, 1',
            '<br/>',
            'Телефон: <a href="tel:+74993434604">+7-499-343-46-04</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
});
