const colors = ["red", "green", " blue"];

const capitalizedColors = () => {
    return colors.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
}

console.log(capitalizedColors());