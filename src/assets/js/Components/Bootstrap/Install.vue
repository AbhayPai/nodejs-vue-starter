<template>
    <form id="install-form" class="install-form" @submit="installHandler">
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="dbname">Database Name</label>
            <div class="col-sm-8">
                <input type="text" required class="form-control" id="dbname" name="dbname" placeholder="Database Name" v-model="dbname" />
            </div>
        </div>
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="dbuname">Database User Name</label>
            <div class="col-sm-8">
                <input type="text" required class="form-control" id="dbuname" placeholder="Database User Name" v-model="dbuname" />
            </div>
        </div>
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="dbupwd">Database User Password</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" id="dbupwd" placeholder="Database User Password" v-model="dbupwd" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12 text-center">
                <input type="submit" class="btn btn-primary" value="Next" />
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Install',
    data: function() {
        return {
            errors: [],
            dbupwd: null,
            dbname: null,
            dbuname: null,
            success: false
        };
    },
    methods: {
        installHandler: function(e) {
            e.preventDefault();
            axios.post('/api/v1/install', {
                    dbname: this.dbname,
                    dbupwd: this.dbupwd,
                    dbuname: this.dbuname
                })
                .then((response) => {
                    response.data.status ? 
                        this.routeHandler(this.$router) :
                        '';
                })
                .catch((error) => {
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
        padding: 0 10px;
        margin: 0 auto;
    }
    .install-form .control-label {
        margin-top: 5px;
    }
</style>
