<template>
    <div>
        <div v-html="data" />
        <div class="row bg-primary text-center p-20 mt-20">
            <div class="col-sm-12">
                <p class="m-0">Made with passion by Abhay Pai.</p>
                <p class="m-0 mt-10">Copyright {{date.from}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FooterIndex',
    data: (Vue) => {
        return {
            date: {
                from: new Date().getFullYear(),
            },
            data: null,
            error: null,
            loading: true
        };
    },
    created: function() {
        this.getContentFooter();
    },
    methods: {
        getContentFooter: function() {
            axios.get('/api/v1/footer')
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
