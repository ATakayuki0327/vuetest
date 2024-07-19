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
      <div>
        <label for="role">権限:</label>
        <select id="role" v-model="form.role" required>
          <option disabled value="">選択してください</option>
          <option>ユーザー</option>
          <option>管理者</option>
        </select>
      </div>
      <div>
        <label>性別:</label>
        <input type="radio" id="male" value="男性" v-model="form.gender" required>
        <label for="male">男性</label>
        <input type="radio" id="female" value="女性" v-model="form.gender">
        <label for="female">女性</label>
      </div>
      <div>
        <input type="checkbox" id="allChecked" v-model="form.allChecked" required>
        <label for="allChecked">全部入力しましたか？</label>
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
        password: '',
        role: '',
        gender: '',
        allChecked: false
      }
    };
  },
  methods: {
    handleSubmit() {
      alert(`Username: ${this.form.username}, Password: ${this.form.password}, Role: ${this.form.role}, Gender: ${this.form.gender}, All Checked: ${this.form.allChecked}`);
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
input[type="text"], input[type="password"], select, input[type="radio"] {
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
