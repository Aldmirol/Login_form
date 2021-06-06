<template>
    <input type="text"
        :class="classes"
        :placeholder="placeholder"
        v-maska="maskPattern"
        :maxlength="maxLength"
    >
</template>

<script>
import { maska } from 'maska';

export default {
    props: {
        classList: Array,
        placeholder: String,
        maskPattern: String,
        isHidden: Boolean,
        maxLength: Number
    },
    computed: {
        classes() {
            const classes = [...this.classList, this.isHidden ? 'bullet-text' : ''];

            return classes;
        }
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

    .bullet-text {
        font-family: 'bullet', sans-serif;
    }
</style>