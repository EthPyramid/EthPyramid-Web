var headData = {
    title: "VuEthPyramid"
}

head = new Vue({
    el: "#app-head",
    data: headData
});

Vue.component( "lang-select", {
    props: ['languages'],
    created: function() {
        console.log(this.$data);
    },
    template: '<select><option v-for="lang in languages">{{ lang.code }}</option></select>'
});

Vue.component( "app-header", {
    template: '<div class="header"><lang-select v-bind:languages="this.languages"></lang-select></div>'
});


root = new Vue({
    el: "#app-root",
    data: {
        languages: [
            { code: "en" },
            { code: "au" },
            { code: "fr" },
            { code: "de" },
            { code: "es" }
        ],
        currentLanguage: "fr"
    },
    updated: function() {
        console.log("ok");
    }
});
