

  $(document).ready( function() {
    // Combining slideshow with Bootstrap and Timers with Conditionals


// TODO: Put links to our images in this image array.
var qimages = [
  {
  qimage: "assets/images/bougainvilleas.jpg", 
  choices: ["bougainvilleas", "hydrangea", "rodedendron"],
  correctAnswer: 0
  },

  {
  qimage: "assets/images/cherry-blossoms.jpg", 
  choices: ["bougainvilleas", "cherry-blossoms", "rodedendron"],
  correctAnswer: 1
  },

  {
  qimage: "assetsimages/dahlia.jpg", 
  choices: ["dahlia", "peony", "daisy"],
  correctAnswer: 0
  },

  {
  qimage: "assets/images/delphinium-larkspur.jpg", 
  choices: ["hydrangea", "delphinium", "larkspark"],
  correctAnswer: 1
  },

  {
  qimage: "assets/images/gladiolus.jpg", 
  choices: ["tiger lily", "hydrangea", "gladiolus"],
  correctAnswer: 2
  },

  {
  qimage: "assets/images/honeysuckle.jpg", 
  choices: ["tulip", "lily", "honeysuckle"],  
  correctAnswer: 2
  },

  {
  qimage: "assets/images/hydrangea.jpg", 
  choices: ["iris", "hydrangea", "bougainvilleas"],
  correctAnswer: 1
  },

  {
  qimage: "assets/images/iris.jpg", 
  choices: ["tiger lily", "hydrangea", "iris"], 
  correctAnswer: 2
  },

  {
  qimage: "assets/images/peony.jpg", 
  choices: ["gerbera daisy", "peony", "cornflower"], 
  correctAnswer: 1
  },

  {
  qimage: "assets/images/rose.jpg",
  choices: ["carnation", "hydrangea", "rose"], 
  correctAnswer: 2
  }];


// Variable showImage will hold the setInterval when we start the slideshow
var showQimage;

// Qcount will keep track of the index of the currently displaying query-picture.
var qcount = 0;

//*** Advance Feature: Later - Introduce Answers *** need logic below for countCorrect and countWrong

//var answerImages = [ , ,]

//Variable showAnswer can hold setTimeout for answer pauses
//var showAnswer;
///*** need logic below for countCorrect and countWrong 
//*** Track answers as correct or wrong ****
var countCorrect = 0;

var countWrong = 0;


    
//  Variable that will hold our setInterval that runs the counter
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our counter object.
var counter = {

  time: 15,
  
  reset: function() {

    counter.time = 0;
    $("#time-left").html("00:00");
    clockRunning = false;

    // Change the "display" div to "00:00."

  },

  start: function() {

      //  Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        // CLEARS THE BINDING - USING INCREMENT WOULD THROW THE BINDING
        intervalId = setInterval(counter.count, 1000); 
        clockrunning = true;

      }

  },
  stop: function() {
      clearInterval(intervalId);

      //set the clock to NOT BE RUNNING
      clockRunning=false;

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.

  },


  count: function() {

    //  TODO: increment time by 1, remember we cant use "this" here.
      counter.time--;
    //  TODO: Get the current time, pass that into the counter.timeConverter function,
    //        and save the result in a variable.
      var currentTime = counter.timeConverter(counter.time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    console.log(currentTime)
    $("#time-left").html(currentTime);
  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "" + seconds;
    }

    if (minutes < 10) {
      minutes = "" + minutes;
    }

    return minutes + "" + seconds;
  }
};
  // showImage integrates image files for the #image-holder div 
// in the 'src' attribute of the img tag.
function showQimage() {
  $("#image-holder").html("<img src=" + qimages[qcount].qimage + " width='300px'>");
}
//next image keeps the slideshow going down the line.
function nextQimage() {

  // Increments the qcount (index of the current feature photo) by 1.
  qcount++;
  if(qcount === qimages.length) {
    qcount = 0;
  }
}
// tie together showImage with nextImage and with automatic setInterval between them to 10 seconds.
  function startSlideshow() {
    console.log("working");
    counter.start();
    // showQimage  = setInterval(nextQimage, 10000);
    showQimage();


  }
//start slideshow automatically
     
         //Use jQuery to run "startSlideshow" when we click the "restart" button at conclusion of quiz
      $("#start-butt").click(startSlideshow);

     
    function stopSlideshow() {

      //retain clearInterval !!
      clearInterval(showQimage);
    };

  });

//GRADE THE ANSWERS SOMEWHERE WITH IF/THEN CONDITONS
// **** radio buttons must populate varied options with one being correct answer, and upon selection and/or timeout, program must count answer as correct or not, and announce so, and provide correct answer if incorrect answer given.-->

// Answer array for sequence of answers.
//function showAnswers() {
 // $("#image-holder").html("<img src=" + answerImages[count] + "width='300px'>");
//}


  



//include inline radio button answers 
//If correct answer, change screen to congratulate player for choosing it. -->
//wrong answers and time outs both count against correct score-->
//If out of time, tell player that time's up and display correct answer.--> 
//Wait a few seconds, then show the next question.-->
//If player chooses wrong answer, tell player and then display the correct answer.-->
//Wait a few seconds, then show the next question. -->
//the final screen shows the number of correct answers, incorrect answers, above button to restart the game-->


