function hasFreeShipping(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    console.log(sum);
    if (sum > 50) {
        return true;
    } else {
        return false;
    }
}

hasFreeShipping({ "masks": 5.99, "HDMI cable": 15.99 });
hasFreeShipping({ "XBOX Series X": 599.99 });
hasFreeShipping({ "Cards": 5.99, "Books": 25.99, "Yoga mat": 20.00 });
