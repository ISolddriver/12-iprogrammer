<template>
  <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapState({
        direction: state => state.mutations.direction
      })
    }
  }
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  
</style>
