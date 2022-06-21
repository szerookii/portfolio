<template>
<div>
    <Loader></Loader>
    <Profile username="Seyz123"></Profile>

    <div id="display">
        <ProjectGrid></ProjectGrid>
    </div>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: "IndexPage"
})
</script>
