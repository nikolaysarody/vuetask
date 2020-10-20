<template>
    <div class="form-row">
        <input v-model.trim="title" type="text" :id="titleId" autocomplete="off"
               :class="{ 'is-empty': check(title), 'not-empty' : check(!title), invalid: ($v.title.$dirty && !$v.title.required && isRequired)}"
               @blur="dirty()"
        ><label
            class="form-label"
            :for="titleId">{{titleName}}</label>
        <p class="custom-p"  :class="{hidden: ($v.title.$dirty && !$v.title.required && isRequired)}">{{titleName}} не может быть пустой</p>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        name: "InputText",
        data(){
            return {
                title: '',
            }
        },
        props: {
            titleName: String,
            titleId: String,
            isRequired: Boolean,
            click: Boolean,
        },
        methods: {
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
        validations: {
            title: {required},
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