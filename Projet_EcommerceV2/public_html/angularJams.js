/*Nos Produits*/
var app = angular.module('jamsProduct', ['ngCart']);
/* Produit Bandeau*/
app.controller('bandeauController', ["$scope", "ngCart", function ($scope, ngCart) {
        $scope.bandeaux = [
            {
                //Produit n°1 - La malette de Marcelus Wallace' - Pulp Fiction
                src_img: 'assets/images/Malette_pulp_fiction2.jpg',
                title_product: 'La malette de Marcelus Wallace',
                movie_product: 'Pulp Fiction',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $'
            },
            {
                //Produit n°2 - La planche de Rose Dawson - Titanic
                src_img: 'assets/images/leoplanche2.jpeg',
                title_product: 'La planche de Rose Dawson',
                movie_product: 'Titanic',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $'
            },
            {
                //Produit n°3 - Le rasoir de Mr. Brown - Reservoir Dogs
                src_img: 'assets/images/reservoirdogs42.jpg',
                title_product: 'Le rasoir de Mr. Brown',
                movie_product: 'Reservoir Dogs',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $'
            },
            {
                //Produit n°4 - La clé de la Porte - 50 Nuances de Grey 
                src_img: 'assets/images/clés502.jpg',
                title_product: 'La clé de la Porte Rouge',
                movie_product: '50 Nuances de Grey',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $'
            }
        ];
    }]);

