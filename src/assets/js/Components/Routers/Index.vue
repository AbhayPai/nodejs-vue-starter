<template>
    <div>
        <nav class="navbar bg-primary m-0 navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#headerMenu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link
                        class="navbar-brand text-white"
                        :to="home"
                    >
                        Restaurant Name
                    </router-link>
                </div>
                <div class="collapse navbar-collapse" id="headerMenu">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-for="(link, index) in links" :key="index">
                            <router-link
                                class="text-white"
                                v-if="link.display"
                                :target="link.target"
                                :to="link.path"
                            >
                                {{link.name}}
                            </router-link>
                        </li>
                   </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid contents mt-50">
            <router-view></router-view>
            <FooterIndex />
        </div>
    </div>
</template>

<script>
import FooterIndex from 'ComponentsPath/Footers/FooterIndex';

export default {
    name: 'Routers',
    components: {
        FooterIndex
    },
    data: (Vue) => {
        let links = [];

        Vue.$router.options.routes.forEach(route => {
            route.display ? links.push(route) : '';
        });

        return {
            links,
            home: links[0],
        };
    }
};
</script>
