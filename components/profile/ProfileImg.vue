<template>
    <div id="profile_img" v-bind:style="{ 'background-image': 'url(' + this.url + ')' }"></div>
</template>

<script>
export default {
    name: 'ProfileImg',
    props: ['url']
}
</script>