<template>
    <div :class="currentClasses">
        <img class="country-image" src="../../static/images/Flag_of_Russia.svg" alt="Russian flag">
        <span>Russia(Россия)</span>
        <span class="prefix">+7</span>
    </div>
</template>

<script>
export default {
    props: {
        classList: Array,
        isActive: Boolean
    },
    data() {
        return {
            classes: null
        }
    },
    computed: {
        currentClasses() {
            const classes = [...this.classList, this.isActive ? 'is-active' : ''];

            return classes;
        }
    },
    watch: {
        classList(value) {
            return this.classes = value;
        }
    }
}
</script>

<style scoped>
    .hidden-list {
        display: none;
    }

    .country-image {
        margin-right: 4px;
    }

    .prefix{
        color: #757F86;
    }

    .is-active {
        height: 35px;
        width: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 90%;
        left: 3%;
        background-color: #ffffff;
    }
</style>