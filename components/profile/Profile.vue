<template>
    <div>
        <div id="profile">
            <ProfileImg :url="data.avatar_url"></ProfileImg>
            <ProfileInfo :ghData="data"></ProfileInfo>

            <div id="about">
                <span v-if="data.company != null">
                    <font-awesome-icon :icon="['fas', 'fa-user']"></font-awesome-icon>&nbsp; {{ this.data.company }}
                </span>
                <span v-if="data.email != null">
                    <font-awesome-icon :icon="['fas', 'fa-envelope']"></font-awesome-icon>&nbsp; {{ this.data.email }}
                </span>
                <span v-if="data.location != null">
                    <font-awesome-icon :icon="['fas', 'fa-map-marker-alt']"></font-awesome-icon>&nbsp; {{
                            this.data.location
                    }}
                </span>
                <span v-if="data.hireable != null">
                    <font-awesome-icon :icon="['fas', 'fa-user-tie']"></font-awesome-icon>&nbsp; Available for hire
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    props: ["username"],
    data() {
        return {
            data: {}
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            const data = await this.$axios.$get(`https://api.github.com/users/${this.username}`);
            this.data = data;
        }
    }
}
</script>