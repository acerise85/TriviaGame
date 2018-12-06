
$(document).ready(function(){
    //Questions for trivia game
    var questions = [{
        question: "How old was Judy Garland when she filmed the The Wizard of Oz?",
        choices: ["12", "14", "16", "18"],
        correctAnswer: "16",
    },
    {
        question: "Who played the Cowardly Lion?",
        choices: ["Jack Haley",  "Gene Kelly", "Bert Lahr","Humphry Bogart"],
        correctAnswer: "Bert Lahr",
    },

    {
        question: "When was the Wizard of Oz filmed?",
        choices:["1936", "1945", "1928", "1939"],
        correctAnswer: "1939",
    },
    {
        question: "Who played the Tin Man?",
        choices: ["Fred Astaire", "Jack Haley", "Ray Bolger", "Mickey Rooney"],
        correctAnswer: "Jake Haley",
    },
    {
        question: "How many Munchkins are in the Wizard of OZ?",
        choices: ["300", "124", "170", "230"],
        correctAnswer: "124",
    },
    {
        question: "Who played the Scarecrow?",
        choices: ["Bert Lahr", "Frank Morgan","Ray Bolger", "Clark Gable", ],
        correctAnswer: "Ray Bolger",
    },
    {
        question: "What is the signature chant Dorothy, The Scarecrow, and The Tin Man say when walking through the forest?",
        choices: ["Lions and tigers and chipmunks, oh my!", "Lions and tigers and giraffs, oh my!", "Bengals and ligers and rats, oh my!", "Lions and tigers and bears, oh my!"],
        correctAnswer:  "Lions and tigers and bears, oh my!",
    },
    {
        question: "Which wicked witch did Dorothy's house fall on?",
        choices: ["East", "North", "South", "West"],
        correctAnswer: "East",
    },
    {
        question: "What does the Wicked Witch of the West say after Dorothy throws the water on her?",
        choices: ["I'm drenched! I'm drenched! I'm drenched!", "I'm melting! I'm melting! I'm melting!", "Now I have to change!", "I'm drowning! I'm drowning! I'm drowning!"],
        correctAnswer: "I'm melting! I'm melting! I'm melting!",
    },
    {
        question: "How old is the munchkin that hands Dorothy the lollipop?",
        choices: ["12", "18", "14", "15" ],
        correctAnswer: "18",
    },
    ];

    //score variables
    var right = 0;
    var wrong = 0;

        //loop through the questions array and display one question at a time
        var index = 0;
        function nextQuestion(){
            $('#currentQuestion').html(questions[index].question);
            $('#currentChoices').empty();
            for (var i = 0; i < questions[index].choices.length; i++){
                //button list creation for answer choices
                var newChoice = $('<button type="button" id="buttons" class="btn btn-success"></button>');
                $("div").append("<ul></ul>");
                //for loop to create as many answer buttons as needed for user to choose from
            for(var i in questions[index].choices.length) {
                var li = "<li>";
                 $("ul").append(li.concat(questions[index].choices[i]))
            }

                newChoice.text(questions[index].choices[i]);

                $('#currentChoices').append(newChoice);

            }
        }
        nextQuestion();
        //on click event to chose an answer and advance to next question
        $(document).on('click','.btn',function(){
            var value = $(this).text();
            console.log(value);
            //for loop to see if user chose correct answer
            if(value === questions[index].correctAnswer){
                //if correct answer add 1 to right questions answered and play right guess audio
                var audioElement = document.createElement("audio");

                audioElement.setAttribute("src", "./assets/images/oz6.mp3");

                audioElement.play();
                right++;
                //delay alert so audio will play
                setTimeout(function(){alert("you are right")},1000);
                $('#right').text(right);
                
            }
            //else answer is wrong and add one to wrong answer
            else{
                //if correct answer add 1 to wron questions answered and play wrong guess audio
                var audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "./assets/images/pretty.mp3");
                audioElement.play();
                wrong++;
                setTimeout(function(){alert("You are wrong")},1000);
                $('#wrong').text(wrong);
                
            }
            //advance the choices to next array along with the correct question
            index++;
            nextQuestion();
        })
        //game timer to count down from 1:40, which is 10 seconds per question
        var time = 100;
        var minutes = Math.floor( time / 60);
        var seconds = time - (minutes * 60);
        $('#gameTimer').html("Time Left: " + minutes + " : " + seconds);
        var gameTimer = setInterval(function(){
            time--;
             minutes = Math.floor( time / 60);
             seconds = time - (minutes * 60);
            $('#gameTimer').html("Time Left: " + minutes + " : " + seconds);
            
            console.log(time)
            //alert game over when timer reaches 0
            if(time === 0){
                alert("Game Over!")
                clearInterval(gameTimer);
            }
                
        },1000)
        
})       
        
        




    










