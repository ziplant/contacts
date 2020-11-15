<template lang="pug">
router-view
</template>

<script>
import { provide } from "vue";
import useContacts from "@/compositions/contacts";

export default {
  setup() {
    provide("contactsStore", { ...useContacts() });
  },
};
</script>

<style lang="sass">
@import @/assets/_common
</style>
