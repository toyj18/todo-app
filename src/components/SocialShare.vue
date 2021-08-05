<template>
    <div class="">
        <div class="m-2 p-2">
            <button class="m-1 btn btn-light">
            <ShareNetwork
                network="facebook"
                url="http://localhost:8080"
                title="Todo App"
                description="This is Usefull app to track your dailly activites"
                hashtags="Frontend, Programming">
                <!-- <span>Share on Facebook</span> -->
                <!-- <i class="fa fa-facebook-official josh"></i> -->
                <!-- <i class="fa fa-facebook-square " aria-hidden="true"></i> -->
                <i class="fab fa-facebook-f fa-2x"></i>
            </ShareNetwork>
        </button>
        <button class="m-1 btn btn-light">
            <ShareNetwork
                network="twitter"
                url="http://localhost:8080"
                title="Todo App"
                description="This is Usefull app to track your dailly activites"
                hashtags="Frontend, Programming">
                <!-- <span>Share on Facebook</span> -->
                <i class="fab fa-twitter fa-2x"></i>
                <!-- <i class="fas fas-twitter-f fa-2x"></i> -->
                <!-- <i class="fa fa-twitter" aria-hidden="true"></i> -->
            </ShareNetwork>
        </button>
        <button class="m-1 btn btn-light">
            <ShareNetwork
                network="skype"
                url="http://localhost:8080"
                title="Todo App"
                description="This is Usefull app to track your dailly activites"
                hashtags="Frontend, Programming">
                <!-- <span>Share on Facebook</span> -->
                <i class="fab fa-skype fa-2x"></i>
                <!-- <i class="fas fa-facebook-square" aria-hidden="true"></i> -->
            </ShareNetwork>
        </button>
        <button class="m-1 btn btn-light">
            <ShareNetwork
                network="whatsapp"
                url="http://localhost:8080"
                title="Todo App"
                description="This is Usefull app to track your dailly activites"
                hashtags="Frontend, Programming">
                <!-- <span>Share on Facebook</span> -->
                <i class="fab fa-whatsapp fa-2x"></i>
                <!-- <i class="fas fa-facebook-square" aria-hidden="true"></i> -->
            </ShareNetwork>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialShare',
    
}
</script>

<style>
.josh {
    color: white;
}
</style>