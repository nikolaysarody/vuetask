<template>
    <form class="form" @submit.prevent="clickHandler">
        <h3>Паспорт</h3>
        <input-select v-bind:title-name="'Тип документа'"
                      v-bind:title-id="'type'"
                      v-bind:items="type"
                      v-bind:is-required=true
                      v-bind:click="click"
                      v-on:required="currentValue"
        ></input-select>
        <input-text v-bind:title-name="'Серия'"
                    v-bind:title-id="'series'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Номер'"
                    v-bind:title-id="'number'"
                    v-bind:is-required=false
        ></input-text>
        <input-text v-bind:title-name="'Кем выдан'"
                    v-bind:title-id="'issuedBy'"
                    v-bind:is-required=false
        ></input-text>
        <input-date v-bind:title-name="'Дата выдачи'"
                    v-bind:title-id="'issuedDate'"
                    v-bind:is-required=true
                    v-bind:click="click"
                    v-on:required="currentValue"
        ></input-date>
        <div>
            <button class="form-btn" type="submit">Завершить</button>
        </div>
    </form>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'
    import InputSelect from "@/components/InputSelect";
    import InputText from "@/components/InputText";
    import InputDate from "@/components/InputDate";

    export default {
        name: "Passport",
        components: {InputDate, InputText, InputSelect},
        data() {
            return {
                series: '',
                number: '',
                issuedBy: '',
                issuedDate: '',
                type: [
                    {value: 'Паспорт'},
                    {value: 'Свидетельство о рождении'},
                    {value: 'Вод. удостоверение'},
                ],
                typeValue: 'Тип документа',
                click: false,
            }
        },
        validations: {
            issuedDate: {required},
            typeValue: {
                notDefault() {
                    return this.typeValue !== "Тип документа";
                }
            },
        },
        methods: {
            currentValue(model, id) {
                if (id === 'issuedDate') {
                    this.issuedDate = model;
                }
                if (id === 'type') {
                    this.typeValue = model;
                }
            },
            clickHandler() {
                this.click = !this.click;
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                alert('Новый клиент успешно создан!');
                return this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>