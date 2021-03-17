<template>
  <div class="error404">
    <div class="container">
      <h1>404</h1>
      <div class="logo">
        <img src="../assets/images/404cry.png" alt="">
      </div>
      <h2>Page can not be found</h2>
      <p>Please try one of the following pages: <span><a href="">Home page</a></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
.error404 {
  background: #eee9e9;
  padding-bottom: 500px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.logo {
  max-width: 10%;
  margin: 110px auto 0;
}

h1 {
  font-size: 250px;
  text-align: center;
  margin-top: 300px;
  display: block;
  font-weight: 900;
  color: #277c66;
}

h2 {
  text-align: center;
  font-size: 40px;
  color: #163543;
}

p {
  text-align: center;
  margin-top: 12px;
  font-size: 20px;
  color: #163543;
}

a {
  font-size: 30px;
  font-weight: bold;
  color: #277c66;
  font-family: system-ui,serif;
  text-decoration: underline;
}

@media (max-width: 600px) {
  h1 {
    font-size: 150px;
  }

  .logo {
    margin: 80px auto 0;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  a {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 100px;
    margin-top: 170px;
  }

  .logo {
    margin: 40px auto 0;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 14px;
  }

  a {
    display: block;
  }
}
</style>
