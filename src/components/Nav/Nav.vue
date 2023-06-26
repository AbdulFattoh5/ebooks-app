<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__wrap-logo">
          <img src="@/assets/img/book-icon.png" alt="" />
          <span>ebooks</span>
        </router-link>
        <ul class="header__menu">
          <li>
            <router-link to="/" class="header__menu-link">Home</router-link>
          </li>
          <li>
            <router-link to="/main" class="header__menu-link">Main</router-link>
          </li>
          <li>
            <router-link to="/search" class="header__menu-link">Search</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style></style>
