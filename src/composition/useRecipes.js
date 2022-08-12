import {ref, reactive} from 'vue';

export function useRecipes() {
  //console.log(form)
  const recipes = ref([]);
  const current = ref(null);

  const addRecipes = (recipe) => {
    // console.log(recipe);
    recipes.value.push(recipe);
  };
  const selectRecipe = (id) => {
    current.value = recipes.value.find(r => r.id === id);
  };
  const removeRecipe = (id) => {
    current.value = null;
    recipes.value = recipes.value.filter(r => r.id !== id);
  };

  return {
    recipes,
    current,
    addRecipes,
    selectRecipe,
    removeRecipe
  };
}