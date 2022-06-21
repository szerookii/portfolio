<template>
    <div>
        <div id="username"><span style="display:block;">{{ this.ghData.name }}</span><a :href="ghData.html_url">@{{ this.ghData.login}}</a></div>
        <div id="userbio" style="display: block;">{{ this.ghData.bio }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProfileInfo',
    props: ['ghData', "links"] // TODO: links is not used
}
</script>