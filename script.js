const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

function showTime() {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    const hourRotation = 30 * hh + mm / 2;
    const minRotation = 6 * mm;
    const secRotation = 6 * ss;

    hour.style.rotate = `${hourRotation}deg`;
    min.style.rotate = `${minRotation}deg`;
    sec.style.rotate = `${secRotation}deg`;
}
setInterval(showTime, 1000);
