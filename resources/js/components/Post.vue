<template>
    <div class="container mx-auto px-4 w-full md:3/4 lg:3/5 xl:w-1/2 mt-20">
        <div class="navigation text-red-500 font-light mb-3 text-sm">
            <router-link :to="{ name: 'home' }">Post List</router-link>
        </div>
        <div v-if="$apollo.loading">Loading ......</div>
        <div v-else>
            <div class="text-gray-500 text-lg">
                By {{ post.author.name }}&nbsp; in
                <router-link
                    :to="{
                        name: 'topic',
                        params: { slug: post.topic.slug }
                    }"
                    class="underline text-red-400 hover:text-black"
                    >{{ post.topic.name }}</router-link
                >&nbsp; in 3 hours ago
            </div>
            <h1 class="text-5xl text-gray-600 font-bold mb-12">
                {{ post.title }}
            </h1>
            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">
                {{ post.content }}
            </p>
            <div class="mb-24 flex">
                <div class="mr-6">
                    <img
                        :src="`/storage/faces/${post.author.avatar}`"
                        alt="avatar"
                        class="w-16 h-16 rounded-full"
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-gray-600">
                        Written by : {{ post.author.name }}
                    </div>
                    <div class="text-gray-600">
                        Published in
                        <router-link
                            :to="{
                                name: 'topic',
                                params: { slug: post.topic.slug }
                            }"
                            class="underline text-red-400 hover:text-black"
                            >{{ post.topic.name }}</router-link
                        >
                        in 33/33/33
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
export default {
    apollo: {
        post: {
            query: gql`
                query($id: ID!) {
                    post(id: $id) {
                        id
                        title
                        content
                        author {
                            id
                            name
                            avatar
                        }
                        topic {
                            name
                            slug
                        }
                    }
                }
            `,
            variables() {
                return {
                    id: this.$route.params.id
                };
            }
        }
    }
};
</script>

<style></style>
