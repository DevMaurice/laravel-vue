<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>    
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <meta id="token" name="token" value="{{ csrf_token() }}"> 
    </head>
    <style type="text/css">
    .container{
        padding-top: 10px;

    }
    </style>
    <body>
       <div id="app">

            @include('partials/navbar');

            <div class="container">

                <router-view></router-view>

           </div>
       </div>

       <script type="text/javascript" src="/js/main.js"></script>
       <script src="//code.jquery.com/jquery.js"></script>
       <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    </body>
</html>
