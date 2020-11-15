<template lang="pug">
h2.title {{contact.title}} information
.list-item
  .list-item_row
    router-link.btn(to="/") Back
    button.btn.btn--warning(
      @click="stepBack(contactId)"
      :class="{'btn--disabled': !contact.history.length}" 
    ) Step back ({{contact.history.length}})
    button.btn.btn--action(
      @click="openToggle()"
    ) Add field
ContactEditField(
  v-if="isToggleOpen"
  :contactId="contactId"
  @close="closeToggle()"
)
ContactFieldList(:contact="contact")
</template>

<script>
import ContactFieldList from "@/components/Contact/ContactFieldList";
import ContactEditField from "@/components/Contact/ContactEditField";
import { computed, ref, inject } from "vue";
import { useRouter } from "vue-router";
import useToggle from "@/compositions/toggle";

export default {
  props: ["contactId"],
  setup({ contactId }) {
    const { getContact, stepBack } = inject("contactsStore");
    const router = useRouter();
    const contact = computed(() => getContact(contactId) || router.push("/"));
    const { isToggleOpen, openToggle, closeToggle } = useToggle();

    return {
      contact,
      stepBack,
      isToggleOpen,
      openToggle,
      closeToggle,
    };
  },
  components: {
    ContactFieldList,
    ContactEditField,
  },
};
</script>

<style lang="sass"></style>
