<template>
    <div class="parent">
      <h1>親コンポーネント</h1>
      <ChildComponent/>
    </div>
    <div class="parent">
      <h1>親コンポーネント</h1>
      <LinkComponent/>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent/ChildComponent.vue';
  import LinkComponent from './ChildComponent/LinkComponent.vue';
  export default {
    name: 'ComponentItem',
    components: {
      ChildComponent,
      LinkComponent
    }
  };
  </script>
  
  <style scoped>
  .parent {
    padding: 20px;
    background-color: #e9e9e9;
    border: 1px solid #ccc;
  }
  </style>