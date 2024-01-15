<template>
    <section>
        <div class="container">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, et!</p>
            <div class="cards">
                <div class="card" v-for="card in cards" :key="card.title">
                    <h2>{{ card.title }}</h2>
                    <p>{{ card.description }}</p>
                    <LinkButton :to="card.link" title="Learn more" class="a-card" />
                </div>
            </div>
            <LinkButton to="/what-we-do" title="More about what we do" />
        </div>
    </section>
</template>

<script setup>
import LinkButton from '../utils/LinkButton.vue';

const cards = [
    {
        title: 'Get online week',
        description: 'Lorem ipsum dolor sit amet.',
        link: '/what-we-do',
    },
    {
        title: 'Learn my way',
        description: 'Lorem ipsum dolor sit amet.',
        link: '/what-we-do',
    },
    {
        title: 'Make it click',
        description: 'Lorem ipsum dolor sit amet.',
        link: '/what-we-do',
    },
    {
        title: 'Digital you',
        description: 'Lorem ipsum dolor sit amet.',
        link: '/what-we-do',
    },
];
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    max-width: 1350px;
    width: 100%;
    margin: auto;
    background-color: rgba(18, 89, 122, 0.774);
    padding: 4rem;
    color: black;
}

section h1,
p {
    margin-bottom: 1.5rem;
    color: white;
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
    margin: auto;
    border-radius: 30px;
}

a:hover {
    color: #ece9e9;
    background-color: #991212;
    text-decoration: none;
}

.a-card {
    color: #991212;
    background-color: rgb(255, 255, 255);
    padding: 0.6rem 1rem;
    max-width: fit-content;
    border-radius: 30px;
    border: 0.15rem solid #00000083;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 3rem 0;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 270px;
    background-color: white;
    padding: 2rem 1rem;
    font-size: larger;
    margin: 1rem;
}

h2 {
    font-size: 1.2rem;
    color: black;
}

.card p {
    font-size: 0.8rem;
    color: black;
}

@media screen and (max-width: 480px) {

    section {
        padding: 1rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem 1.5rem;
    }

    h1, p {
        text-align: center;
    }

    .card {
        min-width: 310px
    }

}
</style>