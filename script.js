const txt_name = document.getElementById('txt_name')

txt_name.addEventListener('input', function () {
    let value = txt_name.value

    document.getElementById('name_output').textContent = value
})

const txt_age = document.getElementById('txt_age')

txt_age.addEventListener('input', function () {
    let value = txt_age.value

    document.getElementById('age_output').textContent = value
})

const txt_email = document.getElementById('txt_email')

txt_email.addEventListener('input' , function () {
    let value =txt_email.value

    document.getElementById( 'email_output').textContent = value
})

const txt_number = document.getElementById('txt_number')

txt_number.addEventListener('input' ,function () {
    let value =txt_number.value

    document.getElementById( 'number_output').textContent = value
})

const txt_color = document.getElementById('txt_color')

txt_color.addEventListener('input' ,function() {
    let value =txt_color.value

    document.getElementById( 'card_output').style.backgroundColor =value  
})

const txt_skills = document.getElementById('txt_skills')
let index = 0

txt_skills.addEventListener('input' ,function(e) {
    let value = e.target.value


    document.querySelectorAll('#skills_output li')[index].textContent = value
})

txt_skills.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        let li = document.createElement('li')
        li.textContent = ""
        document.getElementById('skills_output').appendChild(li)

        index++
    } 
})

// function clicked() {
//     if(img==1){
//         document.getElementById("img").style.display="inline"
//         return img=0;
//     }else{
//         document.getElementById("img").style.display="none"
//         return img=0;
//     }
// }
