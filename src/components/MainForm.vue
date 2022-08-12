<template>
  <form action="" class="layout-form" @submit.prevent="submit">
    <h1 class="text-center">Form</h1>
    <div v-if="show" class="form__wrapper">
      <div class="block-input">
        <div class="form-group">
          <input v-model="form.title" placeholder="Recipe Name"/>
        </div>
      </div>
      <div class="block-input">
        <div class="form-group">
          <input v-model="form.description" type="text" placeholder="Recipe Description"/>
        </div>
      </div>
    </div>
    <div class="form__button-wrapper">
      <primary-button type="submit" class="add" :disabled="!valid">add</primary-button>
      <primary-button type="button" class="delete" @click="toggleShow">{{ show ? 'Remove' : 'Show' }} form</primary-button>
    </div>
  </form>
</template>

<script>
import PrimaryButton from '@/components/UI/PrimaryButton';
import {useToggle} from '@/composition/useToggle';
import {useForm} from '@/composition/useForm';

export default {
  name: 'MainForm',
  components: {
    PrimaryButton,
  },
  props: {
    onAdd: {
      type: Function,
      required: true,
    }
  },
  setup(props) {

    const {visible: show, toggle: toggleShow} = useToggle();
    const {form, submit, valid} = useForm(props);
    return {
      show,
      toggleShow,
      form,
      submit,
      valid
    };
  }
};
</script>

<style scoped>

</style>