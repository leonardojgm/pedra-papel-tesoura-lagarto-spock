<template>
  <div class="score">
    <h3 class="score-label">
      <span class="score-label--text">
        PONTOS
      </span>
      <span class="score-label--number">
        {{ score }}
      </span>
    </h3>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Score',
    computed: {
      ...mapState('Score', {
        score: ({ score }) => score,
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .score {
    background-color: $white;
    border-radius: 10px;
    padding: 20px 50px;

    @media (max-width: 400px) {
      padding: 10px;
    }

    &-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;

      &--text {
        font-size: 1rem;
        letter-spacing: 2.5px;
        color: $score-text;

        @media (max-width: 400px) {
          font-size: 0.5rem;
        }
      }

      &--number {
        font-size: 5rem;
        color: $dark-text;

        @media (max-width: 400px) {
          font-size: 4rem;
        }
      }
    }
  }
</style>
