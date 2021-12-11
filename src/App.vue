<template>
  <div id="app">
    <van-index-bar ref="barIndex" :index-list="indexList">
      <card
        v-for="(item,idx) in eventList"
        :key="idx"
        :idx="idx"
        :idxList='indexList'
        :ref="containerRef(idx)"
        :cardData="item"
        @navCLick='navClick'
      />
    </van-index-bar>
    

    <button @click="jumpTarget">jump2021</button>

    <!-- <div class="yearEventBox" v-for="(item,idx) in eventList" :key="idx" :ref='containerRef(idx)'>
        <van-sticky :container="container(idx)" @change="stickyChange">
          <header class="yeartxt">{{ item.year }}</header>
        </van-sticky>
        <div class="eventBox" v-for="(event,idx) in item.content" :key="idx">{{ event }}</div>
    </div>-->
    <!-- <van-button type="danger">危险按钮</van-button> -->
    <!-- <div ref="container" style="height: 150px;">
      <van-sticky :container="container">
        <van-button type="warning">指定容器</van-button>
      </van-sticky>
    </div>-->
  </div>
</template>

<script>
import card from './card.vue'
export default {
  name: 'App',
  components: { card },
  data() {
    return {
      currentYear: 2019,
      eventList: [
        { year: 2019, content: [1, 2, 3, 4] },
        { year: 2020, content: [1, 2,] },
        { year: 2021, content: [1, 2, 3, 4, 5, 6] },
      ],
      indexList: [2019, 2020, 2021]
    }
  },
  methods: {
    navClick(year){
      console.log(year, 'year---76');
      this.$refs.barIndex.scrollTo(`${year}`)
    },
    jumpTarget(){
      console.log(this.$refs.barIndex);
      this.$refs.barIndex.scrollTo('2020')
    },
    stickyChange(e) {
      console.log(e, 'sticky change');
    },
    containerRef(idx) {
      return `container_${idx}`
    },
    container(idx) {
      return this.$refs[`container_${idx}`]
    }
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* overflow: scroll; */
  color: #2c3e50;
}
.van-index-bar{
  background-color: #fff;
  display: none;
}
header {
  background-color: red;
  color: aqua;
  font-size: 20px;
}
.contentBox {
}
.yearEventBox {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
}
.yeartxt {
  color: blue;
}
.eventBox {
  height: 200px;
  background-color: grey;
  padding-top: 20px;
}
</style>
