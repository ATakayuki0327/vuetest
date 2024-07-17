<template>
    <div class="simple-form">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">ユーザー名:</label>
          <input type="text" id="username" v-model="form.username" required>
        </div>
        <div>
          <label for="password">パスワード:</label>
          <input type="password" id="password" v-model="form.password" required>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SimpleForm',
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        alert(`Username: ${this.form.username}, Password: ${this.form.password}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .simple-form {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .simple-form div {
    margin-bottom: 10px;
  }
  label {
    margin-right: 10px;
  }
  input[type="text"], input[type="password"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  