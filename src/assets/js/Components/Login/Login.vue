<template>
    <form id="install-form" class="install-form m-10 p-10 bg-white" @submit="installHandler">
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="name">Username</label>
            <div class="col-sm-8">
                <input type="text" required class="form-control" id="name" placeholder="Username" v-model="name" />
            </div>
        </div>
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="pwd">Password</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" id="pwd" placeholder="Password" v-model="pwd" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12 text-center">
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data: function() {
        return {
            pwd: null,
            name: null
        };
    },
    methods: {
        installHandler: function(e) {
            e.preventDefault();
            axios.post('/api/v1/login', {
                    name: this.name,
                    pwd: this.pwd,
                })
                .then((response) => {
                    // eslint-disable-next-line
                    console.log(response.data.status);
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error);
                });
        },
        routeHandler: function(redirect) {
            redirect.push('/setup');
        }
    }
};
</script>

<style scoped>
    .install-form {
        max-width: 50%;
        margin: 10px auto !important;
    }
    .install-form .control-label {
        margin-top: 5px;
    }
</style>
