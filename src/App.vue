<template>
  <div class="container" v-for="i in 3">
    <div class="row">
      <div class="item1">
        <Pool :index="i" />
      </div>
      <div class="item2">
        <AddButton :index="i" />
      </div>
    </div>
  </div>
</template>



<script>
import AddButton from './components/AddButton.vue'
import Pool from './components/Pool.vue'


export default {
  name: 'App',
  components: {
    Pool,
    AddButton
  }
}
</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  background-color: #ffffff;
  border: solid #dfe2e6 3px;
  border-radius: 24px;
  box-shadow:   5px 5px 20px 5px rgba(0, 0, 0, 0.14), 
                -5px 5px 20px 5px rgba(0, 0, 0, 0.14),
                -5px -5px 20px 5px rgba(0, 0, 0, 0.14),
                5px -5px 20px 5px rgba(0, 0, 0, 0.14);
  padding: 0 52px;
  margin: 48px;
}

.row {
  display: flex;
  align-items: center; 
  flex-direction: row; 
  flex-wrap: nowrap;
  gap: 56px;
}

.item1 {
  flex-grow: 1000;
}
.item2 {
  flex-grow: 1;
}

</style>