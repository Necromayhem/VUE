<template>
    <div class="app">
        <div>
            <post-form 
            @create="createPost"
            />
            <post-list 
            :posts="posts"
            />
            
            
        </div>

        
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
    components: {
        PostList, PostForm
    },
    data(){
        return {
            posts: [
            {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
            {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
            {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
            {id: 4, title: 'JavaScript 4', body: 'Описание поста 4'},
        ],
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
        },
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }



    
</style>