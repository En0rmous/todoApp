<template>
  <div class="row">
    <div class="col-md-8">
      <label for="newToDo">Новое задание</label>
      <input type="text" class="form-control" id="newToDo" v-model="value">
    </div>
    <div class="col-md-4">
      <button class="btn btn-primary" @click="addTodo(value)">Добавить задание</button>
    </div>
    <hr>
    <div class="col-md-12 p-3">
      <div v-for="todo in $store.state.data">
          <to-do-app 
          :todo="todo"
          ></to-do-app>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import ToDoElem from './components/toDoElem.vue';

  export default {
    name: 'app',
    data () {
      return { 
        value : "Новое задание",
        list : []
      };
    },
    methods : {
      addTodo(el) {
        const newObj = {
          text : el,
          finished : false
        };
        this.$store.dispatch('pushData', newObj);
        this.value = "Новое задание";
      }
    },
    beforeMount() {
      this.$store.dispatch('initData');
    },
    components : {
      toDoApp : ToDoElem
    }
  }
</script>

<style>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-in forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-in forwards;
}
@keyframes slide-in {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}
</style>

