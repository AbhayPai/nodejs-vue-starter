<template>
    <div v-html="data" />
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomeIndex',
    data: () => {
        return {
            data: null,
            error: null,
            loading: false
        };
    },
    created: function() {
        this.getContentHome();
    },
    methods: {
        getContentHome: function() {
            this.loading = true;

            axios.get('/api/v1/home')
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
