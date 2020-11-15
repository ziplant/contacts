<template lang="pug">
ul.list
  ContactListItem.list_item(
    v-for="contact in contacts" 
    :key="contact.id"
    :contact="contact"
  )
</template>

<script>
import ContactListItem from "./ContactListItem";
import { inject } from "vue";

export default {
  setup() {
    const { contacts } = inject("contactsStore");

    return {
      contacts,
    };
  },
  components: {
    ContactListItem,
  },
};
</script>

<style lang="sass"></style>
