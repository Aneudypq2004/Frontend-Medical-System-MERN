export const formatMoney = amount => {
    return amount.toLocaleString('EN-US', {
        style: "currency",
        currency : 'USD'
    })
}

