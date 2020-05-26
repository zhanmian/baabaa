<template>
    <div v-html="alipay"></div>
</template>

<script>
export default {
    name: "Alipay",
    data() {
        return {
            alipay: ""
        }
    },
    created() {
        this.alipay = this.$route.query.alipay;
        this.$nextTick(()=> {
            document.forms[0].submit();
        })
    }
}
</script>