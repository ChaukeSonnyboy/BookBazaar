function getImgUrl (name) {
    return new URL(`/src/assests/books/${name}`, import.meta.url)
}

export { getImgUrl }
