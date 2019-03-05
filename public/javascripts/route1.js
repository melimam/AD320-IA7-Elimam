var mydiv = document.getElementById('myDIV');
mydiv.addEventListener('click', function(){
  if (this.style.background ==  'red'){
    this.style.background = 'blue';

  }else {

    this.style.background = 'red';
  }

});
