let lamp = document.getElementById('lamp');
for (let s = 0; s <100; s++) {
   let trafficLight = "";

      if (s % 3 == 0) {
         trafficLight = "red";
      }   
      else if (s % 3 == 2) {
         trafficLight = "green";
       }
       else if (s % 1 == 0) {
         trafficLight = "yellow";
       }

lamp.innerHTML += `<div class="traffic" id="traffic` + s + `">
                  <div class="lampu buled ${trafficLight}"></div>
                  <button class="button buled" data-index="`+ s + `"></button></div>`
}
function toggleLight(index) {
let serliCantik = document.getElementById('traffic' + index).querySelector('.lampu');
serliCantik.classList.toggle('on')
}
lamp.addEventListener('click', function (e) { 
    if (e.target.classList.contains('button')) {
     let index = e.target.attributes['data-index'].value
     toggleLight(index)}
});
FontFaceSetLoadEvent
