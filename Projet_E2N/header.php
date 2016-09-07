<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="assets/css/font-awesome.min.css">
  <link href="assets/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/bootstrap-social.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="assets/css/style.css"/>
  <link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
  <script src="assets/js/jquery-2.2.4.js"></script>
  <script src="assets/js/jquery-ui.min.js" type="text/javascript"></script>
  <script src="assets/js/angular.min.js" type="text/javascript"></script>
  <script src="assets/js/index.js"></script>
  <title>E2N : Ecole du Numérique du Noyonnais</title>
  <script>
  $(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible:true
    });
  });
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80646346-1', 'auto');
  ga('send', 'pageview');

  </script>
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <div class="header_bloc col-md-2 col-lg-2 col-xs-6 col-sm-2">
          <img src="assets/images/logo.jpg"/>
        </div>
        <ul class="header menup col-md-10 col-lg-10 hidden-xs col-sm-10">

          <li class="header_bouton col-md-2 col-lg-2 col-sm-2"><a href="/"> Accueil </a></li>
          <li class="header_bouton col-md-2 col-lg-2 col-sm-2"><a href="apprenant.php">La Promo</a></li>
          <li class="header_bouton col-md-2 col-lg-2 col-sm-2"><a href="press.php">Presse</a></li>
          <li class="header_bouton col-md-2 col-lg-2 col-sm-2"><a href="FAQ.php">FAQs</a></li>
          <li class="header_bouton header_contact col-md-2 col-lg-2 col-sm-2"><a href="contacts.php">Contacts</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="hidden-lg hidden-md hidden-sm col-xs-12">
        <div class="pushmenu-push">
          <nav class="pushmenu pushmenu-left">
            <ul class="links">
              <li><a href="/"> Accueil </a></li>
              <li><a href="apprenant.php">La Promo</a></li>
              <li><a href="press.php">Presse</a></li>
              <li><a href="FAQ.php">FAQs</a></li>
              <li><a href="contacts.php">Contacts</a></li>
            </ul>
          </nav>
          <div>
            <section class="buttonset">
              <div id="nav_list"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
