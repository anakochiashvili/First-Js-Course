/* <\ css generator />

   მოცემულია ჰტმლ ფაილი თავისი მარქაფით, დავალება მდგომარეობს შემდეგში
   უნდა დაიჭიროთ ყველა ინპუტი და შესაბამისად შეუცვალთ სტილიმ მთავარ კვადრატ,
   ასევე როცა რადიუსებს შეუცვლით გვერდითა სპანში უნდა გამოუტანოთ რეზულტატი.
*/
// 
let topcolor = document.getElementById('top-color')
let topbutton = document.getElementById('top-button')
 topbutton.addEventListener('click', () =>{
    box.style.backgroundColor = topcolor.value;
 })
const box = document.getElementById('Box')

//top-left
let borderleft = document.getElementById('border-left')
borderleft.setAttribute('value', '0')
borderleft.addEventListener('click', ()=>{
   let span = document.getElementById('borderleft').innerHTML = borderleft.value;
   box.style.borderTopLeftRadius = `${borderleft.value}%`;
})
let borderRight = document.getElementById('border-right')
borderRight.setAttribute('value', '0')
borderRight.addEventListener('click', ()=>{
   let span = document.getElementById('borderright').innerHTML = borderRight.value;
   box.style.borderTopRightRadius = `${borderRight.value}%`;
})
let bottomleft = document.getElementById('bottom-left')
bottomleft.setAttribute('value', '0')
bottomleft.addEventListener('click', ()=>{
   let span = document.getElementById('bottomleft').innerHTML = bottomleft.value;
   box.style.borderBottomLeftRadius = `${bottomleft.value}%`;
})
let bottomright = document.getElementById('bottom-right')
bottomright.setAttribute('value', '0')
bottomright.addEventListener('click', ()=>{
   let span = document.getElementById('bottomright').innerHTML = bottomright.value;
   box.style.borderBottomRightRadius = `${bottomright.value}%`;
})
//box shadow
let X = document.querySelector('.x');
X.setAttribute('value', '0')
let y = document.querySelector('.y');
y.setAttribute('value', '0')
let blur = document.querySelector('.blur');
blur.setAttribute('value', '0')
let spred = document.querySelector('.spred');
spred.setAttribute('value', '0')
let color = document.getElementById('color')
let bottonGo = document.getElementById('bottonGo')
topbutton.addEventListener('click', () =>{
    box.style.boxShadow = `${X.value}px ${y.value}px ${blur.value}px ${spred.value}px ${color.value}`
 })
/* <\ html generator />

   აქ უნდა შექმნათ დივი ამ დივში უნდა იყოს 1 select  რომელშიც უნდა იყოს ჰტმლ თეგების სია(5 ცალი მაინც)
   სელექტის გვერდით უნდა იყოს ტექსტ 2 ცალი textarea და 1 button.
   button-ზე დაჭერისას უნდა შევუქმნათ html თეგი სელექტში იქნება თეგის სახელი, 
   პირველ ტექსტარეში ტექსტი რაც ჩაიწერება მაგ თეგში,
   მეორე ტექსტ არეში უნდა ჩაწეროს ცსს სტილები,
   ბა ღილაკს რომ დააჭერს შეიქმნას თეგი იუზერის აწერილი ინფოდან.
*/
let option1 = document.createElement('div')
let option2 = document.createElement('bdhdh')
let option3 = document.createElement('hgdk')
let option4 = document.createElement('hsha')
letoption5  = document.createElement('cshbc')
