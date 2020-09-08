import "./bootstrap";
//Vue
import Vue from "vue";
//Additional
import VueRouter from "vue-router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

//Component
import PostList from "./components/PostList.vue";
import Post from "./components/Post.vue";
import PostTopicListItem from "./components/Post/PostTopicListItem.vue";

//End of Component
// Vue Setup
window.Vue = Vue;
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "home",
        component: PostList
    },
    {
        path: "/post/:id",
        name: "post",
        component: Post
    },
    {
        path: "/topics/:slug",
        name: "topic",
        component: PostTopicListItem
    }
];
const router = new VueRouter({
    mode: "history",
    routes
});
//End of Vue Router Setup
Vue.use(VueApollo);
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: "http://blogql.test/graphql"
});
const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});
const app = new Vue({
    el: "#app",
    apolloProvider,
    router
});
