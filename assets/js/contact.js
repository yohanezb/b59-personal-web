var contactForm = document.getElementById("contactForm")

function formSubmit(e) {
    var form = e.target;
    var formData = new FormData(form)

    var data = Object.fromEntries(formData.entries())

    console.log(data)

    console.log(data.phoneNumber)

    var link = document.createElement('a');

    link.href=`mailto:yohanez.budhy@gmail.com?subject=${data.subject}&body=${data.message}`

    link.click();
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit(e);
})