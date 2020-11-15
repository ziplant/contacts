<template lang="pug">
h2.title Contacts list
ContactAddForm
ContactList
</template>

<script>
import ContactList from "@/components/Contact/ContactList";
import ContactAddForm from "@/components/Contact/ContactAddForm";

export default {
  setup() {},
  components: {
    ContactList,
    ContactAddForm,
  },
};
</script>

<style lang="sass"></style>
