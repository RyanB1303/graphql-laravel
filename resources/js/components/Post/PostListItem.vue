<template>
    <div>
        <router-link :to="{ name: 'post', params: { id: post.id } }">
            <h4
                class="text-2xl pb-3 font-semibold hover:underline hover:text-gray-500"
            >
                {{ post.title }}
            </h4>
        </router-link>
        <p class="text-gray-600 pb-3">{{ post.lead }}</p>
        <div class="text-sm text-gray-600">
            Written by {{ post.author.name }} &nbsp; in
            <router-link
                :to="{
                    name: 'topic',
                    params: { slug: post.topic.slug }
                }"
                class="underline text-red-400 hover:text-black"
                >{{ post.topic.name }}</router-link
            >
            &nbsp;• 3 Hours Ago
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
};
</script>

<style></style>
