<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout'

    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main') + '-layout';
            }
        },
        components: {
            MainLayout,
        }
    }

</script>

<style lang="scss">
    html {
        font-family: 'Roboto', sans-serif;
    }

    .form {
        max-width: 500px;
        padding: 50px 30px 30px;
        margin: 50px auto 30px;
        background: white;

        h3 {
            position: relative;
            margin: 0 0 40px;
            text-align: center;
            color: #189ab4;
            font-size: 30px;
            font-weight: normal;
        }
    }

    * {
        box-sizing: content-box;
    }

    .form-row {
        position: relative;
        margin-bottom: 25px;

        .custom-p {
            display: none;

            &.hidden {
                display: flex;
                font-size: 14px;
                color: red;
            }
        }

        ul {
            &.checkbox {
                margin: 0;
                padding: 0;
                width: 100%;
                list-style: none;

                li {
                    border: 1px transparent solid;
                    display: inline-block;
                    width: 12em;
                }
            }
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: 0;
            box-shadow: none;
            border: 0 !important;
            background: #D4F1F4;
            background-image: none;
            flex: 1;
            padding: 0 .5em;
            color: #05445E;
            cursor: pointer;
            font-size: 18px;

            &::-ms-expand {
                display: none;
            }
        }

        .form-select {
            position: relative;
            display: flex;
            width: 100%;
            height: 3em;
            line-height: 3;
            background: #2c3e50;
            overflow: hidden;

            &::after {
                content: '\25BC';
                position: absolute;
                top: 0;
                right: 0;
                padding: 0 1em;
                background: #D4F1F4;
                cursor: pointer;
                pointer-events: none;
                -webkit-transition: .25s all ease;
                -o-transition: .25s all ease;
                transition: .25s all ease;
                color: #05445E;
            }

            &:hover::after {
                color: #189AB4;
            }
        }

        .custom-label {
            display: flex;
            margin-bottom: 1em;
            font-size: 18px;
            color: #05445E;
        }

        .custom-checkbox {
            position: absolute;
            opacity: 0;


            + .label-checkbox {
                display: flex;
                font-size: 16px;
            }

            + .label-checkbox::before {
                content: '';
                display: inline-block;
                width: 1em;
                height: 1em;
                flex-shrink: 0;
                flex-grow: 0;
                border: 1px solid #adb5bd;
                border-radius: 0.25em;
                margin-right: 0.5em;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 50% 50%;


            }

            &:checked + .label-checkbox::before {
                border-color: #05445e;
                background-size: 13px;
                background-image: url("https://img.icons8.com/metro/452/checkmark.png");
            }
        }

        input {
            display: block;
            width: 100%;
            padding: 0 0;
            line-height: 40px;
            background: none;
            border-width: 0;
            border-bottom: 2px solid #189ab4;
            transition: all 0.2s ease;
            font-size: 18px;
            font-family: 'Roboto', sans-serif;

            &.not-empty, &:focus {
                outline: 0;
                border-color: #05445e;
            }

            &.invalid {
                outline: 0;
                border-color: red;
            }

            &.not-empty, &.is-empty:focus {
                + .form-label {
                    transform: translateY(-60px);
                    margin-left: -13px;
                    font-size: 14px;
                    font-weight: 400;
                    outline: 0;
                    color: #05445e;
                    left: 13px;
                }
            }

            &.is-empty {
                + .form-label {
                    position: absolute;
                    left: 0;
                    color: #9d959d;
                    font-size: 18px;
                    font-weight: 300;
                    transform: translateY(-35px);
                    transition: all 0.2s ease;
                }
            }
        }

        .form-label {
            margin-left: 0;
            position: absolute;
            left: 13px;
            color: #9d959d;
            font-weight: 300;
            transform: translateY(-35px);
            transition: all 0.2s ease;
        }

        .form-label-radio {
            position: absolute;
            color: #9d959d;
            font-size: 20px;
            font-weight: 300;
            left: 13px;
            transform: translateY(-35px);

            &.not-empty {
                color: #05445e;
            }

        }

        .form_radio_btn {
            display: inline-block;
            margin-right: 10px;
            float: right;

            input[type=radio] {
                display: none;

                &:checked {
                    + .form-label-btn {
                        background: #D4F1F4;
                        color: #05445e;
                    }
                }
            }

            .form-label-btn {
                transform: translateY(-41px);
                display: inline-block;
                cursor: pointer;
                padding: 0 15px;
                line-height: 34px;
                border: 1px solid #999;
                border-radius: 6px;
                user-select: none;
                font-size: 18px;
                font-weight: 300;
                color: #189ab4;

                &:hover {
                    color: #9d959d;
                }
            }
        }
    }

    .form-btn {
        width: 96%;
        display: inline-block;
        left: 50%;
        margin-right: -50%;
        cursor: pointer;
        line-height: 34px;
        border: 0;
        border-radius: 6px;
        font-size: 18px;
        font-weight: 300;
        color: #05445e;
        background-color: #D4F1F4;

        &:hover {
            color: #9d959d;
        }
    }
</style>
