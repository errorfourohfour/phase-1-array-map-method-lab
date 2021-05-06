const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => {
      const tutorialWords = element.split(' '); 
      const tutorialCap =  tutorialWords.map(tutorialWord => tutorialWord.charAt(0).toUpperCase() + tutorialWord.slice(1));
      let annoyingAnswer = tutorialCap.join(' ');
      return annoyingAnswer;
  })
}

//     let tutorialLower= tutorial.toLowerCase().split(' ');
//     return tutorialLower.charAt(0).toUpperCase()
//   })
// }
// const titleCased = () => {
//   return tutorials.map(tutorials() {
//     //let tutorialLower= tutorial.toLowerCase().split(' ');
//     let tutorialLower = tutorial.toLowerCase().split(' ')
//     return tutorialLower.charAt(0).toUpperCase()
//   })
// }

// const mappedTutorials = tutorials.map(function(tutorial){
//   return tutorial
// })