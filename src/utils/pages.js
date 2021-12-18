function getPagesQty(totalPages, limit) {
    return Math.ceil(totalPages / limit);
}

function getPagesArray(totalPages) {
    let res = [];
    for (let i=0; i<totalPages; i++) {
        res.push(i+1);
    }
    return res;
}

export { getPagesQty, getPagesArray };