<template>
    <select v-model="selected">
        <option value="" disabled selected>select</option>
        <option v-for="option in options" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
});

let selected = ref(props.modelValue);

watchEffect(() => {
    selected.value = props.modelValue;
});

const emit = defineEmits(['update:modelValue']);

watchEffect(() => {
    emit('update:modelValue', selected.value);
});
</script>

<style scoped></style>