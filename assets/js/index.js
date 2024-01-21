const body = document.querySelector('body')
// theme change
const headerThemeInput = document.querySelector('.header__theme__input');
const bgImg = document.querySelectorAll('.bg__img');
const bgImgDark = document.querySelectorAll('.bg__img__dark');
const checkInput = document.querySelector('#check');
//header right side
const headerLeft = document.querySelector('.header__left');
// step2
let rightContent;
// button block
let buttonBlock;
let wrongMessageBlock=document.querySelector('.wrong__message__block')

// Answer Block
let rightContentBox = document.querySelector('.right__content__box');
let quizResult=0;
let proqressBar=0;

// ! Data
let data = [
     {
          id: "1",
          name: "HTML",
          img: "./assets/images/step1__html__logo.svg",

          questions: [
               {
                    id: "123",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswerID: "3",
                    answer: [
                         {
                              id: "1",
                              variant: "A",
                              text: "4.5 : 1"
                         },
                         {
                              id: "2",
                              variant: "B",
                              text: "1.2 : 3"
                         },
                         {
                              id: "3",
                              variant: "C",
                              text: "2.5 : 1"
                         },
                         {
                              id: "4",
                              variant: "D",
                              text: "2.6 : 3"
                         }
                    ]
               },
               {
                    id: "126",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level ?",
                    rightAnswerID: "3",
                    answer: [
                         {
                              id: "1",
                              variant: "A",
                              text: "4.1 : 1"
                         },
                         {
                              id: "2",
                              variant: "B",
                              text: "3.2 : 3"
                         },
                         {
                              id: "3",
                              variant: "C",
                              text: "2.9 : 2"
                         },
                         {
                              id: "4",
                              variant: "D",
                              text: "3.6 : 3"
                         }
                    ]
               }
          ]
     },
     {
          id: "2",
          name: "CSS",
          img: "./assets/images/step1__css__logo.svg",
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios defines the ?",
                    rightAnswerID: "2",
                    answer: [
                         {
                              id: "1",
                              variant: "A",
                              text: "4.5 : 1"
                         },
                         {
                              id: "2",
                              variant: "B",
                              text: "1.2 : 3"
                         },
                         {
                              id: "3",
                              variant: "C",
                              text: "2.5 : 1"
                         },
                         {
                              id: "4",
                              variant: "D",
                              text: "2.6 : 3"
                         }
                    ]
               }
          ]
     },
     {
          id: "3",
          name: "Javascript",
          img: "./assets/images/step1__js__logo.svg",
          rightAnswerID: "4",
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios?",
                    answer: [
                         {
                              id: "1",
                              variant: "A",
                              text: "4.5 : 1"
                         },
                         {
                              id: "2",
                              variant: "B",
                              text: "1.2 : 3"
                         },
                         {
                              id: "3",
                              variant: "C",
                              text: "2.5 : 1"
                         },
                         {
                              id: "4",
                              variant: "D",
                              text: "2.6 : 3"
                         }
                    ]
               }
          ]
     },
     {
          id: "4",
          name: "Accessibility",
          img: "./assets/images/step1__accessibility__logo.svg",
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswerID: "1",
                    answer: [
                         {
                              id: "1",
                              variant: "A",
                              text: "4.5 : 1"
                         },
                         {
                              id: "2",
                              variant: "B",
                              text: "1.2 : 3"
                         },
                         {
                              id: "3",
                              variant: "C",
                              text: "2.5 : 1"
                         },
                         {
                              id: "4",
                              variant: "D",
                              text: "2.6 : 3"
                         }
                    ]
               }
          ]
     }
]
let params = getCurrentUrl();

