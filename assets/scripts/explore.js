// explore.js

window.addEventListener('DOMContentLoaded', init);

function populateVoiceList() {
  const voiceSelect = document.getElementById('voice-select');
  let voices = window.speechSynthesis.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

function init() {
  // TODO
  //populate voice list based on browser
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // implements button work
  let textbox = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const voiceSelect = document.querySelector("select");
  button.addEventListener('click', function() {
    // checks the textbox and valid voice selection
    let utterance = new SpeechSynthesisUtterance(textbox.value); 
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    let voices = window.speechSynthesis.getVoices();
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterance.voice = voice;
        break;
      }
    }

    // changes the image when speaking
    utterance.addEventListener('start', function() {
      let img = document.querySelector('img');
      img.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', function() {
      let img = document.querySelector('img');
      img.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}