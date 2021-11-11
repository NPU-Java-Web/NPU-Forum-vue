<template>
<div>
  <div id="title" class="slide header">
    <h1>sonnet</h1>
  </div>

  <div id="slide1" class="slide">
    <div class="title">
      <h1>第一百四十一首
      </h1>
      <p>In faith I do not love thee with mine eyes,
        For they in thee a thousand errors note;
        But `tis my heart that loves what they despise,
        Who in despite of view is pleased to dote.
        Nor are mine ears with thy tongue`s tune delighted;
        Nor tender feeling to base touches prone,
        Nor taste, nor smell, desire to be invited
        To any sensual feast with thee alone.
        But my five wits, nor my five senses can
        Dissuade one foolish heart from serving thee,
        Who leaves unswayed the likeness of a man,
        Thy proud heart`s slave and vassal wretch to be.
        Only my plague thus far I count my gain,
        That she that makes me sin awards me pain.</p>
    </div>
  </div>

  <div id="slide2" class="slide">
    <div class="title">
      <h1>第十二首</h1>
      <p>When I do count the clock that tells the time,
        And see the brave day sunk in hideous night;
        When I behold the violet past prime,
        And sable curls all silver'd o'er with white:
        When lofty trees I see barren of leaves,
        Which erst from heat did canopy the herd,
        And summer's green, all girded up in sheaves,
        Born on the bier with white and bristly beard;
        Then of thy beauty do I question make,
        That thou among the wastes of time must go,
        Since sweets and beauties do themselves forsake,
        And die as fast as they see others grow;
        And nothing 'gainst Time's scythe can make defence
        Save breed, to brave him when he takes thee hence.</p>
    </div>
    <img src="https://lorempixel.com/640/480/abstract/6/">
    <img src="https://lorempixel.com/640/480/abstract/4/">
  </div>

  <div id="slide3" class="slide">
    <div class="title">
      <h1>Slide 3</h1>
      <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
  </div>

  <div id="slide4" class="slide header">
    <h1>The End</h1>
  </div>
</div>
</template>

<script>
export default {
name: "show00"
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Nunito);

html {
  height: 100%;
  overflow: hidden;
}

body {
  margin:0;
  padding:0;
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: Nunito;
}

h1 {
  font-size: 250%
}

p {
  font-size: 140%;
  line-height: 150%;
  color: #333;
}

.slide {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
  transform-style: inherit;
}

img {
  position: absolute;
  top: 50%;
  left: 35%;
  width: 320px;
  height: 240px;
  transform: translateZ(.25px) scale(.75) translateX(-94%) translateY(-100%) rotate(2deg);
  padding: 10px;
  border-radius: 5px;
  background: rgba(240,230,220, .7);
  box-shadow: 0 0 8px rgba(0, 0, 0, .7);
}

img:last-of-type {
  transform: translateZ(.4px) scale(.6) translateX(-104%) translateY(-40%) rotate(-5deg);
}

.slide:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, .7);
}

.title {
  width: 50%;
  padding: 5%;
  border-radius: 5px;
  background: rgba(240,230,220, .7);
  box-shadow: 0 0 8px rgba(0, 0, 0, .7);
}

.slide:nth-child(2n) .title {
  margin-left: 0;
  margin-right: auto;
}

.slide:nth-child(2n+1) .title {
  margin-left: auto;
  margin-right: 0;
}

.slide, .slide:before {
  background: 50% 50% / cover;
}

.header {
  text-align: center;
  font-size: 175%;
  color: #fff;
  text-shadow: 0 2px 2px #000;
}

#title {
  background-image: url("../assets/10.jpg");
  z-index:2;
}

#title h1 {
  transform: translateZ(.25px) scale(.75);
  transform-origin: 50% 100%;

}

#slide1:before {
  background-image:url("../assets/14.png");
  transform: translateZ(-1px) scale(2);
}

#slide2 {
  background-image: url("../assets/12.jpg");
  z-index:2;
}

#slide3:before {
  background-image:url("../assets/13.png");
  transform: translateZ(-1px) scale(2);
}

#slide4 {
  background: #222;
}
</style>
