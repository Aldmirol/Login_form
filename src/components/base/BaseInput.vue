<template>
    <input type="text"
        :class="classList"
        :placeholder="placeholder"
        v-maska="maskPattern"
    >
</template>

<script>
import { maska } from 'maska';

export default {
    props: {
        classList: Array,
        placeholder: String,
        maskPattern: String,
    },
    directives: { maska },
}
</script>

<style scoped>
    .login-input {
        height: 100%;
        width: 75%;
        padding: 0;
        padding-left: 4px;
        font-size: 1.2rem;
        border: none;
        outline: none;
    }
</style>