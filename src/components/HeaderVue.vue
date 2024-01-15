<template>
    <header>
        <section class="top">
            <div class="top">
                <div class="search-container">
                    <img src="./icons/search.svg" alt="img">
                    <input type="search" id="gsearch" name="gsearch" placeholder="Search">

                </div>
                <div class="top-btn">
                    <button class="learn">
                        Learn
                    </button>
                    <button>
                        Donate
                    </button>
                </div>
            </div>

        </section>
        <section class="logo">
            <div class="logo">
                <img src="../components/icons/logo.png" alt="logo" >
                <div>
                    <img v-if="isMobile && !isMenuOpen" src="./icons/menu.svg" alt="menu" @click="isMenuOpen = !isMenuOpen">
                    <img v-else-if="isMobile && isMenuOpen" src="./icons/close.svg" alt="close"
                        @click="isMenuOpen = !isMenuOpen">
                    <nav v-show="isMobile ? isMenuOpen : true">
                        <ul>
                            <li v-for="link in links" :key="link.name">
                                <LinkButton :to="link.path" :title="link.name" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </section>
    </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import LinkButton from '../utils/LinkButton.vue';

let isMobile = ref(false);
let isMenuOpen = ref(false);

const checkWidth = () => {
    isMobile.value = window.innerWidth <= 810;
};

onMounted(() => {
    window.addEventListener('resize', checkWidth);
    checkWidth();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWidth);
});

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'What we do',
        path: '/what-we-do',
    },
    {
        name: 'The digital divide',
        path: '#',
    },
    {
        name: 'Get involved',
        path: '#',
    },
    {
        name: 'Our network',
        path: '#',
    },
    {
        name: 'Insights',
        path: '#',
    },
];
</script>

<style scoped>
.search-container {
    display: flex;
    align-items: center;
    max-width: 7rem;
    width: 100%;
}

.search-container img {
    margin-right: -6rem;
}

img {
    width: 1.2rem;
    height: 1.2rem;
    z-index: 10;
}

section.top {
    background-color: #f5f5f5;
    border-bottom: 0.2rem solid rgb(219, 219, 219);
}

div.top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 1350px;
    margin: auto;
    height: 3rem;
    padding-left: 6rem;
    padding-right: 6rem;
}

input[type=search] {
    max-width: 10rem;
    width: 100%;
    padding: 0.6rem 0.7rem;
    margin-top: auto;
    border-top: none;
    border-bottom: none;
    border-right: 0.2rem solid rgb(219, 219, 219);
    border-left: 0.2rem solid rgb(219, 219, 219);
    background-color: #f5f5f5;
    font-size: 0.9rem;
    font-weight: 600;
}

.top-btn {
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: auto;
}

button {
    box-sizing: border-box;
    max-width: 100%;
    width: 7rem;
    width: 6rem;
    padding: 0.6rem 0.7rem;
    margin-top: auto;
    border: none;
    background-color: #ad0505;
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    bottom: -0.2rem;
    border-bottom: 0.2rem solid #ad0505;
}

button:hover {
    background-color: #e60000;
}

.learn {
    margin-right: 0.1rem;
    border-bottom: 0.2rem solid rgb(54, 163, 90);
    background-color: #cacaca;
    color: black;
    bottom: -0.2rem;
}

.learn:hover {
    background-color: #5f6965;
    color: rgb(221, 221, 221);
}

section.logo {
    width: 100%;
    background-color: #f5f5f5;
}

div.logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1350px;
    margin: auto;
    background-color: #f5f5f5;
    height: 5rem;
    padding-left: 6rem;
    padding-right: 6rem;
}

div.logo img {
    width: 5rem;
    height: auto;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    padding: 0.5rem;
}

a {
    text-decoration: none;
    color: black;
    font-size: 0.9rem;
    font-weight: 600;
}

a:hover {
    border-bottom: 0.2rem solid rgb(54, 163, 90);
}

@media (max-width: 480px) {
    section.top {
        width: 100vw;
    }

    div.top {
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: 100%;
        height: 3rem;
        padding-left: 0rem;
        padding-right: 0rem;
    }

    .search-container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .search-container img {
        margin-left: 5rem;
    }

    img {
        width: 1rem;
        height: 1rem;
        z-index: 10;
    }

    div.logo {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    div.logo img {
        width: 2.5rem;
        height: auto;
    }

    nav {
        position: absolute;
        right: 0;
        background-color: #e7e7e7;
        width: 50%;
        padding: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        list-style-type: none;
        margin: 0;
        padding: 0;
        z-index: 10;
    }
}

@media (max-width: 810px) {
    section.top {
        width: 100vw;
    }

    div.top {
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: 100%;
        height: 3rem;
        padding-left: 0rem;
        padding-right: 0rem;
    }

    .search-container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .search-container img {
        margin-left: 5rem;
    }

    img {
        width: 1rem;
        height: 1rem;
        z-index: 10;
    }

    div.logo {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    div.logo img {
        width: 2.7rem;
        height: auto;
    }

    nav {
        position: absolute;
        right: 0;
        background-color: #e7e7e7;
        width: 50%;
        padding: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        list-style-type: none;
        margin: 0;
        padding: 0;
        z-index: 10;
    }
}
</style>