import C from "./constants"
import { v4 } from "uuid"

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        rating: 0,
        timestamp: new Date().toString()
    })

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export const sortColors = sortBy =>
    (sortBy === "rating") ?
        ({
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }) :
        (sortBy === "title") ?
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_TITLE"
            }) :
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_DATE"
            })