<template lang="pug">
li.list_item
	ContactField(
	 	v-if="!isToggleOpen"
		:field="field"
		:contactId="contactId"
		@edit="openToggle()"
	)
	ContactEditField(
		v-else 
		:field="field" 
		:contactId="contactId"
		@close="closeToggle()"
	)
</template>

<script>
import { useRoute } from "vue-router";
import ContactField from "./ContactField";
import ContactEditField from "./ContactEditField";
import useToggle from "@/compositions/toggle";

export default {
  props: ["field"],
  setup() {
    const route = useRoute();
    const { isToggleOpen, openToggle, closeToggle } = useToggle();
    const contactId = route.params.contactId;

    return {
      contactId,
      isToggleOpen,
      openToggle,
      closeToggle,
    };
  },
  components: {
    ContactField,
    ContactEditField,
  },
};
</script>

<style lang="sass"></style>
