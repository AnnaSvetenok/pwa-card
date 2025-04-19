if ('serviceWorker' in navigator) { // Проверка поддержки Service Worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js'); // Регистрация sw.js при загрузке страницы
  });
}

// Получаем элементы кнопок и QR-кодов
const telegramButton = document.getElementById('telegramButton');
const githubButton = document.getElementById('githubButton');
const whatsUpButton = document.getElementById('whatsUpButton');
const qrTelegram = document.getElementById('qrTelegram');
const qrGithub = document.getElementById('qrGithub');
const qrWhatsUp = document.getElementById('qrWhatsUp');
const closeQRCodeButton = document.getElementById('closeQRCode');

// Функция для отображения QR-кода Telegram
function showTelegramQRCode() {
    qrTelegram.style.display = 'block'; // Показываем QR-код Telegram
    qrGithub.style.display = 'none'; // Скрываем QR-код GitHub
	qrWhatsUp.style.display = 'none'; // Скрываем QR-код Mail
	closeQRCodeButton.style.display = 'block'; // Показываем кнопку закрытия
}

// Функция для отображения QR-кода GitHub
function showGithubQRCode() {
    qrGithub.style.display = 'block'; // Показываем QR-код GitHub
    qrTelegram.style.display = 'none'; // Скрываем QR-код Telegram
	qrWhatsUp.style.display = 'none'; // Скрываем QR-код Mail
	closeQRCodeButton.style.display = 'block'; // Показываем кнопку закрытия
}

// Функция для отображения QR-кода Mail
function showWhatsUpQRCode() {
    qrGithub.style.display = 'none'; // Скрываем QR-код GitHub
    qrTelegram.style.display = 'none'; // Скрываем QR-код Telegram
	qrWhatsUp.style.display = 'block'; // Показываем QR-код Mail
	closeQRCodeButton.style.display = 'block'; // Показываем кнопку закрытия
}

// Функция для скрытия QR-кода
function hideQRCode() {
    qrTelegram.style.display = 'none'; // Скрываем QR-код Telegram
    qrGithub.style.display = 'none'; // Скрываем QR-код GitHub
	qrWhatsUp.style.display = 'none'; // Скрываем QR-код Mail
    closeQRCodeButton.style.display = 'none'; // Скрываем кнопку закрытия
}

// Добавляем обработчики событий к кнопкам
telegramButton.addEventListener('click', showTelegramQRCode);
githubButton.addEventListener('click', showGithubQRCode);
whatsUpButton.addEventListener('click', showWhatsUpQRCode);
closeQRCodeButton.addEventListener('click', hideQRCode); // Обработчик для кнопки закрытия