$(window).on('load', function() {
    let container = document.getElementById('search-wrapper');
    container.classList.add('active');
    container.click();
});

// // JavaScript Document
// 'use strict'

// {
//     const open = document.getElementById('open');
//     const close = document.getElementById('close');
//     const modal = document.getElementById('modal');
//     const mask = document.getElementById('mask');

//     open.addEventListener('click', () => {
//         modal.classList.remove('hidden');
//         mask.classList.remove('hidden');
//     });

//     close.addEventListener('click', () => {
//         modal.classList.add('hidden');
//         mask.classList.add('hidden');
//     });

//     mask.addEventListener('click', () => {
//         //modal.classList.add('hidden');
//         //mask.classList.add('mask');
//         close.click();
//     });
// }


const search = () => {
    let word = document.getElementById("search-input").value;
    if (word.includes("で検索")) {
        word = word.replace("で検索", "");
    }
    if (isURL(word)) {
        location.href = `http://${word}`;
    } else {
        location.href = `https://www.google.com/search?q=${word}`;
    }
}

function searchToggle(obj, evt) {
    let container = $(obj).closest('#search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}

$(document).ready(function() {
    $(".toast").toast({ delay: 2000 }).toast("show");
});

function isURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resultDiv = document.querySelector('#result-div');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = ''; // 確定した(黒の)認識結果

recognition.onresult = (event) => {
    let interimTranscript = ''; // 暫定(灰色)の認識結果
    for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            finalTranscript += transcript;
        } else {
            interimTranscript = transcript;
        }
    }
    document.getElementById("search-input").value = finalTranscript;
    let word = document.getElementById("search-input").value;
    if (word.includes("で検索")) {
        search();
    }
}


startBtn.onclick = () => {
    recognition.start();
}
stopBtn.onclick = () => {
    recognition.stop();
}

input.addEventListener('input', check_words);

function check_words() {
    let word = document.getElementById("search-input").value;
    if (word.includes("で検索")) {
        search();
    }
}
