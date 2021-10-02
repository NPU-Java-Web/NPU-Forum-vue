<template>
  <body><section class="intro">

    <h2>Introduction</h2>

    <div class="plane"><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/73512/ExgUbxd.png'>
    </div>



    <!--Loader-->
    <div class="loader">
    <span class="bar">
      <i class="animate"></i>
    </span>
      <span class="tick animate">&#10004;</span>
    </div>

  </section>
  <section class="content">
    <article>
      <h2>Content</h2>
      <p style="font-size: 25px;color: #4c2525 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat ea impedit voluptatum consectetur voluptatem ratione natus at ut voluptate iure veniam. Officia cumque explicabo facere minus ab in porro maiores. Dignissimos est animi quisquam omnis odio harum quasi error facilis quae veritatis id quidem ab amet inventore soluta blanditiis autem ex aspernatur laudantium aut velit a architecto voluptatem tempore deleniti. Accusantium aut magni sunt esse saepe suscipit numquam ex voluptates aliquam ad neque vero amet unde alias libero quasi quaerat odit debitis quis earum! Nisi molestias quis adipisci ipsam ducimus ipsum minus quidem accusamus excepturi perferendis! Unde sed odit!</p>

    </article>
  </section></body>

</template>

<script>
export default {
  name: "show01"
}
</script>

<style scoped>
@import url('https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html{
  letter-spacing: 1px;
  line-height: 1.4;
  font-size: 100%;
  -webkit-backface-visibility: hidden;
  /*-webkit-transition: translate3d(0,0,0);*/
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  position: relative;
  background: #f2f2f2;/*#e74c3c*/
}
section {
  width: 100%;
  height: 100%;
  position: relative;
}
.intro h2 {
  position: absolute;
  width: 100%;
  text-align: center;
  font: 40px/60px Arial;
  color: #fff;
  top: 50%;
  margin-top: -30px;
  text-shadow: 0 4px 2px rgba(0, 0, 0, 0.3);
  animation: slidein 30s;
}

.intro h2:nth-of-type(1) { animation: slidein 1s; }

@keyframes slidein {
  0% { opacity: 0;}
  100%   { opacity: 1;}
}



.intro   {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/73512/PrxdvoA.jpg') no-repeat fixed center center / cover #eee;
  overflow: hidden;
  animation: head 2s linear infinite;
}
.content {
  background-image: url("../assets/8.png");
  background-size:cover;
  background-attachment:fixed;
  border-top: 6px double #ddd;}

.loader {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 150px;
  top: 85%;
}
.loader .bar {
  display: block;
  background: #bbb;
  height: 10px;
  border-radius: 5px;
  /*box-shadow: inset 1px 1px 0px #999, 1px 1px 0 #ddd;*/
  overflow: hidden;
  border: 2px solid #ddd;
}
.loader .bar i {
  display: block;
  background: #fff;
  height: 8px;
  width: 0px;
  /*box-shadow: inset 1px 1px 0 #c0392b;*/
  border-radius: 5px;
  transition: width 1s linear;
  transition-delay: 1s;
}
.loader .tick {
  display: block;
  position: absolute;
  left: 100%;
  top: 15px;
  margin: -7px 0 0 7px;
  text-align: center;
  font-size: 20px;
  color: #fa4242;
  opacity: 0;
  transition: opacity 0.25s, top 0.25s;
  transition-delay: 2s;
}

.bar i.run {
  width: 100%;
}
.tick.run {
  top: 0;
  opacity: 1;
}



article {
  padding-top: 3em;
  margin: auto;
  max-width: 660px;
}

/*Plane animation*/
.plane {
  animation: plane-1 16s infinite linear;
  transform: translate(0);
  z-index: 0;
  position: absolute;
  bottom: 20%;
}

@media (max-width: 640px) {
  .plane {
    left: 25%;
  }
}

@media (min-width: 641px) {
  .plane {
    left: 36%;
  }
}

@keyframes plane-1 {
  0% {
    opacity: 0;
    transform: translate(-120px, 40px);
  }
  5% {
    opacity: 1;
  }
  86% {
    opacity: 1;
  }
  88% {
    opacity: 0.4;
  }
  90% {
    opacity: 0;
    transform: translate(380px, 10px) rotate(-5deg);
  }
  100% {
    opacity: 0;
    transform: translate(-120px, 0px);
  }
}
</style>
