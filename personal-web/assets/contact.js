var contactForm = document.getElementById("contactForm")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var form = e.target;
    var formData = new FormData(form)

    var data = Object.fromEntries(formData.entries())

    console.log(data)

    console.log(data.phoneNumber)

    var link = document.createElement('a');

    link.href=`mailto:yohanez.budhy@gmail.com?subject=${data.subject}&body=Selamat siang, Nama Saya ${data.name}.%0D%0ASilahkan hubungi Saya%0D%0AEmail :${data.email}%0D%0ATelepon :${data.phoneNumber}.%0D%0A${data.message}`

    link.click();
})