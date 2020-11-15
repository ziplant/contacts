<template lang="pug">
.list-item
	.list-item_row.list-item_row--xs-col
		.list-item_wrap.list-item_wrap--fill.field
			input.field_item.list-item_title(
				v-model="fieldData.name" 
				placeholder="Name"
			)
			input.field_item(
				v-model="fieldData.value"
				placeholder="Value"
			)
		.list-item_wrap
			button.btn.btn--action(
        @click="accept()" 
        :class="{'btn--disabled': !fieldData.name}" 
      ) Accept
			button.btn.btn--danger(
        v-if="field" @click="swapToggle"
      ) Cancel
			button.btn.btn--danger(
        v-else @click="close()"
      ) Cancel
	Teleport(to="#modal")
		Confirm(
		v-if="isToggleOpen"
		@closeModal="cancel"
		) 
			|Do you want cancel edit 
			b {{field.name}}
			|?
</template>

<script>
import Confirm from "@/components/Confirm";
import { inject, reactive } from "vue";
import useToggle from "@/compositions/toggle";

export default {
  props: ["field", "contactId"],
  setup({ field, contactId }, { emit }) {
    let fieldData = reactive({ ...field } || {});
    const { isToggleOpen, swapToggle } = useToggle();
    const { editField } = inject("contactsStore");

    const accept = () => {
      editField(contactId, fieldData);
      close();
    };

    const cancel = (confirmed) => {
      if (confirmed) {
        for (let key in field) {
          fieldData[key] = field[key];
        }
        close();
      }

      swapToggle();
    };

    const close = () => {
      emit("close");
    };

    return {
      fieldData,
      swapToggle,
      isToggleOpen,
      accept,
      cancel,
      close,
    };
  },
  components: {
    Confirm,
  },
};
</script>

<style lang="sass"></style>
