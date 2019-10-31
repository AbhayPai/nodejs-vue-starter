<template>
    <div v-html="data" />
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactIndex',
    data: () => {
        return {
            data: null,
            error: null,
            loading: false
        };
    },
    created: function() {
        this.getContentContact();
    },
    methods: {
        getContentContact: function() {
            this.loading = true;

            axios.get('/api/v1/contact')
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
