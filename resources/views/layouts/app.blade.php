<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'SunAdmin') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>

<div id="app">

    <div id="header">
        <div class="container">

            <div id="menu">
                <router-link to="/foo">Перейти к Foo</router-link>
                <router-link to="/bar">Перейти к Bar</router-link>

                <a href="{{ url('/') }}">Home</a>
                <a href="{{ url('/profile') }}">Profile</a>
                <a href="{{ url('/dashboard') }}">Dashboard</a>
                <a href="{{ url('/projects') }}">Projects</a>
                <a href="{{ url('/services') }}">Services</a>
            </div>
        </div>
    </div>

    <div id="sidebar">
        @section('sidebar')
            This is the master sidebar.
        @show
    </div>

    <div id="content">
        <router-view></router-view>
        <div class="container">
            @yield('content')
        </div>
    </div>

</div>

</body>
</html>
