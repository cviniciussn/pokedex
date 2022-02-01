const colors = {
    fire: "#F76545",
    water: "#356c94",
    grass: "#70A83B",
    rock: "#A1A1A1",
    poison: "#A974BC",
    ground: "#9B897B",
    eletric: "#F7C545",
    normal: "#76AADB"
}

export const handleCardBackground = (color) => {
    let backgroundColor = ""

    if (color === "stile" || color === "dark" || color === "rock") {
        backgroundColor = colors.rock
    } else if (
        color === "grass" || color === "bug"
    ) {
        backgroundColor = colors.grass
    } else if (color === "ice" || color === "water") {
        backgroundColor = colors.water
    } else if (color === "fire" || color === "fighting" || color === "dragon") {
        backgroundColor = colors.fire
    } else if (color === "normal" || color === "gosth") {
        backgroundColor = colors.normal
    } else if (color === "poison" || color === "psychic" || color === "fairy" || color === "ghost") {
        backgroundColor = colors.poison
    } else if (color === "ground") {
        backgroundColor = colors.ground
    } else if (color === "electric") {
        backgroundColor = colors.eletric
    }

    return backgroundColor
}

export const handleBadge = (badge) => {
    let displayBadge
    if (badge === undefined) { displayBadge = "none" }
    return displayBadge
}