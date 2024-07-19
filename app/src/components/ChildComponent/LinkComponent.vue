<template>
    <div class="child">
      子コンポーネント
      <ul>
        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
        <li><a href="https://www.yahoo.com" target="_blank" rel="noopener noreferrer">Yahoo</a></li>
        <li><a href="https://qiita.com" target="_blank" rel="noopener noreferrer">Qiita</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent'
  };
  </script>
  
  <style scoped>
  .child {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: #0077cc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>