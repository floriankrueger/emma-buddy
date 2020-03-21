<template>
<div>
    <div class="nav"> 
        <router-link to='/'>Aktuelles</router-link>
            <router-link to='/berater'>Berater</router-link>
            <router-link to='/chat'>Chat</router-link>
            <router-link to='/karte'>Karte</router-link>
            <router-link to='/impressum'>Impressum</router-link>
    </div>
    <div>
        
    </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  

  methods: {
    
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav{
    display:flex;
    flex-direction:column;
    color: #42b983;
}
</style>