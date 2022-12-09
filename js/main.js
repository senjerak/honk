var $body = $('body');

$('html').on('keydown', function (e) {
    var $bubble;

    if (e.key == ' ') {
        $bubble = $('<div>');
        $bubble.addClass('bubble');
        $bubble.css({
            'top': Math.random() * (document.documentElement.clientHeight - 100),
            'left': Math.random() * (document.documentElement.clientWidth - 100)
        });
        $body.append($bubble);
    }
});

const audioElement = $('<audio>')[0];
audioElement.setAttribute('src', 'media/loooon.mp4')


$body.on('click', '.bubble', function () {
    $(this).addClass('is-popping');
    audioElement.currentTime = 1;
    audioElement.play();
});

$body.on('transitioned', '.bubble', function () {
    $(this).remove();
});
