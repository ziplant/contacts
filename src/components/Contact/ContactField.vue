<template lang="pug">
.list-item
	.list-item_row.list-item_row--xs-col
		.list-item_wrap.list-item_wrap--fill.field
			.field_item.list-item_title {{field.name}} 
			.field_item {{field.value}}
		.list-item_wrap
			button.btn(@click="$emit('edit')") Edit
			button.btn.btn--danger(@click="swapToggle()") Delete
	Teleport(to="#modal")
		Confirm(
			v-if="isToggleOpen"
			@closeModal="remove"
		) 
			|Do you want delete 
			b {{field.name}}
			|?
</template>

<script>
import Confirm from "@/components/Confirm";
import { inject } from "vue";
import useToggle from "@/compositions/toggle";

export default {
  props: ["field", "contactId"],
  setup({ field, contactId }) {
    const { removeField } = inject("contactsStore");
    const { isToggleOpen, swapToggle } = useToggle();

    const remove = (confirmed) => {
      if (confirmed) {
        removeField(contactId, field.id);
      }

      swapToggle();
    };
    return {
      swapToggle,
      isToggleOpen,
      remove,
    };
  },
  components: {
    Confirm,
  },
};
</script>

<style lang="sass">
.field
	display: flex
	width: 100%
	justify-content: space-between
	align-items: center
	&_item
		flex: 1
		margin-right: 10px
		padding: 6px
		min-width: 100px
		width: 100%
		font-size: 16px
		line-height: 20px
		@media screen and (max-width: 480px)
			margin: 5px
			text-align: center
</style>
