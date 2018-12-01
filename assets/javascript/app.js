
    var questions = [{
        question: "How old was Judy Garland when she filmed the The Wizard of Oz?",
        choices: [12, 14, 16, 18],
        correctAnswer: 3,
    },
    {
        question: "Who played the Cowardly Lion?",
        choices: ["Jack Haley",  "Gene Kelly", "Bert Lahr","Humphry Bogart"],
        correctAnswer: 3,
    },

    {
        question: "When was the Wizard of Oz filmed?",
        choices:[1936, 1945, 1928, 1939],
        correctAnswer: 4,
    },
    {
        question: "Who played the Tin Man?",
        choices: ["Fred Astaire", "Jack Haley", "Ray Bolger", "Mickey Rooney"],
        correctAnswer: 2,
    },
    {
        question: "How many Munchkins are in the Wizard of OZ?",
        choices: [300, 124, 170, 230],
        correctAnswer: 2,
    },
    {
        question: "Who played the Scarecrow?",
        choices: ["Bert Lahr", "Frank Morgan","Ray Bolger", "Clark Gable", ],
        correctAnswer: 3,
    },
    {
        question: "What is the signature chant Dorothy, The Scarecrow, and The Tin Man say when walking through the forest?",
        choices: ["Lions and tigers and chipmunks, oh my!", "Lions and tigers and giraffs, oh my!", "Bengals and ligers and rats, oh my!", "Lions and tigers and bears, oh my!"],
        correctAnswer: 4,
    },
    {
        question: "Which wicked witch did Dorothy's house fall on?",
        choices: ["East", "North", "South", "West"],
        correctAnswer: 1,
    },
    {
        question: "What does the Wicked Witch of the West say after Dorothy throws the water on her?",
        choices: ["I'm drenched! I'm drenched! I'm drenched!", "I'm melting! I'm melting! I'm melting!", "Now I have to change!", "I'm drowning! I'm drowning! I'm drowning!"],
        correctAnswer: 2,
    },
    {
        question: ["How old is the munchkin that hands Dorothy the lollipop?"],
        choices: [12, 18, 14, 15 ],
        correctAnswer: 2,
    },
    ];



        //loop through the questions array and display them to the screen with their choices
        for (var i = 0; i < questions.choices; i++){

            var answerButton = $('<button>');
            answerButton.text(choices[i]);
            answerButton.attr('data-id', i);
            $('#answer_div').append('button');
        }

        //when an answer is chosen it needs to go to the coorect answers count or inncorrect answers count




    










