function halloween(date) {
    let month = date.getMonth();
    let dayOfMonth = date.getDate();

    if (month === 9 && dayOfMonth === 31) {
        return "Happy Halloween!";
    } else {
        return "Just another day";
    }

}

halloween(new Date("2013/10/31"));
halloween(new Date("2013/07/31"));
halloween(new Date("2011/10/12"));
halloween(new Date("2020/10/31"));