// ! Action Function
function updateUrlWithParams(type,newParams) {
     let url = new URL(window.location.href);
     if(type=="update"){
          Object.entries(newParams).forEach(([key, value]) => url.searchParams.set(key, value))
          newParams.result?generateResultPage(newParams.categoryID):generateQuestionPage(newParams.categoryID, newParams.questionID)
          
          
     }else if(type=="deleted"){
          url.search="";
          generateHomePage()
     }
     window.history.replaceState({}, '', url)
}
// ! generate function
function generateAnswerData(a) {
     let dataHtml = '';
     a.map((item) => {
          dataHtml += ` 
          <li  data-id="${item.id}"class="main__right__content align__center">
          <div class="main__right__content__abcd__box center">
          <p class="main__right__content__abcd" >${item.variant}</p>
       </div>
       <p class="main__right__content__text">${item.text}</p>
     </li>
       `
     })
     rightContentBox.innerHTML = dataHtml
     callAnswerOrCategory()

}
function generateCategoryData(a) {
     let dataHtml = '';
     a.map((item) => {
          dataHtml += ` 
          <li category-data-id="${item.id}"class="main__right__content align__center hover margin">
          <img src="${item.img}" alt="" />
          <p>${item.name}</p>
        </li>
       `
     })
     rightContentBox.innerHTML = dataHtml
     callAnswerOrCategory('category')
}
function generateResultPage(catID) {
     let category=data.find(item=>item.id==catID)
     let totalQuiz=category?.questions?.length
     
          let questionBlock = document.querySelector('.main__left__box');
          questionBlock.innerHTML = `
          <p class="step3__main__left__first">Question 6 of 10</p>
          <h2 class="step3__main__left__second">
            You scored...
          </h2>
     `
          buttonBlock = document.querySelector('.main__right__button__box')

          buttonBlock.innerHTML = `
     <button id="playAgain"class="main__right__button">Play Again</button>

     `

     rightContentBox.innerHTML=`   <li class="step3__main__right__content dp__column align__center">
     <div class="step3__right__content__abcd__box">
         <div class="header__left align__center">
           <div class="header__left__img__box center">
             <img
               src="./assets/images/step1__accessibility__logo.svg"
               alt=""
               class="header__left__img"
             />
           </div>
           <p class="header__left__text">Accessibility</p>
         </div>
     </div>
     <p class="step3__right__content__second">${quizResult}</p>
     <p class="step3__right__content__third">out of ${totalQuiz}</p>
   </li>`
     let playAgain=document.querySelector("#playAgain")
     playAgain.addEventListener('click',(e)=>{
     e.preventDefault();
     updateUrlWithParams('deleted')
     quizResult=0;
     })
}
function generateHomePage(){
     generateCategoryData(data)
     let questionBlock = document.querySelector('.main__left__box');
     questionBlock.innerHTML = `
     <p class="step1__main__left__first">Welcome to the</p>
     <h1 class="step1__main__left__second">Frontend Quiz!</h1>
     <p class="step1__main__left__third">Pick a subject to get started.</p>
     `
     buttonBlock = document.querySelector('.main__right__button__box')
     buttonBlock.innerHTML = ``
     let headerLeft = document.querySelector('.header__left');
     headerLeft.innerHTML = ``
     }
function generateQuestionPage(catID, questionID) {
     let question = getQuestionByIDs(catID, questionID)
     callProqressBar(catID)
     if (question) {
          generateAnswerData(question.answer)
          let questionBlock = document.querySelector('.main__left__box');
          questionBlock.innerHTML = `
     <p class="step2__main__left__first">Question 6 of 10</p>
     <h2 class="step2__main__left__second">
     ${question.text}
     </h2>
     <div class="step2__main__left__bar__box">
       <p class="step2__main__left__bar" style="width: ${proqressBar}%;"></p>
     </div>
     `
          buttonBlock = document.querySelector('.main__right__button__box')

          buttonBlock.innerHTML = `
     <button id="answerSubmitBtn"class="main__right__button">Submit Answer</button>

     `
          let category = data.find(item => item.id == catID)
          let headerLeft = document.querySelector('.header__left');
          headerLeft.innerHTML = `
     <div class="header__left__img__box center">
               <img
                 src="${category.img}"
                 alt=""
                 class="header__left__img"
               />
             </div>
             <p class="header__left__text">${category.name}</p>
     `
     callAnswerOrCategory()
     checkAnswer(question,catID)
     } else {
          updateUrlWithParams("deleted")
     }
}
// ! Call Function
function callProqressBar(catID){
let category=data.find(item=>item.id==catID)
let totalQuiz=category.questions.length
proqressBar+=100/totalQuiz
}
function callAnswerOrCategory(type) {
     rightContent = document.querySelectorAll('.main__right__content');
     rightContent.forEach(item => {
          if (type == 'category') {
               item.addEventListener('click', handleCategoryClick)
          } else {
               item.addEventListener('click', answerClick)
          }

     })

}

