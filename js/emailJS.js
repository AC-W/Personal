function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_4le1i2i","template_vd6s7wg",params).then(function (res){
        alert("success!" + res.status);
    })
}