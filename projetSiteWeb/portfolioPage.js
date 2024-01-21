let darkMode = document.querySelector('.darkMode')
darkMode.addEventListener('click', () => {
  let body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
  } else {
    body.classList.add('dark')
  }
})

let li = document.querySelectorAll('.tab')

console.log(li)


li.forEach((element) => {
    element.addEventListener('click',() =>{
        li.forEach((e) =>{
            e.classList.remove('tab-active')
        })
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.remove('active')
        })   
        element.classList.add('tab-active')
        if (element.classList.contains('tab-projet')){
            document.querySelector('.projet').classList.add('active')
        }
        if (element.classList.contains('tab-illustrations')){
            document.querySelector('.illustrations').classList.add('active')
        }
        if (element.classList.contains('tab-moodboard')){
            document.querySelector('.moodboard').classList.add('active')
        }
    })
})