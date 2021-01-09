var starWarsRelations = function (name) {
    if (name === "Darth Vader") {
        return "Luke, I am your Father.";
    } else if (name === "Leia") {
        return "Luke, I am your sister."
    } else if (name === "R2D2") {
        return "Luke, I am your droid."
    } else {
        return "No Relation to Luke"
    }
}

starWarsRelations("Darth Vader");
starWarsRelations("Leia");
starWarsRelations("R2D2");
starWarsRelations("R12");