//! Get Function
function getCurrentUrl() {
     let urlParams = new URLSearchParams(window.location.search);
     let categoryID = urlParams.get('categoryID');
     let questionID = urlParams.get('questionID');
     let result = urlParams.get('result');
     let pageName = window.location.pathname.split('/').pop();
     return {
          categoryID: categoryID,
          questionID: questionID,
          result: result,
          pageName: pageName
     }
}

function getFirstQuestionIDByCategory(catID) {
     let category = data.find(item => item.id === catID);
     if (category && category.questions && category.questions.length > 0) {
          return category.questions[0].id
     } else {
          return null
     }
}
function getQuestionByIDs(catID, questionID) {
     let category = data.find(item => item.id == catID);
     if (category && category.questions && category.questions.length > 0) {
          let question = category.questions.find(q => q.id == questionID)
          return question
     } else {
          return null
     }
}
function getNextQuestion(catID,currentQuestionID){
     let category=data.find(item=>item.id==catID)
     let currentQuestionIndex=category.questions.findIndex(q=>q.id===currentQuestionID)
     if(!category || !category.questions){
          return null
     }
     if(currentQuestionIndex==-1||currentQuestionIndex==category.questions.length-1){
     return null;
     } 
     
     return category.questions[currentQuestionIndex+1]
     
}
// ! click
function handleCategoryClick(e) {
     let catID = e.target.getAttribute('category-data-id')
     let firstQuestionID = getFirstQuestionIDByCategory(catID)
     let newParams = {
          categoryID: catID,
          questionID: firstQuestionID
     }
     updateUrlWithParams("update",newParams)
}
function answerClick(e) {
     rightContent = document.querySelectorAll('.main__right__content');
     
     rightContent.forEach(item => {
          item.classList.remove('selected')
     })
     e.target.classList.add('selected')

}
function checkAnswer(questionData,catID){
let answerSubmitBtn=document.querySelector('#answerSubmitBtn')
answerSubmitBtn?.addEventListener('click',(e)=>{
     e.preventDefault();
     let selectedAnswer= document.querySelector('.main__right__content.selected');
     let rightAnswerID=questionData.rightAnswerID
     let selectedID=selectedAnswer?.getAttribute('data-id');
     let rightElement=document.querySelector(`.main__right__content[data-id="${rightAnswerID}"]`)
     let rightClassElement=document.querySelector(`.main__right__content.right`)
     let nextQuestion=getNextQuestion(catID,questionData.id)
     if(!rightClassElement){ 
     console.log(nextQuestion);
     if(selectedID){
          wrongMessageBlock.innerHTML=``
          if(selectedID==rightAnswerID){
               selectedAnswer.classList.add('right')
               quizResult++
               
          }else{
               selectedAnswer.classList.add('wrong')
               rightElement.classList.add('right')
          }
          e.target.innerHTML=nextQuestion?"Next Question":"Submit Answer"
     }else{
          wrongMessageBlock.innerHTML=`<i class="fa-regular fa-circle-xmark"></i>
          <p class="wrong__message">Please select an answer</p>`
     }
}
else{
if(nextQuestion){
     updateUrlWithParams("update",{categoryID:catID,questionID:nextQuestion.id})
}else{
     updateUrlWithParams("update",{categoryID:catID,questionID:questionData.id,result:"true"})
     
}
}
})
}
headerThemeInput.addEventListener('click', (e) => {
     if (e.target.checked) {
          localStorage.setItem('theme', 'dark')
     } else {
          localStorage.setItem('theme', 'light')
     }
     body.classList.toggle("dark");
})
// ! window onload
window.onload = function () {
     let pageTheme = localStorage.getItem('theme')
     if (pageTheme == 'dark') {
          body.classList.add('dark')
          headerThemeInput.checked = true
     } else {
          body.classList.remove('dark')
     }
}




if (params.questionID && params.categoryID && !params.result) {
     generateQuestionPage(params.categoryID,params.questionID)
}
if (params.questionID && params.categoryID && params.result) {
     generateResultPage()
}
if (!params.questionID && !params.categoryID) {
     generateCategoryData(data)
     generateHomePage()
}



