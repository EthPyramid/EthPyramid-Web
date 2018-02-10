var headData = {
    title: "VuEthPyramid"
}

head = new Vue({
    el: "#app-head",
    data: headData
});

Vue.component( 'lang-select', {
    props: [ 'lang' ],
    template:
        '<img :src="icon"></img>\
        <select @change.passive="select()" :value="lang.current">\
            <option v-for="option in lang.options">{{ option.code }}</option>\
        </select>',
    methods: {
        select() {
            this.lang.current = this.$el.value;
        }
    },
    computed: {
        icon() {
            return 'images/' + this.lang.current + '.jpg';
        }
    }
});

Vue.component( 'app-header', {
    props: [ 'lang' ],
    template: '<div class="header"><lang-select :lang="lang"></lang-select></div>'
});


root = new Vue({
    el: '#app-root',
    data: {
        lang: {
            options: [
                { code: "UK" },
                { code: "AU" },
                { code: "FR" },
                { code: "DE" },
                { code: "ES" }
            ],
            current: "UK"
        }
    }
});
