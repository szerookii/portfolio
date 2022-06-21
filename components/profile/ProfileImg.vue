<template>
    <div id="profile_img" v-bind:style="{ 'background-image': 'url(' + this.url + ')' }"></div>
</template>

<script lang="ts">
export default {
    name: 'ProfileImg',
    props: ['url']
}
</script>