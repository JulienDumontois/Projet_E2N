<?php include "header.php";
?>
<div class="contenu container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="col-lg-12 col-xs-12"><h1 class="apprenant_titre">E2N Ecole du Numérique</h1></div>
            <div class="col-lg-12 col-xs-12"><h2 class="apprenant_titre">Les Apprenants #Promo 1</h2></div>
            <div class="col-lg-12 col-xs-12"><p class="appr_center">Seul on va vite, ensemble on va loin</p><br></div>
        </div>
    </div>
    <div class="row"> 
        <div ng-app="apprenantE2n">
            <div ng-controller="promoController"> 
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                    <div class="row">
                        <!-- création de la boucle apprenant par ordre aléatoire-->
                        <div ng-repeat="promo in promos|orderBy:random">
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 block_presentation_1">
                                <img class="img_1" src="{{promo.src_img}}">
                                <div class="block_fond_1">
                                    <h3 class="nom_1">{{promo.name}}</h3>
                                    <p class="p_1">{{promo.desc_student}}</p>
                                </div>
                                <div class="icones block_barre_1">
                                    <a href="{{promo.github}}"><i class="fa fa-github i_1" aria-hidden="true"></i></a>
                                    <a href="{{promo.linkedin}}"><i class="fa fa-linkedin i_1" aria-hidden="true"></i></a> 
                                    <a href="{{promo.mail}}"><i class="fa fa-envelope-o i_1" aria-hidden="true"></i></a> 
                                    <a href="{{promo.cv}}" class="i_1">CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include "modules.php" ?>
    </div>
</div>
<?php include "footer.php" ?>
