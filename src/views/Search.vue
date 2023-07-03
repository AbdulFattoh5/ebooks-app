<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
  />
  <section class="search">
    <div class="container">
      <div class="search__wrap">
        <h1 class="search_h">Find your book of choice.</h1>
        <p class="search_p">
          The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go.
        </p>
        <div class="search__input">
          <input
            placeholder="Search ebooks"
            class="search__input-main"
            type="text"
            v-model="book"
            @keydown.enter="getBooks"
          />
          <button class="search__input-btn" @click="getBooks">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="search__res" v-if="books">
    <div class="container">
      <h4 class="search__res-h">Your search result</h4>
      <Ebooks />
    </div>
  </section>
</template>

<script>
import Ebooks from "@/components/ebook/Ebooks.vue";
import { mapState } from "vuex";
export default {
  components: {
    Ebooks,
  },
  data() {
    return {
      book: "",
    };
  },
  methods: {
    getBooks() {
      this.$store.dispatch("getBooks", this.book);
      this.book = "";
    },
  },
  computed: {
    ...mapState(["books"]),
  },
};
</script>

<style></style>
