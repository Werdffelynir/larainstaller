@extends('layouts.app')

@section('title', 'Main')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <h2>Main</h2>
    <p>This is my body content.</p>

    <example-component>Hello Word</example-component>

@endsection
