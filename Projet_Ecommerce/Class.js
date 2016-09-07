//Page Contact
$(document).ready(function(){
    $('#Catalogue,#History,#Contact').hide();
});
   $(".catalogue").click(function(){
       $("#Catalogue").show(function(){
           $("#HomePage, #History, #Contact").hide();
       });
   });

   $(".history").click(function(){
       $("#History").show(function(){
           $("#HomePage, #Catalogue, #Contact").hide();
       });
   });


   $(".contact").click(function(){
       $("#Contact").show(function(){
           $("#HomePage, #Catalogue, #History").hide();
       });
   });

   $(".homePage").click(function(){
       $("#HomePage").show(function(){
           $("#Catalogue, #History").hide();
       });
   });



class Projet {
    constructor(FullnameForm, CompanyForm, EmailForm, PhoneForm) {
        this.FullnameForm = FullnameForm;
        this.CompanyForm = CompanyForm;
        this.EmailForm = EmailForm;
        this.PhoneForm = PhoneForm;
    }
    CheckEmail(email) {
        var pattern = new RegExp(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,10}$/i);
        return pattern.test(email);
    }

    CheckName(chaine) {
        var Check = new RegExp(/^[a-z -]+$/i);
        return Check.test(chaine);
    }
    CheckPhone(phone) {
        var Check = new RegExp(/^0[1-9]\d{8}$/);
        return Check.test(phone);
        }
    }
