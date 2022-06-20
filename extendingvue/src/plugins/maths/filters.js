export default {
    currency: function (value) {
        return new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN"
        }).format(value);
    },
    noDecimal: function(value) {
        return Number(value).toFixed(0);
    }
}