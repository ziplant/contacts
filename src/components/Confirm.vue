<template lang="pug">
.modal
  .modal_back(@click="cancel()")
  .modal_front
    .modal_title
      slot
    .modal_content
      .btn.btn--danger(
        @click="confirm"
      ) Confirm
      .btn.btn--action(@click="cancel()") Cancel
</template>

<script>
export default {
  setup({}, { emit }) {
    let isConfirmed = false;

    const cancel = () => {
      isConfirmed = false;
      close();
    };

    const confirm = () => {
      isConfirmed = true;
      close();
    };

    const close = () => {
      emit("closeModal", isConfirmed);
    };

    return {
      cancel,
      confirm,
    };
  },
};
</script>
