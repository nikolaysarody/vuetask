<template>
    <form class="form" @submit.prevent="clickHandler">
        <h3>Адрес</h3>
        <input-text v-bind:title-name="'Индекс'"
                    v-bind:title-id="'index'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Страна'"
                    v-bind:title-id="'country'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Область'"
                    v-bind:title-id="'region'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Город'"
                    v-bind:title-id="'city'"
                    v-bind:is-required=true
                    v-bind:click="click"
                    v-on:required="currentValue"
        ></input-text>
        <input-text v-bind:title-name="'Улица'"
                    v-bind:title-id="'street'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Дом'"
                    v-bind:title-id="'house'"
                    v-bind:is-required=false
        ></input-text>
        <div>
            <button class="form-btn" type="submit">Далее</button>
        </div>
    </form>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'
    import InputText from "@/components/InputText";

    export default {
        name: "Adress",
        components: {InputText},
        data() {
            return {
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                house: '',
                click: false
            }
        },
        validations: {
            city: {required},
        },
        methods: {
            currentValue(model, id) {
                if (id === 'city') {
                    this.city = model;
                }
            },
            clickHandler() {
                this.click = !this.click;
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                return this.$router.push({name: 'Passport'});
            }
        }
    }
</script>

<style scoped>

</style>