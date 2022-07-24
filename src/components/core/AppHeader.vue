<template>
<div>
    <b-img src="https://venturefizz.com/sites/default/files/m/bizzpages/logo/bitsight_logo_0.png" alt="logo" class="home-logo"></b-img>
<span class="arrow arrow-right"></span>
    
    <b-navbar toggleable="lg" type="dark" class="nav-first">
        <b-navbar-brand href="#">&nbsp;</b-navbar-brand>
    </b-navbar>
      <b-navbar toggleable="lg" type="dark" class="nav-second">
        <b-navbar-brand href="#">&nbsp;</b-navbar-brand>
    </b-navbar>
       <b-jumbotron header="GitHub Repos" lead="I hope our code behaves the same way on Monday as it did on Friday.">
  </b-jumbotron>
</div>

</template>
<style scoped>
.jumbotron {
  background-image: url("https://www.bitsight.com/sites/default/files/styles/16_9_large_2x/public/2022/06/07/hero-background.jpg?itok=_04BIMvJ");
  background-size: cover;
}
.display-3 {
    line-height: 1;
    display: inline;
    background-repeat: repeat-x;
    background-image: linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 18%,#ffc20b 18%,#ffc20b 40%,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 100%);
}
.lead {
    margin: 20px 0;
    font-size: x-large;
}
.nav-first {
    background-color: #1A345E !important;
}
.nav-second {
    background-color: #EEF1F5 !important;
}
.home-logo {
    width: 283px;
    position: absolute;
    top: -15px;
    z-index: 999;
    background-color: #FFF;
}
.arrow {
    margin: 23px;
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    position: absolute;
    top: -25px;
    left: 259px;
    z-index: 99;
}
.arrow-right {
    border-top: 59px solid transparent;
    border-bottom: 59px solid transparent;
    border-left: 59px solid #fff;
}
</style>