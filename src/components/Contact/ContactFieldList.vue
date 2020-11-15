<template lang="pug">
ul.list
	ContactFieldListItem(
		v-for="field in contact.fields" 
		:key="field.id"
    :field="field"
		)
</template>

<script>
import ContactFieldListItem from "./ContactFieldListItem";

export default {
  props: ["contact"],
  setup() {
    return {};
  },
  components: {
    ContactFieldListItem,
  },
};
</script>

<style lang="sass"></style>
