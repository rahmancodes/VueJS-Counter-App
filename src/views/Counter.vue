<template>
  <center>
    <h1>{{ msg }}</h1>
    <h3>Value: {{ counter }}</h3>

    <div>
      <input type="text" placeholder="Enter value here" class="method" v-model="count" name="add" />
      <button @click="setValue"><b>SET VALUE</b></button>
    </div>

    <div class="btns">
      <button class="method" @click="increase"><b>INCREMENT</b></button>
      <button class="method" @click="decrease"><b>DECREMENT</b></button>
      <button class="method" @click="reset"><b>RESET</b></button>
    </div>
  </center>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0,
      count: "",
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
    setValue() {
      this.counter += +this.count;
      this.count = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 24px;
}
ul {
  list-style-type: none;
  padding: 0;
}

input{
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
}

input:focus{
  border: 2px solid lightblue;
}

input::placeholder{
  color: lightblue;
}

button {
  margin: 20px 0;
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 10px;
  filter: drop-shadow(0 0 1em lightblue);
  color: #42b983;
}

.method:nth-child(2){
  color: #b94242;
}

.method:nth-child(3){
  color: black;
}
.m-r {
  margin-right: 10px;
}
</style>
