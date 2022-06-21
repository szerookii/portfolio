<template>
<div>
    <Loader></Loader>
    <Profile username="Seyz123"></Profile>

    <div id="display">
        <ProjectGrid username="Seyz123"></ProjectGrid>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "IndexPage",
})
</script>
