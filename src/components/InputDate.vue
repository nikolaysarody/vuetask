<template>
    <div class="form-row">
        <input v-model.trim="title" type="text" :id="titleId" autocomplete="off" :max="(currentDate())"
               onblur="this.type = 'text'"
               onfocus="this.type = 'date'"
               @focus="currentString(title, 0)"
               @blur="currentString(title, 1)"
               :class="{ 'is-empty': check(title), 'not-empty' : check(!title), invalid: ($v.title.$dirty && !$v.title.required && isRequired)}"><label
            class="form-label"
            :for="titleId">{{titleName}}</label>
        <p class="custom-p"  :class="{hidden: ($v.title.$dirty && !$v.title.required && isRequired)}">Выберите дату</p>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        name: "InputDate",
        data() {
            return{
                title: '',
            }
        },
        props: {
            titleName: String,
            titleId: String,
            isRequired: Boolean,
            click: Boolean,
        },
        validations: {
            title: {required},
        },
        methods: {
            currentDate() {
                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth() + 1;
                let yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd
                }
                if (mm < 10) {
                    mm = '0' + mm
                }
                today = yyyy + '-' + mm + '-' + dd;
                return today;
            },
            currentString(input, method) {
                this.dirty();
                if (input !== '') {
                    if (method) {
                        input = input.replace(/\s+/g, '');
                        let array = input.split('-');
                        this.title = array[2] + ' . ' + array[1] + ' . ' + array[0];
                    } else {
                        input = input.replace(/\s+/g, '');
                        let array = input.split('.');
                        this.title = array[2] + '-' + array[1] + '-' + array[0];
                    }
                }
            },
            check(input) {
                return !input;
            },
            dirty(){
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                return this.$emit('required', this.title, this.titleId);
            }
        },
        watch: {
            click(){
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                return this.$emit('required', this.title, this.titleId);
            }
        }
    }
</script>

<style scoped>

</style>