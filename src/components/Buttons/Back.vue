<template>
  <button class="back" @click="$router.back()">
    VOLTAR
  </button>
</template>

<script>
  export default {
    name: 'BackButton',
  };
</script>

<style lang="scss" scoped>
  .back {
    color: $white;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 1.25rem;
    margin-top: 50px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
</style>
