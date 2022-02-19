const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        const response = await fetch(url);
        const users = await response.json();

        let ul = document.createElement("ul");
        document.getElementById("post-data").appendChild(ul);

        users.forEach((item) => {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML += `
                <p><b>${item.title}</b><br>${item.body}</p>
            `
        });
    }catch(error){
        return error;
    };
};