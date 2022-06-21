<template>
    <div>
        <div id="username">{{ this.ghData.name }}</div>
        <div id="userbio" style="display: block;">{{ this.ghData.bio }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProfileInfo',
    props: ['ghData', "links"] // TODO: links is not used
}
</script>