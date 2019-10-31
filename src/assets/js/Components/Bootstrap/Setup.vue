<template>
    <div class="install-form">
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="adminemail">Admin Email</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="adminemail" placeholder="Admin Email" />
            </div>
        </div>
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="adminuname">Admin User Name</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="adminuname" placeholder="Admin User Name" />
            </div>
        </div>
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="adminupwd">Admin Password</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" id="adminupwd" placeholder="Admin Password" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12 text-center">
                <button type="button" class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Setup'
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
