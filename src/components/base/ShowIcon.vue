<template>
    <div :class="classList">
        <span @click="$emit('click', isShown)"><font-awesome-icon :icon="eye" /></span>
    </div>
</template>

<script>
export default {
    props: {
        classList: Array,
        isShown: Boolean,
    },
    data() {
        return {
            eye: 'eye-slash',
        }
    },
    watch: {
        isShown(value) {
            return value ? this.eye = 'eye-slash' : this.eye = 'eye';
        }
    }
}
</script>

<style scoped>
    .show-icon {
        height: 100%;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
    }

    span {
        cursor: pointer;
    }

</style>