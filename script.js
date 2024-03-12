const { createApp } = Vue;

createApp({
  data() {
    return {
      saluto: 'Hello',
      immagine: './immagine/01.webp',
      testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestias iure repudiandae illum. Odit suscipit rerum, assumenda numquam obcaecati nostrum illo earum adipisci libero velit reprehenderit vitae iste quasi dolore?',
      contatore:0,
      controller: false,
    }
  },
  methods:{
    incrementoContatore(){
      this.contatore++;
      console.log(this.contatore);
      return oDD = 'red'
    },
    cambioColore(){
      this.controller= !this.controller;
    },
    oDD(){
      return this.contatore % 2 === 0;
    }
  }
}).mount('#app')
