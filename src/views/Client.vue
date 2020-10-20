<template>
    <form class="form" @submit.prevent="clickHandler">
        <h3>Создание клиента</h3>
        <input-text v-bind:title-name="'Фамилия'"
                    v-bind:title-id="'surname'"
                    v-bind:is-required=true
                    v-bind:click="click"
                    v-on:required="currentValue"
        ></input-text>
        <input-text v-bind:title-name="'Имя'"
                    v-bind:title-id="'name'"
                    v-bind:is-required=true
                    v-bind:click="click"
                    v-on:required="currentValue"
        ></input-text>
        <input-text v-bind:title-name="'Отчество'"
                    v-bind:title-id="'patronymic'"
                    v-bind:is-required=false
        ></input-text>
        <input-date v-bind:title-name="'Дата рождения'"
                    v-bind:title-id="'date'"
                    v-bind:is-required=true
                    v-bind:click="click"
                    v-on:required="currentValue"
        ></input-date>
        <input-phone v-bind:title-name="'Номер телефона'"
                     v-bind:title-id="'phone'"
                     v-bind:is-required=true
                     v-bind:click="click"
                     v-on:required="currentValue"
        ></input-phone>
        <input-select v-bind:title-name="'Пол'"
                      v-bind:title-id="'gender'"
                      v-bind:items="gender"
                      v-bind:is-required=false
        ></input-select>
        <input-checkbox v-bind:title-name="'Группа клиентов'"
                        v-bind:items="groups"
                        v-bind:is-required=true
                        v-bind:click="click"
                        v-on:required="currentValue"
        ></input-checkbox>
        <input-select v-bind:title-name="'Лечащий врач'"
                      v-bind:title-id="'doctor'"
                      v-bind:items="doctor"
                      v-bind:is-required=false
        ></input-select>
        <input-checkbox v-bind:items="sms"
                        v-bind:is-required="false"
        ></input-checkbox>
        <div>
            <button class="form-btn" type="submit">Далее</button>
        </div>
    </form>
</template>

<script>
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'
    import InputDate from "@/components/InputDate";
    import InputText from "@/components/InputText";
    import InputPhone from "@/components/InputPhone";
    import InputSelect from "@/components/InputSelect";
    import InputCheckbox from "@/components/InputCheckbox";

    export default {
        name: "ClientForm",
        components: {InputCheckbox, InputSelect, InputPhone, InputText, InputDate},
        data() {
            return {
                patronymic: '',
                date: '',
                surname: '',
                name: '',
                phone: '',
                gender: [
                    {value: 'Мужской'},
                    {value: 'Женский'}
                ],
                groups: [
                    {id: 'VIP', value: false, name: 'VIP'},
                    {id: 'problematic', value: false, name: 'Проблемные'},
                    {id: 'OMC', value: false, name: 'ОМС'}
                ],
                sms: [
                    {id: 'sms', value: false, name: 'Не отправлять смс'}
                ],
                doctor: [
                    {value: 'Иванов'},
                    {value: 'Захаров'},
                    {value: 'Чернышева'}
                ],
                click: false,
            }
        },
        validations: {
            surname: {required},
            name: {required},
            date: {required},
            phone: {required, minLength: minLength(12), maxLength: maxLength(12)},
            groups: {
                isAny() {
                    let count = 0;
                    this.groups.forEach(function(item){
                        if (item.value === true) {
                            count++;
                        }
                    })
                    return count > 0;
                }
            }
        },
        methods: {
            currentValue(model, id) {
                if (id === 'surname') {
                    this.surname = model;
                }
                if (id === 'name') {
                    this.name = model;
                }
                if (id === 'date') {
                    this.date = model;
                }
                if (id === 'phone') {
                    this.phone = model;
                }
            },
            clickHandler() {
                this.click = !this.click;
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                return this.$router.push({name: 'Address'});
            }
        }
    }

</script>
<style lang="scss" scoped>

</style>