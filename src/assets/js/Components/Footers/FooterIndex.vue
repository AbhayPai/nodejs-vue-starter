<template>
    <div>
        <div class="bg-white row mb-20">
            <div class="col-sm-12">
                <h1 class="section-title m-0 text-primary text-center">
                    <strong>
                        Reach Us
                    </strong>
                </h1>
                <div class="row">
                    <div class="col-sm-3 text-center">
                        <p class="reach-info m-0 text-32">0123-456-789</p>
                        <p class="reach-title m-0 text-22 text-primary"><strong>Mobile</strong></p>
                    </div>
                    <div class="col-sm-3 text-center">
                        <p class="reach-info m-0 text-32">0123-45-68</p>
                        <p class="reach-title m-0 text-22 text-primary"><strong>Landline</strong></p>
                    </div>
                    <div class="col-sm-3 text-center">
                        <p class="reach-info m-0 text-32">012345</p>
                        <p class="reach-title m-0 text-22 text-primary"><strong>Food Panda</strong></p>
                    </div>
                    <div class="col-sm-3 text-center">
                        <p class="reach-info m-0 text-32">Zomato</p>
                        <p class="reach-title m-0 text-22 text-primary"><strong>Zomato</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-center mt-20 mb-20">
                        <img src="/images/socials/fb.png" class="img-responsive mr-20 d-inline-block" />
                        <img src="/images/socials/ig.png" class="img-responsive mr-20 d-inline-block" />
                        <img src="/images/socials/yt.png" class="img-responsive mr-20 d-inline-block" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row bg-primary text-center p-20 mt-20">
            <div class="col-sm-12">
                <p class="m-0">Made with passion by Abhay Pai.</p>
                <p class="m-0 mt-10">Copyright {{date.from}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterIndex',
    data: (Vue) => {
        return {
            date: {
                from: new Date().getFullYear(),
            }
        };
    }
};
</script>
