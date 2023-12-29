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

// Answer Block
const rightContentBox = document.querySelector('.right__content__box');
// ! Data
let data = [
     {
          id: "1",
          name: "HTML",
          img: "./assets/images/step1__html__logo.svg",
          rightAnswerID: "3",
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
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
          id: "2",
          name: "CSS",
          img: "./assets/images/step1__css__logo.svg",
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
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
          questions: [
               {
                    id: "1",
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
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
let params=getCurrentUrl();
// ! Action Function
function updateUrlWithParams(newParams){
     let url=new URL(window.location.href)
     Object.entries(newParams).forEach(([key,value])=>url.searchParams.set(key,value))
     window.history.replaceState({},'',url)
     generateQuestionPage(newParams.categoryID,newParams.questionID)
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
   getAnswerOrCategory()
     
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
     getAnswerOrCategory('category')
     
}
function generateQuestionPage(catID,questionID){
let question=getQuestionByIDs(catID,questionID)
generateAnswerData(question.answer)
let questionBlock=document.querySelector('.main__left__box');
questionBlock.innerHTML=`
<p class="step2__main__left__first">Question 6 of 10</p>
<h2 class="step2__main__left__second">
${question.text}
</h2>
<div class="step2__main__left__bar__box">
  <p class="step2__main__left__bar" style="width: 20%;"></p>
</div>
`
let buttonBlock=document.querySelector('.right__content__box')
buttonBlock.innerHTML+=`
<button class="main__right__button">Submit Answer</button>
`
let headerLeft=document.querySelector('.header__left');
headerLeft.innerHTML=`
<div class="header__left__img__box center">
          <img
            src="./assets/images/step1__accessibility__logo.svg"
            alt=""
            class="header__left__img"
          />
        </div>
        <p class="header__left__text">Accessibility</p>
`
getAnswerOrCategory()
}
//! Get Function
function getCurrentUrl(){
let urlParams=new URLSearchParams(window.location.search);
let categoryID=urlParams.get('categoryID');
let questionID=urlParams.get('questionID');
let pageName=window.location.pathname.split('/').pop();
return{
categoryID:categoryID,
questionID:questionID,
pageName: pageName
}

}
function getAnswerOrCategory(type){
     rightContent=document.querySelectorAll('.main__right__content');
     rightContent.forEach(item=>{
          if(type=='category'){
               item.addEventListener('click',handleCategoryClick)
          }else{
               item.addEventListener('click',answerClick)
          }

     })

}
function getFirstQuestionIDByCategory(catID){
     let category=data.find(item=>item.id===catID);
     if(category && category.questions && category.questions.length>0){
          return category.questions[0].id
     }else{
     return null
     }
}
function getQuestionByIDs(catID,questionID){
let category=data.find(item=>item.id==catID);
if(category && category.questions && category.questions.length>0){
let question=category.questions.find(q=>q.id==questionID)
return question
}else{
return null
}
}
// ! click
function handleCategoryClick(e){
     let catID=e.target.getAttribute('category-data-id')
     let firstQuestionID=getFirstQuestionIDByCategory(catID)
     let newParams={
          categoryID:catID,
          questionID:firstQuestionID
          }
          updateUrlWithParams(newParams)
}
function answerClick(e) {
     rightContent = document.querySelectorAll('.main__right__content');
     rightContent.forEach(item => {
          item.classList.remove('selected')
     })
     e.target.classList.add('selected')

}
headerThemeInput.addEventListener('click', (e) => {
     if(e.target.checked){
     localStorage.setItem('theme','dark')
     }else{
     localStorage.setItem('theme','light')
     }
     body.classList.toggle("dark");
})
// ! window onload
window.onload=function(){
let pageTheme=localStorage.getItem('theme')
if(pageTheme=='dark'){
body.classList.add('dark')
headerThemeInput.checked=true
}else{
body.classList.remove('dark')
}
}


if(params.questionID && params.categoryID){
generateAnswerData(data[0].questions[0].answer)
}else{
generateCategoryData(data)
}



