<template>
  <div class="game">
    <template v-if="!gameStart">
      <div class="tokens">
        <Token
          v-for="tokenInfo in tokens"
          :key="tokenInfo.name"
          v-bind="tokenInfo"
          @click="startGame(tokenInfo.name);"
        />
      </div>
      <RulesButton />
      <BackButton />
    </template>
    <Result v-else :player-token="playerToken" @reset="gameStart = false"/>
  </div>
</template>

<script>
  /* eslint-disable global-require */

  import BackButton from '@/components/Buttons/Back.vue';
  import RulesButton from '@/components/Buttons/Rules.vue';
  import Result from '@/components/Result/Result.vue';
  import Token from '@/components/Token/Token.vue';
  import { TOKENS_LIST } from '@/utils';

  const {
    ROCK,
    PAPER,
    SCISSORS,
    LIZARD,
    SPOCK,
  } = TOKENS_LIST;

  export default {
    name: 'Game',
    components: {
      BackButton,
      RulesButton,
      Result,
      Token,
    },
    data() {
      return {
        tokens: [
          { name: SCISSORS, src: require('@/assets/icon-scissors.svg') },
          { name: PAPER, src: require('@/assets/icon-paper.svg') },
          { name: ROCK, src: require('@/assets/icon-rock.svg') },
          { name: LIZARD, src: require('@/assets/icon-lizard.svg') },
          { name: SPOCK, src: require('@/assets/icon-spock.svg') },
        ],
        playerToken: '',
        gameStart: false,
      }
    },
    methods: {
      startGame(token) {
        this.playerToken = token;
        this.gameStart = true;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    width: 100%;

    .tokens {
      display: grid;
      grid-template-areas:
        ". . . scissors scissors scissors . . ."
        "spock spock spock. . . paper paper paper"
        ". lizard lizard lizard . rock rock rock .";
      grid-template-columns: repeat(auto-fit, minmax(30px, auto));
      grid-template-rows: 120px 160px 120px;
      grid-column-gap: 15px;
      background: url('~@/assets/bg-pentagon.svg') no-repeat 50% 50%/90%;

      @media (max-width: 400px) {
        grid-template-rows: 75px 105px 85px;
        grid-column-gap: unset;
        grid-row-gap: 10px;
      }
    }
  }
</style>
