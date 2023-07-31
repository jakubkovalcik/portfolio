// script borrowed from the ChatGPT

const letters = document.querySelectorAll('.letter');

letters.forEach((letter, index) => {
    const delay = index * 100; // Adjust the delay time for each letter

    setTimeout(() => {
        letter.style.opacity = '1';
    }, delay);
});