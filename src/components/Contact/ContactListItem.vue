<template lang="pug">
li.list-item
  .list-item_row.list-item_row--xs-col
    .list-item_title {{contact.title}}
    .list-item_wrap
      router-link.btn(:to="`/contact/${contact.id}`") Info
      button.btn.btn--danger(@click="swapToggle()") Remove
  Teleport(to="#modal")  
    Confirm(v-if="isToggleOpen" @closeModal="remove") 
      |Do you want delete 
      b {{contact.title}}
      |?
</template>

<script>
import Confirm from "@/components/Confirm";
import { inject } from "vue";
import useToggle from "@/compositions/toggle";

export default {
  props: ["contact"],
  setup({ contact }, context) {
    const { isToggleOpen, swapToggle } = useToggle();
    const { removeContact } = inject("contactsStore");

    const remove = (confirmed) => {
      if (confirmed) {
        removeContact(contact.id);
      }

      swapToggle();
    };

    return {
      remove,
      isToggleOpen,
      swapToggle,
    };
  },
  components: {
    Confirm,
  },
};
</script>

<style lang="sass"></style>
