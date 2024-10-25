const form = document.getElementById('formtofill')
const successMessage = document.getElementById('success-message')

form.addEventListener('submit', (e) => {
     e.preventDefault()

     const firstName =  document.getElementById('first-Name').value.trim()
     const lastName =  document.getElementById('last-Name').value.trim()
     const emailAddress =  document.getElementById('email').value.trim()
     const queryType =  document.querySelector('input[name="query-type"]:checked')
     const message = document.getElementById('message').value.trim()
     const consent = document.getElementById('consent').checked

     const alert1 = document.querySelectorAll('.alert1')
      
     let isValid = true

     First name validation

     if(firstName === '') {
          isValid = false 

          document.querySelector('#first-name + .alert1').style.display = 'block'
          document.querySelector('#first-name').style.border = '1px solid var(--red)'
     } else {
          document.querySelector('#first-name + .alert1').style.display = 'none'
          document.querySelector('#first-name').style.border = '1px solid var(--medium-grey)'
     }
  
     Last name validation
     if(lastName === '') {
          isValid = false 

          document.querySelector('#last-name + .alert1').style.display = 'block'
          document.querySelector('#last-name').style.border = '1px solid var(--red)'
     } else {
          document.querySelector('#last-name + .alert1').style.display = 'none'
          document.querySelector('#last-name').style.border = '1px solid var(--medium-grey)'
     }

        Email Validation
       if(!isValidEmail(email)) {
          isValid = false 

          document.querySelector('#email + .alert1').style.display = 'block'
          document.querySelector('#email').style.border = '1px solid var(--red)'
       } else {
          document.querySelector('#email + .alert1').style.display = 'none'
          document.querySelector('#email').style.border = '1px solid var(--medium-grey)'
     }
       
     Query-selector validation

     if(!queryType) {
          isValid = false
          document.querySelector('.radio-inputs + .alert1').style.display = 'block' 
     } else {
          document.querySelector('.radio-inputs + .alert1').style.display = 'none'
     }

     message validation

      if(message === '') {
          isValid = false
          document.querySelector('#message + .alert1').style.display = 'block'
          document.querySelector('#message').style.display = '1px solid var(--red)'
      } else {
          document.querySelector('#message + .alert1').style.display = 'none'
          document.querySelector('#message').style.display = '1px solid var(--medium-grey)' 
      }

      consent validation

     if(!consent) {
          isValid = false 

          alert1[5].classList.add('form-error')
     } else {
          alert1[5].classList.remove('form-error')
     }

     Valid form

     if(isValid) {
          successMessage.classList.add('active')
          form.reset()
     }

   })

//    Validation of email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
}