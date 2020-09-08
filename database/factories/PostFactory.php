<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(3),
        'lead' => $faker->text(200),
        'content' =>$faker->paragraphs(10, true),
        'topic_id'=>random_int(1, 3),
        'author_id'=>random_int(1, 3)
    ];
});
