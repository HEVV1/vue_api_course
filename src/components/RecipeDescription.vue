<template>
  <div class="block-recipe-description">
    <div v-if="recipe" class="recipe-description__wrapper">
      <div class="recipe-description__text-wrapper text-center">
        <h2 class="styled-as-h2">{{ recipe.title }}</h2>
      </div>
      <div class="recipe-description__button-wrapper text-center">
        <primary-button type="button" class="none">Show</primary-button>
      </div>
      <div class="recipe-description__text-wrapper text-center">
        <span>{{ recipe.description }}</span>
      </div>
      <div class="recipe-description__button-wrapper text-center">
        <primary-button @click="$emit('remove', recipe.id)" type="button" class="delete">DELETE</primary-button>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/UI/PrimaryButton';
import {watch} from 'vue';
import {useToggle} from '@/composition/useToggle';

export default {
  name: 'RecipeDescription',
  components: {
    PrimaryButton
  },
  props: {
    recipe: Object
  },
  setup(props) {
    const {visible, toggle} = useToggle();
    watch(() => props.recipe, () => {
      visible.value = false;
    });
    return {
      visible, toggle
    };
  }
};

</script>

<style scoped>

</style>