var result = window.prompt("Would you like Coffee, Tea or Water? ");

var orderItem = result;

switch (orderItem) {
    case 'Coffee':
        console.log('The order is Coffee');
        console.log('Total is $2.50');
        break;
    case 'Tea':
        console.log('The order is Tea');
        console.log('Total is $1.50');
        break;
    case 'Water':
        console.log('The order is Water');
        console.log('Total is $3.00');
        break;
    default:
        console.log("Wrong choice");

}