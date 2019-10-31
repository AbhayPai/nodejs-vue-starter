<template>
    <div>
        <div v-if="loading" class="bg-white m-10 p-10 text-center">
            <button class="btn btn-lg btn-primary">
                <i class="glyphicon glyphicon-download-alt" />
            </button>
        </div>
        
        <div v-if="error" v-html="error" />
        
        <div v-if="data" v-html="data" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BlogIndex',
    data: () => {
        return {
            data: null,
            error: null,
            loading: true
        };
    },
    created: function() {
        this.getContentBlog();
    },
    methods: {
        getContentBlog: function() {
            axios.get('/api/v1/blog')
                .then((response) => {
                    this.data = response.data.data;
                    this.loading = false;
                })
                .catch((err) => {
                    this.error = err.toString();
                    this.loading = false;
                });
        }
    }
};
</script>
