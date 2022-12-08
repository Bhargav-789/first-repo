var inch = document.getElementById('in');
var centiMeter = document.getElementById('cm');

inch.addEventListener('input',function(){
  let i = this.value;
  let c = i*2.54;
  centiMeter.value=c;
});

centiMeter.addEventListener('input',function(){
    let c = this.value;
    let i = c/2.54;
    inch.value=i;
  });