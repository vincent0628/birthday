(function() {
  function $(id) {
    return document.getElementById(id);
  }
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      myAudio = $('myAudio'),
      timer = null;
  
  openB.addEventListener('click', function () {
    var password = prompt("Please enter password", "Anniversary, 4 digits");
    if (password == '0722') {
      myAudio.play();
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    }
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
