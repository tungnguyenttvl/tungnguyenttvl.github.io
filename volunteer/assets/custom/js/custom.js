$('.donut').listtopie({
    startAngle: 270,
    strokeWidth: 5,
    hoverEvent: true,
    hoverBorderColor: '#6239d7',
    hoverAnimate: false,
    drawType: 'round',
    speedDraw: 150,
    hoverColor: '#ffffff',
    textColor: '#00000000',
    strokeColor: '#ffffff',
    textSize: '14',
    hoverAnimate: true,
    marginCenter: 50,
});

$(window).on('resize', function () {
    $('.donut').listtopie('refresh');
});