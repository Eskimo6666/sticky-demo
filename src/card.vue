<template>
    <div class="yearEventBox" ref="container">
        <van-index-anchor :index=cardData.year />
        <van-sticky :container="container" @change="stickyChange">
            <header class="yeartxt">
            <span class="yearTxt" v-if="isSticky">
                <span>当前{{cardData.year}}</span>
                <br/>
                <span v-for="(item,idx) in idxList" :key="idx" @click="handleNavClick(item)">{{item}}</span>
            </span>
            </header>
        </van-sticky>
        <div class="eventBox" v-for="(event,idx) in cardData.content" :key="idx">{{ event }}</div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        cardData: {
            year: '',
            content: []
        },
        idx: null,
        idxList:[]
    },
    data() {
        return {
            isSticky: false
        }
    },
    methods: {
        handleNavClick(item){
            console.log('34',item);
            this.$emit('navCLick',item)
        },
        stickyChange(e) {
            this.isSticky = e
            console.log(e, this.idx, 'sticky change');
        },
    },
    computed: {
        container() {
            return this.$refs.container
        }
    }
}
</script>

<style scoped>
.yearEventBox {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
}
.yearTxt {
    color: blue;
    background-color: red;
}
.eventBox {
    height: 200px;
    background-color: grey;
    padding-top: 20px;
}
</style>
