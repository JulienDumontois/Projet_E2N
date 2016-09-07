<?php include "header.php"; ?>
<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
        <h1 class="contact_h1">Vous souhaitez des informations complémentaires ? Contactez-nous !</h1>
        
        <script>
       function dialogue() {
    alert("Fonction désactivée!");
}    
        </script>
    
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                <div id="contact_formulaire">
                    <form>
                        <label for="nom" class="contacts_nopadding">Nom<span class="contactast">*</span> :</label><br>
                        <input class="contact_form_input" type="text"  placeholder="Nom" name=""/><br>
                        <label for="Prénom" class="contacts_nopadding">Prénom<span class="contactast">*</span>:</label><br>
                        <input class="contact_form_input" type="text"  placeholder="Prénom" /><br>
                        <label for="Adresse email" class="contacts_nopadding">Adresse Email<span class="contactast">*</span> :</label><br>
                        <input class="contact_form_input" type="email"  placeholder="Adresse Mail" /><br>
                        <label for="Téléphone" class="contacts_nopadding">Téléphone<i class="fa fa-phone contacts" aria-hidden="true"></i>:
                        </label><br>
                        <input class="contact_form_input" type="tel" placeholder="Téléphone"/><br>
                        <p>VOTRE MESSAGE<span class="contactast">*</span> :</p>
                        <label for="OBJET" class="contacts_nopadding">Objet<span class="contactast">*</span> : </label><input class="contact_input_champ" type="Champ" /><br>
                        <label for="Message" class="contacts_nopadding"></label>
                        <textarea name="message" rows="6" cols="30" class="contacts_nopadding">
                        </textarea>
                        <button type="button" onclick="dialogue()" class="btn btn-warning contact_margintop">Envoyer</button>
                    </form>
                    <p><span class="contactast">*</span> Champs Obligatoires</p>
                </div>
            </div>

            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <div id="contact_coordonees">
                    <p><i class="fa fa-clock-o" aria-hidden="true"></i> Ouvert du lundi au vendredi :<br/>de 8 h 30 à 12 h 30 et de 13 h 30 à 16 h 30.</p>
                    <p>E2N Ecole du Numérique du Noyonnais</p>
                    <p>Campus Inovia</p>
                    <p>1435 Bd Cambronne Bat 12<br/>
                        60400 NOYON</p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> Mail : <a href="mailto:contact.formation@novei.fr">contact.formation@novei.fr</a></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.990841552822!2d3.0059642508433875!3d49.597922156203246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e873965082a315%3A0xe4d8e82d29dec85b!2s1435+Boulevard+Cambronne%2C+60400+Noyon!5e0!3m2!1sfr!2sfr!4v1462961940871" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
</div>
    </div>
    <?php include "modules.php"; ?>
</div>
<?php include "footer.php"; ?>
