var myVideo = document.getElementById('myVideo');

VisSense.VisMon.Builder(VisSense(myVideo, { fullyvisible: 0.75 }))
.on('fullyvisible', function(monitor) {
  myVideo.play();
})
.on('hidden', function(monitor) {
  myVideo.pause();
  
})
.build()
.start();

var myElement = $('.js_my-element');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 1 - st/600
    });
});

var myVideo1 = document.getElementById('myVideo1');

VisSense.VisMon.Builder(VisSense(myVideo1, { fullyvisible: 0.75 }))
.on('fullyvisible', function(monitor) {
  myVideo1.play();
})
.on('hidden', function(monitor) {
  myVideo1.pause();
  
})
.build()
.start();