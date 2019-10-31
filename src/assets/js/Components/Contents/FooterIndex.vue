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
            loading: false
        };
    },
    created: function() {
        this.getContentFooter();
    },
    methods: {
        getContentFooter: function() {
            this.loading = true;

            axios.get('/api/v1/footer')
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
