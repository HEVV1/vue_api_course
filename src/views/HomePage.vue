<template>
  <div class="container mb-5">
      <main-form :onAdd="addRecipes"  ></main-form>
  </div>
  <div class="container d-flex">
    <recipe-name @select="selectRecipe" :recipes="recipes"></recipe-name>
    <recipe-description :recipe="current" @remove="removeRecipe"></recipe-description>
  </div>
</template>

<script>
import MainForm from '@/components/MainForm';
import RecipeName from '@/components/RecipeName';
import RecipeDescription from '@/components/RecipeDescription';
import {useRecipes} from '@/composition/useRecipes';

export default {
  name: 'HomePage',
  components: {
    MainForm,
    RecipeName,
    RecipeDescription
  },
  setup() {
    const {recipes, current, addRecipes, selectRecipe, removeRecipe} = useRecipes();
    return {
      recipes,
      current,
      addRecipes,
      selectRecipe,
      removeRecipe
    };
  }
};
</script>