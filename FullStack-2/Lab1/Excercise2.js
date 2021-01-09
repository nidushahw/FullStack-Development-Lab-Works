function hasFriday13(month, year) {
    let date = new Date(year, month - 1, 13);
    let day = date.getDay();

    if (day === 5) {
        return "Friday 13th​";
    } else {
        return "Crystal Lake​​";
    }

}

hasFriday13(3, 2020);
hasFriday13(10, 2017);
hasFriday13(1, 1985);
