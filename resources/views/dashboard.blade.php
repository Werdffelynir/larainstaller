@extends('layouts.app')

@section('title', 'Dashboard')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <h2>Dashboard</h2>
    <p>This is my body content.</p>
@endsection
