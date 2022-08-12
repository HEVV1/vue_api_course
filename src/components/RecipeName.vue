<template>
  <div class="block-recipe-name">
    <div v-if="recipes.length" v-for="objRecipe of recipes" :key="objRecipe.id" class="recipe-name__wrapper">
      <div @click="$emit('select', objRecipe.id)" class="recipe-name__text-wrapper text-center">
        <h2>{{ objRecipe.title }}</h2>
      </div>
    </div>
    <div v-else class="recipe-name__wrapper">
      <div class="recipe-name__text-wrapper text-center">
        <h2>There is no recipes.</h2>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RecipeName',
  props: {
    recipes: {
      type: Array,
    }
  }
};
</script>

<style scoped>

</style>