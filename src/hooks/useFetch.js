function useFetch(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return console.log(json);
        });
}
export default useFetch