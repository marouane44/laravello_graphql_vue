<?php

namespace App\GraphQL\Mutations;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $guard =  Auth::guard(config('sanctum.guard','web'));
        if(!$guard->attempt($args)){
            throw new Error('THIS SHIT IS NOT CORRECT11');
        }
        $user = $guard->user();
        return $user;
    }
}
