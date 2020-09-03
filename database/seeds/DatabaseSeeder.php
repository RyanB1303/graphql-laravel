<?php

use App\Post;
use App\Topic;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 3)->create();
        Topic::create(['name'=>'References','slug'=>'references']);
        Topic::create(['name'=>'Tutorial','slug'=>'tutorial']);
        Topic::create(['name'=>'Usefull Links','slug'=>'links']);

        factory(Post::class, 20)->create();
    }
}
