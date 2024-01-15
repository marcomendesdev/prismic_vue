<template>
    <section>
        <div class="container">
            <div class="image">
              
            </div>
            <div class="content">
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, animi.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
                <LinkButton to="/what-we-do" title="Learn more about us"/>
            </div>
        </div>

    </section>
</template>

<script setup>
import LinkButton from '../utils/LinkButton.vue';

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    min-height: 20vh;
    max-width: 1350px;
    width: 100%;
    margin: auto;
    background-color: #ffffff;
}
.image {
    max-width: 50vw;
    width: 100%;
    height: auto;
    background-image: url(./icons/liza.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 10%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 50vw;
    width: 100%;
    height: auto;
    background-color: #3b9278bb;
    color: #fff;
    margin-top: 0;
    padding: 4rem;
}

.content h1, p {
    margin-bottom: 1rem;
}

a {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    list-style-type: none;
    text-decoration: none;
    padding: 0.6rem 1rem;
    max-width: fit-content;
    border-radius: 30px;
    border: 0.15rem solid rgb(219, 219, 219);
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
        flex-direction: column;
        max-width: 100vw;
    }

    .image {
        max-width: 100vw;
        height: 50vh;
    }

    .content {
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 100vw;
        padding: 2rem;
    }
}
</style>