<template>
  <div class="search__res-wrap" :class="{ hidden: bookClicked }">
    <div v-for="(book, i) in books" :key="i" @click="openModal(book)">
      <Ebook :books="book" />
    </div>
  </div>
  <div class="ebook__main" :class="{ hidden: !bookClicked }">
    <EbookItem :books="selectedBook" @close="closeModal" />
  </div>
</template>

<script>
import Ebook from "@/components/ebook/Ebook.vue";
import EbookItem from "@/components/ebook/EbookItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    Ebook,
    EbookItem,
  },
  data() {
    return {
      bookClicked: false,
      selectedBook: null,
    };
  },
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    openModal(book) {
      this.bookClicked = true;
      this.selectedBook = book;
    },
    closeModal() {
      this.bookClicked = false;
      this.selectedBook = null;
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>
