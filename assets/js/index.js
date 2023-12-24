const body = document.querySelector('body')
// theme change
const headerCheckLabel = document.querySelector('.header__check__label');
const bgImg = document.querySelectorAll('.bg__img');
const bgImgDark = document.querySelectorAll('.bg__img__dark');
const checkInput = document.querySelector('#check');
//header right side
const headerLeft = document.querySelector('.header__left');
// rigt content click
const mainRightContent = document.querySelectorAll('.main__right__content');
// steps
const step1 = document.querySelector('.step1');
const step2 = document.querySelector('.step2');
// step2
let step2RightContent;
let step2Form = document.querySelector('.main__right__button__form');

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
// ! Get Data
function getData(a) {
     let dataHtml = '';
     a.map((item) => {
          dataHtml += ` 
       <li  data-id="${item.id} "class="step2__main__right__content align__center">
       <div class="main__right__content__abcd__box center">
         <p class="main__right__content__abcd" >${item.variant}</p>
       </div>
       <p class="main__right__content__text">${item.text} </p>
     </li>
       `

     })
     rightContentBox.innerHTML = dataHtml
     step2RightContent = document.querySelectorAll('.step2__main__right__content');
     step2RightContent.forEach(item => {
          item.addEventListener('click', answerClick)
     })
     
}
// !step change
mainRightContent.forEach(item => {
     item.addEventListener('click', () => {
          step1.classList.add('dp__none');
          step2.classList.remove('dp__none');
          headerLeft.classList.remove('opacity__0');
     })
})

// ! step2
function answerClick(e) {
     step2RightContent.forEach(item => {
          item.classList.remove('selected')
     })
     e.target.classList.add('selected')

}


// ! Theme Change
headerCheckLabel.addEventListener('click', () => {
     body.classList.toggle("dark");
})
// ! step2 right content
// step2RightContent.forEach(item => {
//      item.addEventListener('click', () => {

//      })
// })
getData(data[0].questions[0].answer)