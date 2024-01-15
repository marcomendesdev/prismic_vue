<template>
    <section>
        <div class="container">
            <div class="hero" v-if="isDesktop">
                <div class="cta">
                    <h1>Lorem ipsum dolor sit.</h1>
                </div>
                <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse quasi eos ducimus sint
                    fugiat fuga nam
                    debitis
                    dolore laborum!</div>
                <LinkButtonVue to="/what-we-do" title="Get involved now!" />
            </div>
        </div>
        <div class="hero-mobile" v-if="!isDesktop">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse quasi eos ducimus sint
                fugiat fuga nam
                debitis
                dolore laborum!</p>
            <LinkButtonVue to="/what-we-do" title="Get involved now!" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LinkButtonVue from '../utils/LinkButton.vue';

const isDesktop = ref(window.innerWidth > 480);

const updateWidth = () => {
    isDesktop.value = window.innerWidth > 480;
};

onMounted(async () => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    min-height: 20vh;
    max-width: 1350px;
    width: 100%;
    margin: auto;
    background-image: url(./icons/volunteer.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 5rem;
}

.cta {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    background-color: rgb(76, 141, 167);
    padding: 1rem;
    max-width: fit-content;
    margin-bottom: 1rem;
}

.content {
    font-size: 1rem;
    font-weight: 400;
    color: #16724c;
    background-color: rgb(255, 255, 255);
    padding: 1rem;
    max-width: 15vw;
    margin-bottom: 1rem;
}

a {
    font-size: 0.8rem;
    font-weight: bold;
    color: #991212;
    list-style-type: none;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    padding: 0.6rem 1rem;
    max-width: fit-content;
    border-radius: 30px;
}

a:hover {
    color: #ece9e9;
    background-color: #991212;
    text-decoration: none;
}

@media screen and (max-width: 480px) {

    section {
        padding: 1rem;
    }

    .container {
        padding: 2rem;
        height: 50vh;
    }

    .content {
        max-width: 100%;
    }

    .hero-mobile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 30vh;
        margin: auto;
        background-color: rgb(76, 141, 167);
        padding: 2rem;
    }

    .hero-mobile h1,
    p {
        margin-bottom: 1rem;
    }
}
</style>