<template>
    <div v-html="data" />
</template>

<script>
import axios from 'axios';

export default {
    name: 'OurStoryIndex',
    data: (Vue) => {
        return {
            data: null,
            error: null,
            loading: false
        };
    },
    created: function() {
        this.getFooter();
    },
    methods: {
        getFooter: function() {
            this.loading = true;

            axios.get('/api/v1/ourstory')
                .then((response) => {
                    this.data = response.data.data;
                })
                .catch((err) => {
                    this.error = err.toString();
                });
        }
    }
};
</script>
