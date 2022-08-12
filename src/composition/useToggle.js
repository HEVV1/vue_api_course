import {ref} from 'vue';

export function useToggle() {
  let visible = ref(true);
  const toggle = () => {
    visible.value = !visible.value;
  };

  return {visible, toggle};
}