<template>
  <section class="maincontent">
    <div class="container">
      <div class="maincontent__wrap">
        <h1 class="maincontent_h">Find your book of choice.</h1>
        <p class="maincontent_p">
          The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go.
        </p>
      </div>
    </div>
  </section>
  <section class="maincontent__books">
    <div class="container">
      <div class="search__res-wrap" :class="{ hidden: bookClicked }">
        <div v-for="(book, i) in mainContent" :key="i" @click="openModal(book)">
          <Ebook :books="book" />
        </div>
      </div>
      <div class="ebook__main" :class="{ hidden: !bookClicked }">
        <EbookItem :books="selectedBook" @close="closeModal" />
      </div>
    </div>
  </section>
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
  computed: {
    ...mapState(["mainContent"]),
  },
  data() {
    return {
      bookClicked: false,
      selectedBook: null,
    };
  },
  methods: {
    GetMainContent() {
      this.$store.dispatch("GetMainContent");
    },
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
