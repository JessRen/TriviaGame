// Combining timers with Bootstrap and Conditionals

  $('#start').on('click',function() {
      $('#start').remove();
      game.loadQuestion();
  })

  $(document).on('click', '.answer-button', function(e) {
      game.clicked(e);
  })  

  $(document).on('click', '#reset', function(){
    game.reset();
  })

// These image arrays include the query image, array of answer choices to present, and the correctAnswer
var questions = [
  {
  question: "assets/images/bougainvilleas.jpg", 
  choices: ["bougainvilleas", "hydrangea", "rhododendron"],
  correctAnswer: "bougainvilleas",
  },

  {
  question: "assets/images/cherry-blossoms.jpg", 
  choices: ["bougainvilleas", "cherry-blossoms", "rhododendron"],
  correctAnswer: "cherry-blossoms",
  },

  {
  question: "assets/images/dahlia.jpg", 
  choices: ["dahlia", "peony", "daisy"],
  correctAnswer: "dahlia",
  },

  {
  question: "assets/images/delphinium-larkspur.jpeg", 
  choices: ["hydrangea", "delphinium", "larkspark"],
  correctAnswer: "delphinium",
  },

  {
  question: "assets/images/gladiolus.jpg", 
  choices: ["tiger lily", "hydrangea", "gladiolus"],
  correctAnswer: "gladiolus",
  },

  {
  question: "assets/images/honeysuckle.jpg", 
  choices: ["tulip", "lily", "honeysuckle"],  
  correctAnswer: "honeysuckle",
  },

  {
  question: "assets/images/hydrangea.jpg", 
  choices: ["iris", "hydrangea", "bougainvilleas"],
  correctAnswer: "hydrangea",
  },

  {
  question: "assets/images/iris.jpeg", 
  choices: ["tiger lily", "hydrangea", "iris"], 
  correctAnswer: "iris",
  },

  {
  question: "assets/images/peony.jpg", 
  choices: ["gerbera daisy", "peony", "cornflower"], 
  correctAnswer: "peony",
  },

  {
  question: "assets/images/rose.jpeg",
  choices: ["carnation", "hydrangea", "rose"], 
  correctAnswer: "rose"
  }];


var game = {
    questions:questions,
    currentQuestion:0,
    counter:16,
    correct:0,
    incorrect:0,
    unanswered:0,

    countdown: function(){
        game.counter--;
        $('#time-left').html(game.counter);
        if(game.counter <= 0){
          console.log("Time Up");
          game.timeUp();
        }
    },

    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $("#time-left").html("<span id='counter'>15</span>");
        $("#field").html("<img src= " + questions[game.currentQuestion].question + ">");
        
        
        for(var i = 0; i < questions[game.currentQuestion].choices.length; i++) {
          $("#field").append('<button class="answer-button" class="btn btn-primary" '+ i +' " data-name="'+ questions[game.currentQuestion].choices[i]+'"> ' + questions[game.currentQuestion].choices[i] + '</button>');
        }
    },

    nextQuestion: function(){
        game.counter = 15;
        $('#time-left').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },

    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#field").html('<h2>Time Up! </h2>');
        $("#field").append('<h3> The Correct Answer Is: '+ questions[game.currentQuestion].correctAnswer + '</h3>');
        if(game.currentQuestion==questions.length - 1) {
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }

    },

    results: function(){
      clearInterval(timer);
      $('#field').html("<h2>Complete!</h2>");
      $('#field').append("<h3>Correct: "+ game.correct + "</h3>");
      $('#field').append("<h3>Incorrect: "+ game.incorrect + "</h3>");
      $('#field').append("<h3>Unanswered: "+ game.unanswered + "</h3>") 
      $('#field').append("<button id='reset' </button>")
    },

    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
          game.answeredCorrectly();
        } else {
          game.answeredIncorrectly();
        }
    },

    answeredCorrectly: function(){
        console.log("Correct-a-mundo");
        clearInterval(timer);
        game.correct++;
        $('#field').html('<h2>Correct-a-mundo. Way to know.</h2>');
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },

    answeredIncorrectly: function(){
        console.log("Not Correct");
        clearInterval(timer);
        game.incorrect++;
        $('#field').html('<h2>No-Go!</h2>');
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3 * 1000);
        }   else {
              setTimeout(game.nextQuestion,3*1000);
        }
    },

    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion = 0;

    }
  }


