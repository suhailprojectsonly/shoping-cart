 export default function formateCurrency(num) {
    return '₹ ' + Number(num.toFixed(1)).toLocaleString() +" ";

 }