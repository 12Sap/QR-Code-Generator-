alert('Use Desktop Mode');

let inp = document.querySelector('.inp');

let srchBtn = document.querySelector('.searchBtn');

let outputBox = document.querySelector('.outputCont');

let outImg = document.querySelector('.outImg');

let dwnldImg = document.querySelector('.dwnldImg');
outputBox.style.display = 'none';

async function fetchQR(text) {
 let qrUrl = `https://quickchart.io/qr?text=${text}`;
 let data = await fetch(qrUrl);
 return data.url;
}

srchBtn.addEventListener('click',async ()=>{
 let txt = inp.value;
 if (txt!='') {
  let src = await fetchQR(txt);
  outImg.setAttribute('src',src);
  outputBox.style.display = 'flex';
  dwnldImg.setAttribute('href',src);
 } else {
  outputBox.style.display = 'none';
 }
 txt = '';
 
})
