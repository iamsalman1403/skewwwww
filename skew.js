function openMenu(){
    document.getElementById('side-menu').style.width = '250px';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = '0px';
}

function shutMenu() {
    document.getElementById('side-menu').style.width = '0px';
}

//scroll
$(document).ready(function () {
    $("#smoothScroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });
});



//quotation
document.getElementById('myForm').addEventListener('submit', getQuotation);

var storeQuotation = localStorage.getItem('storeQuotation');

function getQuotation(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var quotation = {
        qName: name,
        qEmail: email,
        qMessage: message,
    }
    console.log(quotation);

    if (storeQuotation === null) {
        var quotationDetail = [];
        quotationDetail.push(quotation);
        localStorage.setItem('storeQuotation', JSON.stringify(quotationDetail));
    }
    else{
        var quotationDetail = [JSON.parse(localStorage.getItem('storeQuotation'))];
        quotationDetail.push(quotation);
        localStorage.setItem('storeQuotation', JSON.stringify(quotationDetail));
    }
    
}