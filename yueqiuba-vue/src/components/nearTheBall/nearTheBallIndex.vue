<template>
  <div class="main1">
    <div class="main2">
      <div class="yellowDiv">yellow</div>
      <div class="main3">
        <div class="redDiv">
          <span class="redSpan">
             red
          </span>
        </div>
        <div class="pinkDiv">pink</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style lang="less" scoped>
.main1 {
  margin: 0 auto;
  border: 1px solid red;
  width: 1800px;
  height: 800px;
}

.main2 {
  position: relative;
  margin: 0 auto;
  border: 1px solid black;
  width: 60%;
  height: 100%;
}

.main3 {
  float: left;
  width: 30%;
  height: 100%;
}

.yellowDiv {
  float: left;
  background: yellow;
  width: 70%;
  height: 100%;
}

.redDiv {
  margin-left: 10px;
  background: red;
  width: 100%;
  height: 30%;
}

.pinkDiv {
  margin-top: 10px;
  margin-left: 10px;
  background: pink;
  width: 100%;
  height: 30%;
}

.redSpan {
  top:0px;
  left:0px;
}

//.MainCard {
//  width: 50%;
//  float: left;
//}
//
//.rightCard {
//  width: 25%;
//  float: left;
//  height: 300px;
//  margin-left: 10px;
//}
//
//.firstRightCard {
//  height: 300px;
//}
//
//.secondRightCard {
//  height: 300px;
//  margin-top: 10px;
//}

</style>
