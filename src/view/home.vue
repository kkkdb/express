<!-- 首页 -->
<template>
    <div class="content-wrapper">
        <!-- Content Header -->
        <section class="content-header">
            <h1>欢迎进入微商城后台管理系统, <strong class="text-green" v-text="userName"></strong></h1>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
            
            </div>
        </section>

    </div>
</template>

<script>
import {getCookie} from '../common/cookie.js'

export default {
    mounted: function() {
        $(".content-wrapper").css({
            'min-height': $(document).height() - $(".main-header").height() + 'px', 
            'margin-top': $(".main-header").height()
        });

        if(getCookie("userName")){
            this.userName = getCookie("userName");
        }else{
            this.$router.push({name: 'login'});
        }

    },
    data: function() {
        return {
            "userName": ''
        }
    }
}
</script>