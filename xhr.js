
const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    xhr.responseType = "json";
    xhr.onload = () => {
        console.log(xhr.response)
        const so = xhr.response;
        for (let blog of so) {
            // console.log(blog)
            console.log(blog.name, blog.region, blog.subregion, blog.population, blog.flag)


        }

    };

    xhr.send();

};
getBlogs();

