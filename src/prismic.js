import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({ endpoint: "https://marco-prismic.cdn.prismic.io/api/v2" });

export default prismic;