//FICHES PRODUITS
app.controller('filesController', ["$scope", "ngCart", function ($scope, ngCart) {
        ngCart.setTaxRate(8.5);
        ngCart.setShipping(319.90);
        $scope.FilesProduct1 = [
            {//Produit n°1 - Le sabre laser de Dark Vader - Star Wars
                src_img: 'assets/images/sabrelaser2.jpg',
                title_product: 'Le sabre laser de Dark Vador',
                movie_product: 'Star Wars',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla Bla Bla BLa Bla Bla BLa Bla Bla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa BlaBla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°: 589467027',
                authenticity_product: 'Certificat d\'authenticité N°:9674AB20',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '

            }
       ,
            {//Produit n°2 - Le vélo d'Elliott - E.T
                src_img: 'assets/images/et_moon2.jpg',
                title_product: 'Le vélo d\'Elliott',
                movie_product: 'E.T',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°: 607548219',
                authenticity_product: 'Certificat d\'authenticité N°:MK53497',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
        ,
            {//Produit n°3 - L'anneau de Soron - Le Seigneur des Anneaux
                src_img: 'assets/images/anneau.jpeg',
                title_product: 'L\'anneau de Soron',
                movie_product: 'Le Seigneur des Anneaux',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°: 149846023 ',
                authenticity_product: 'Certificat d\'authenticité N°: 802PW48',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
      
,
            {
                //Produit n°4 - La voiture de Walt Kowalski - Gran Torino 
                src_img: 'assets/images/grantorino.jpg',
                title_product: 'La voiture de Walt Kowalski',
                movie_product: 'Gran Torino',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }

        ,
            {
                //Produit n°5 - La 7eme Dragon Ball - Dragon Ball
                src_img: 'assets/images/dragonball.jpeg',
                title_product: 'La 7eme Dragon Ball',
                movie_product: 'Dragon Ball',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
      ,
            {
                //Produit n°6 - Iorek Byrnison - Le Monde de Narnia
                src_img: 'assets/images/iorek.jpeg',
                title_product: 'Iorek Byrnison',
                movie_product: 'Le Monde de Narnia',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
       ,
            {
                //Produit n°7 - Les cheveux de Charles Xavier - X-MEN
                src_img: 'assets/images/CX.jpeg',
                title_product: 'Les cheveux de Charles Xavier',
                movie_product: 'X-MEN',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
       ,
            {
                //Produit n°8 - La clé de la Porte Rouge - 50 Nuances de Grey
                src_img: 'assets/images/clés502.jpg',
                title_product: 'La clé de la Porte Rouge',
                movie_product: '50 Nuances de Grey',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
        ,
            {
                //Produit n°9 - La malette de Marcelus Wallace - Pulp Fiction
                src_img: 'assets/images/Malette_pulp_fiction2.jpg',
                title_product: 'La malette de Marcelus Wallace',
                movie_product: 'Pulp Fiction',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
       ,
            {
                //Produit n°10 - La planche de Rose Dawson - Titanic
                src_img: 'assets/images/leoplanche2.jpeg',
                title_product: 'La planche de Rose Dawson',
                movie_product: 'Titanic',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
        ,
            {
                //Produit n°11 - Le rasoir de Mr. Brown - Reservoir Dogs
                src_img: 'assets/images/reservoirdogs42.jpg',
                title_product: 'Le rasoir de Mr. Brown',
                movie_product: 'Reservoir Dogs',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
       ,
            {
                //Produit n°5 - La 7eme Dragon Ball - Dragon Ball
                src_img: 'assets/images/dragonball.jpeg',
                title_product: 'La 7eme Dragon Ball',
                movie_product: 'Dragon Ball',
                desc_product: 'Bla Bla BLa Bla Bla BLa Bla',
                price_product: '300 $',
                ref_product: 'Ref. N°:  ',
                authenticity_product: 'Certificat d\'authenticité N°: ',
                creation_product: 'Année de Création: ',
                shooting_product: 'Année de tournage: '
            }
        ];
    }]);
/*History*/
app.controller('historyController', ["$scope", function ($scope) {
        $scope.history = [
            {
                presentation: 'Lors d’une vente aux enchères immobilière, un manoir fut mis en vente a un prix très attractif. En effet ce lieu était chargé d’histoire . Il était tout d’abord construit sur un cimetière indien. Quantité de meurtre y avait été perpétré, souvent des hommes masqués (masque de hockey, tête de mort avec bouche en S et j’en passe). Un enfant y avait été oublié a Noël par ses parents et avait martyrisé 2 pauvres cambrioleurs. Ce manoir ma famille en a fait l’acquisition et au 3éme étage se trouvait une pièce scellée. Dans cette pièce se trouvait un grand nombre d’objet anodins au premier abord. Jusqu’à ce que l’on se rende compte de l’importance et de la valeur de ces objets qui provenait en réalité du cinéma. Une carte était également presente avec les coordonnés d’un fournisseur secret appelé «Keyser Sözey » qui nous réapprovisionne depuis. Ces produits nous vous les vendons au meilleur prix, si tant est qu’on puisse leur donner une réelle valeur !!!'
            }
        ];
    }]);

// HIDE & SHOW CATALOGUE
function afficher() {
    var aff = document.getElementById('Catalogue');
    var bp = document.getElementById('BestProduct');
    var ct = document.getElementById('Contact');
    var hp = document.getElementById('HomePage');
    var st = document.getElementById('story');
    var pan = document.getElementById('basket');
    if (aff.style.display == "none") {
        aff.style.display = "block";
        bp.style.display = "none";
        ct.style.display = "none";
        st.style.display = "none";
        pan.style.display = "none";
    } else {
        aff.style.display = "none";
    }
}

// HIDE & SHOW STORY
function afficher1() {
    var aff = document.getElementById('Catalogue');
    var bp = document.getElementById('BestProduct');
    var ct = document.getElementById('Contact');
    var hp = document.getElementById('HomePage');
    var st = document.getElementById('story');
    var pan = document.getElementById('basket');
    if (st.style.display == "none") {
        aff.style.display = "none";
        bp.style.display = "none";
        ct.style.display = "none";
        st.style.display = "block";
        pan.style.display = "none";
    } else {
        aff.style.display = "none";
    }
}

// HIDE & SHOW FORMULAIRE
function afficher2() {
    var ct = document.getElementById('Contact');
    var bp = document.getElementById('BestProduct');
    var aff = document.getElementById('Catalogue');
    var st = document.getElementById('story');
    var pan = document.getElementById('basket');
    if (ct.style.display == "none") {
        ct.style.display = "block";
        bp.style.display = "none";
        aff.style.display = "none";
        st.style.display = "none";
        pan.style.display = "none";
    } else {
        ct.style.display = "none";
    }
}

// HIDE & SHOW ACCUEIL
function afficher3() {
    var bp = document.getElementById('BestProduct');
    var aff = document.getElementById('Catalogue');
    var ct = document.getElementById('Contact');
    var st = document.getElementById('story');
    var pan = document.getElementById('basket');
    if (bp.style.display == "none") {
        bp.style.display = "block";
        aff.style.display = "none";
        ct.style.display = "none";
        st.style.display = "none";
        pan.style.display = "none";
    } else {
        bp.style.display = "none";
    }
}

function panier() {
    var bp = document.getElementById('BestProduct');
    var aff = document.getElementById('Catalogue');
    var ct = document.getElementById('Contact');
    var st = document.getElementById('story');
    var pan = document.getElementById('basket');
    if (pan.style.display == "none") {
        pan.style.display = "block";
        aff.style.display = "none";
        ct.style.display = "none";
        st.style.display = "none";
        bp.style.display = "none";
    } else {
        bp.style.display = "none";
    }
}