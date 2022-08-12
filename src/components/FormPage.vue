<template>
  <form action="" class="layout-form">
    <h1 class="text-center">Form</h1>
    <div class="form__wrapper">
      <div class="block-input">
        <div class="form-group">
          <main-input type="text" name="recipe_name" id="recipe_name" placeholder="Recipe Name"/>
        </div>
      </div>
      <div class="block-input">
        <div class="form-group">
          <main-input type="text" name="recipe_description" id="recipe_description" placeholder="Recipe Description"/>
        </div>
      </div>
    </div>
    <div class="form__button-wrapper">
      <primary-button type="button" class="add">add</primary-button>
      <primary-button type="button" class="delete">delete</primary-button>
    </div>
  </form>
</template>

<script>
import MainInput from "@/components/UI/MainInput";
import PrimaryButton from "@/components/UI/PrimaryButton";

export default {
  name: "form",
  components: {
    MainInput,
    PrimaryButton,
  }
  
}
</script>

<style scoped>

</style>