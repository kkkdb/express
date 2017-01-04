<template>
    <header class="main-header" style="width:100%;position:fixed;left:0;top:0;">
        <!-- Logo -->
        <!-- <router-link :to="{ name: 'home' }" class="logo"> -->
        <router-link :to="{ name: 'home' }" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>ex</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>ex</b>press</span>
        </router-link>
        <!-- </router-link> -->
        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">    
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <!-- <img src="http://placehold.it/100x100" class="user-image" alt="User Image"> -->
                            <span class="hidden-xs" v-text="userName"></span>
                            <i class="fa  fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <!-- <img src="../img/user_head.jpg" class="img-circle" alt="User Image"> -->
                                <p v-text="userName"></p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <!-- <div class="pull-left">
                                    <router-link :to='{name: "modifyPassword"}' title="修改密码" class="btn btn-default btn-sm btn-flat"><i class="fa fa-gear"></i>  <span>修改密码</span></router-link>
                                </div>
                                <div class="pull-left" style="margin-left:15px;">
                                    <router-link :to='{name: "bindEmail"}' title="绑定邮箱" class="btn btn-default btn-sm btn-flat"><i class="fa fa-gear"></i>  <span>绑定邮箱</span></router-link>
                                </div> -->
                                <div class="pull-right">
                                    <a href="#" title="退出" class="btn btn-default btn-sm btn-flat" v-on:click="signOut"><i class="fa fa-power-off"></i> <span>退出</span></a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import api from '../common/api'
import http from '../common/http'
import {getCookie, deleteCookie} from'../common/cookie.js'

export default {
    mounted: function() {
        if (getCookie("userName")) {
            this.userName = getCookie("userName");
        } else {
            this.$router.push({
                name: 'login'
            });
        }
        var vm = this;
    },
    data: function() {
        return {
            userName: ''
        }
    },
    methods: {
        signOut () {
            var vm = this;
            deleteCookie(function() {
                // Http({
                //     instance: vm,
                //     url: API.loginout,
                //     success: function(daat){                  
                        vm.$router.push({name: 'login'});
                    // }
                // })
            });
        }
    }
}
</script>