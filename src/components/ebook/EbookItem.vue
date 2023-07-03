<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
  />
  <div class="container">
    <div class="ebookItem" v-if="books && Object.keys(books).length > 0">
      <button class="ebookItem__btn" @click="closeModal">
        <i class="fas fa-long-arrow-left"></i>
        Go Back
      </button>
      <div class="ebookItem__wrap">
        <img
          v-if="books.volumeInfo.imageLinks?.smallThumbnail"
          :src="books.volumeInfo.imageLinks.smallThumbnail"
          alt=""
          class="ebookItem__img"
        />
        <img
          v-else
          src="@/assets/img/book-not-found.jpg"
          alt=""
          class="ebook__img ebook__nf"
        />
        <div class="ebookItem__desc">
          <h1 class="ebookItem__title">{{ books.volumeInfo.title }}</h1>
          <p class="ebookItem__p">
            <b>Description:</b>
            {{ books.volumeInfo.description || "Description not available." }}
          </p>
          <p class="ebookItem__p">
            <b>Categories:</b>
            {{ formatCategories(books.volumeInfo.categories) || "Not found" }}
          </p>
          <p class="ebookItem__p">
            <b>Authors:</b>
            {{ formatCategories(books.volumeInfo.authors) || "Not found" }}
          </p>
          <p class="ebookItem__p">
            <b>Subtitle:</b>{{ books.volumeInfo.subtitle || "Not found" }}
          </p>
          <p class="ebookItem__p">
            <b>Published year:</b>
            {{ books.volumeInfo.publishedDate || "Not found" }}
          </p>
          <a class="ebookItem__link" :href="books.volumeInfo.previewLink"
            >More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    books: Array,
  },
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    formatCategories(categories) {
      return categories ? categories.join(", ") : "";
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
