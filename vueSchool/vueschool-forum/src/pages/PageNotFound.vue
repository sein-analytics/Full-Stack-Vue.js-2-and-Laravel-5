<template>
    <div class="col-full" :class="$style.centered">
        <h1 :class="$style.headingLarge">Not Found</h1>
        <p :class="$style.textLarge">Oooops, we couldn't find what you are looking for
            <router-link :to="{name: 'Home'}">
                Go back to home?
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {}
</script>

<style module>
    .headingLarge {
        font-size: 100px;
    }
    .textLarge {
        font-size: 50px;
        font-weight: 100;
    }

    .centered {
        text-align: center;
    }
</style>