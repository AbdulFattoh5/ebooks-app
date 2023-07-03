<template>
  <div class="ebook">
    <div class="ebook__wrap" v-if="books">
      <img v-if="books.volumeInfo.imageLinks?.smallThumbnail" :src="books.volumeInfo.imageLinks?.smallThumbnail" alt="" class="ebook__img" />
      <img v-else src="@/assets/img/book-not-found.jpg" alt="" class="ebook__img ebook__nf" />
      <div class="ebook__desc">
        <h1 class="ebook__title">{{ truncateTitle(books.volumeInfo.title) }}</h1>
        <p class="ebook__author ebook__info">Author: {{ formatAuthors(books.volumeInfo.authors) }}</p>
        <p class="ebook__categories ebook__info" v-if="books.volumeInfo.categories">Categories: {{ formatCategories(books.volumeInfo.categories) }}</p>
        <p class="ebook__categories ebook__info" v-else>Categories: Not found</p>
        <p class="ebook__year ebook__info">Published year: {{ getPublicationYear(books.volumeInfo.publishedDate) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books:Object,
  },
  methods: {
    truncateTitle(title) {
      const words = title.split(' ');
      if (words.length > 4) {
        const truncatedTitle = words.slice(0, 4).join(' ');
        return truncatedTitle + '...';
      }
      return title;
    },
    formatAuthors(authors) {
      if (authors && authors.length > 0) {
        if (authors.length === 1) {
          return authors[0];
        } else if (authors.length === 2) {
          return authors.join(' and ');
        } else {
          const formattedAuthors = authors.slice(0, 2).join(', ');
          const remainingAuthors = authors.length - 2;
          return `${formattedAuthors}, and ${remainingAuthors} more`;
        }
      } else return 'Not found';
    },
    formatCategories(categories) {
      return categories ? categories.join(', ') : '';
    },
    getPublicationYear(date) {
      if (date) {
        const year = new Date(date).getFullYear();
        return year;
      }
      return 'N/A';
    },
  },
};
</script>

<style></style>