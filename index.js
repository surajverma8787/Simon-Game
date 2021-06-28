
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(document).keypress(function()
{
  if (!started) {
    $(".title").text("Level " + level);
    nextSequence();
    started = true;
  }

});
  $(".btn").click(function()
  {

          var myclass=this.classList;
          var ch=myclass[1];
          var pkey="."+ch;
          userClickedPattern.push(pkey);
          var ploc=ch[1]+".mp3";
          $(pkey).addClass("pressed");
          setTimeout(function()
        {
          $(pkey).removeClass("pressed");
        },100);
        var aud=new Audio(ploc);
        aud.play();
        checkAnswer(userClickedPattern.length-1);
  });
  function nextSequence()
  {
    userClickedPattern=[];
    level++;
    $(".title").text("Level " + level);
    var a=Math.random()*4;
    a=Math.floor(a)+1;
    var clss=".o"+a;
    $(clss).addClass("pressed");
    setTimeout(function()
  {
    $(clss).removeClass("pressed");
  });
    var loc=a+".mp3";
    $(clss).fadeIn(100).fadeOut(100).fadeIn(100);
    var s=new Audio(loc);
    s.play();
    gamePattern.push(clss);
  }
  function checkAnswer(currentLevel)
  {
    var ok=true;
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
    {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    }
    else{
      $(".title").text("Game Over,Press Any Key to Restart");
      started=false;
      level=0;
      gamePattern=[];
      userClickedPattern=[];
      $("body").addClass("game-over");
      var s=new Audio("wrong.mp3");
      s.play();
      setTimeout(function()
    {
      $("body").removeClass("game-over");
    },100);
    }

  }
