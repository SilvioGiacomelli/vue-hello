const { createApp } = Vue;

createApp({
  data() {
    return {
      saluto: 'Hello',
      immagine: './immagine/01.webp',
    }
  },
}).mount('#app')