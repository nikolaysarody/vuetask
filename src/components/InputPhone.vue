<template>
    <div class="form-row">
        <input v-model.trim="title" type="" :id="titleId" autocomplete="off" @focus="phoneMask(title)" @keypress="phonePress"
               @blur="dirty()"
               :class="{ 'is-empty': check(title), 'not-empty' : check(!title), invalid: ($v.title.$dirty && !$v.title.required && isRequired) || ($v.title.$dirty && !$v.title.minLength && isRequired) || ($v.title.$dirty && !$v.title.maxLength && isRequired)}"><label
            class="form-label"
            :for="titleId">{{titleName}}</label>
        <p class="custom-p"  :class="{hidden: ($v.title.$dirty && !$v.title.required && isRequired) || ($v.title.$dirty && !$v.title.minLength && isRequired) || ($v.title.$dirty && !$v.title.maxLength && isRequired)}">Телефон должен состоять из 12 цифр</p>
    </div>
</template>

<script>
    import {maxLength, minLength, required} from 'vuelidate/lib/validators'

    export default {
        name: "InputPhone",
        data(){
            return{
                title: '',
            }
        },
        props:{
            titleName: String,
            titleId: String,
            isRequired: Boolean,
            click: Boolean,
        },
        validations: {
            title: {required, minLength: minLength(12), maxLength: maxLength(12)}
        },
        methods: {
            phonePress(e){
                if(!/\d/.test(e.key))
                    e.preventDefault();
            },
            phoneMask(input){
                if(!/^\+\d*$/.test(input))
                    this.title = '+7';
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