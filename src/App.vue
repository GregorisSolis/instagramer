<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

body{
  margin: 0;
  background-color: #fafafa;
  font-family: 'Raleway', sans-serif;
}

#app{text-align: center;}

a{text-decoration: none;}

.linea{
  width: 40%;
  border-top: 1px solid #ccc;
}

  input:hover, input:focus {
    border: 1px solid #aaa;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
</style>
