document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('voice-btn').addEventListener('click', function() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById('result-container').textContent = transcript;
    };

    recognition.onerror = function(event) {
      console.error('Error de reconocimiento de voz: ' + event.error);
    };
      // Prueba comentario para commit /
    recognition.start();
  });
});
