<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
        <h1 class="text-3xl">Post List</h1>
        <div v-if="$apollo.loading">Loading</div>
        <div v-else>
            <PostListItem
                v-for="post in posts"
                :key="post.id"
                :post="post"
                class="mt-10"
            >
            </PostListItem>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "./Post/PostListItem";
export default {
    components: {
        PostListItem
    },
    apollo: {
        posts: gql`
            {
                posts {
                    id
                    title
                    lead
                    created_at
                    author {
                        id
                        name
                    }
                    topic {
                        name
                        slug
                    }
                }
            }
        `
    }
};
</script>

<style></style>
