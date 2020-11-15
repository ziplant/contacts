<template lang="pug">
form.list-item(@submit.prevent="submit()")
  .list-item_row.form
    input.form_field(
      type="text" 
      placeholder="Contact title" 
      v-model="contactTitle"
    )
    button.form_submit.btn.btn--action(
      type="submit"
      :class="{'btn--disabled': !(!!contactTitle)}" 
    ) Add
</template>

<script>
import { ref, inject } from "vue";

export default {
  setup() {
    const contactTitle = ref("");
    const { addContact } = inject("contactsStore");

    const submit = () => {
      if (addContact(contactTitle.value)) {
        contactTitle.value = "";
      }
    };

    return {
      contactTitle,
      submit,
    };
  },
};
</script>

<style lang="sass"></style>
