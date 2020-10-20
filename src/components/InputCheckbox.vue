<template>
    <div class="form-row">
        <label class="custom-label" v-if="titleName">{{titleName}}</label>
        <ul class="checkbox">
            <li v-for="item in items" :key="item.id" @blur="dirty()"><input class="custom-checkbox" type="checkbox"
                                                                            v-model.trim="item.value"
                                                                            :id="item.id"/><label
                    class="label-checkbox" :for="item.id">{{item.name}}</label>
            </li>
            <p class="custom-p" :class="{hidden: ($v.items.$dirty && !$v.items.isAny && isRequired)}">Выберите
                что-нибудь</p>
        </ul>
    </div>
</template>

<script>
    import {} from "vuelidate/lib/validators";

    export default {
        name: "InputCheckbox",
        data() {
            return {
                title: this.titleName,
                itemValue: [],
                checks: [],
            }
        },
        props: {
            titleName: String,
            items: Array,
            isRequired: Boolean,
            click: Boolean,
        },
        validations: {
            items: {
                isAny() {
                    let that = this;
                    let count = 0;
                    that.items.forEach(function (item) {
                        if (item.value === true) {
                            count++;
                        }
                    })
                    return count > 0;
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
                return this.$emit('required', this.items);
            }
        }
    }
</script>

<style scoped>

</style>