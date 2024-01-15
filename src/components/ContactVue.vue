<template>
    <section>
        <div class="container">
            <h1>
                Lorem ipsum dolor sit amet.
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, odio?</p>
            <div class="contact">
                I am
                <SelectAll :options="userOptions" v-model="selectedUser" /> and I want
                <SelectAll :options="actionsOptions" v-model="selectedUser" />
                <LinkButton to="/what-we-do" title="Get involved" />
            </div>
        </div>
    </section>
</template>

<script setup>
import LinkButton from '../utils/LinkButton.vue';
import SelectAll from '../utils/SelectAll.vue';

let selectedUser = '';

const userOptions = ['individual', 'group', 'company'];

const actionsOptions = ['to learn', 'donate', 'volunteer'];
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    max-width: 1350px;
    width: 100%;
    margin: auto;
    background-color: rgb(214, 214, 214);
    padding: 4rem;
    color: black;
}

h1,
p {
    margin-bottom: 1.5rem;
}

.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 2.5rem 0rem;
    font-size: larger;
}

select {
    border: none;
    margin: 0 0.4rem;
    font-size: inherit;
    color: rgba(25, 75, 182, 0.808);
    text-decoration-line: underline;
}

a {
    font-size: 0.8rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    list-style-type: none;
    text-decoration: none;
    background-color: #991212;
    padding: 0.6rem 1rem;
    max-width: fit-content;
    border-radius: 30px;
}

a:hover {
    color: #ece9e9;
    background-color: #c45151;
    text-decoration: none;
}

@media screen and (max-width: 480px) {

    section {
        padding: 1rem;
    }
    .container {
        padding: 2rem;
        text-align: center;
    }

    .contact {
        flex-wrap: wrap;
        padding: 1.5rem 2rem;
        line-height: 1.8rem;
        font-size: 1.1rem;
    }

    select {
        margin: 0.4rem;
    }

    a {
        margin-top: 1rem;
        padding: 0.4rem 1.5rem;
    }
}
</style>