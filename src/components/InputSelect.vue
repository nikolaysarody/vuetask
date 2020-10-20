<template>
    <div class="form-row">
        <div class="form-select">
            <select v-model.trim="title" :name="titleId" :id="titleId" @blur="dirty()">
                <option selected disabled>{{titleName}}</option>
                <option v-for="item in items" :key="item.value" :value="item.value">{{item.value}}</option>
            </select>
        </div>
        <p class="custom-p" :class="{hidden: ($v.title.$dirty && !$v.title.notDefault)}">Выберите тип</p>
    </div>
</template>

<script>
    import {} from 'vuelidate/lib/validators'

    export default {
        name: "InputSelect",
        data() {
            return {
                title: this.titleName,
            }
        },
        props: {
            titleName: String,
            titleId: String,
            items: Array,
            isRequired: Boolean,
            click: Boolean,
        },
        validations: {
            title: {
                notDefault() {
                    return !(this.title === this.titleName);
                }
            },
        },
        methods: {
            dirty() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                return this.$emit('required', this.title, this.titleId);
            }
        },
        watch: {
            click() {
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