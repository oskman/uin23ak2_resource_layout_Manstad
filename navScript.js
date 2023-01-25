
function showData(id) {
    let dataHTML = ""
    const resIndex = resources.findIndex(article => article.category === id)
    dataHTML = `      
    
        <header>
            <h3>${resources[resIndex].category}</h3>
        </header>
        <p>
            ${resources[resIndex].text}
        </p>
        <ol id="list"></ol>   
    `
    document.getElementById("mainArticle").innerHTML = dataHTML

    var list = document.getElementById("list")

    resources[resIndex].sources.map(obj => {var newLi = document.createElement("li") 
    var link = document.createElement("a")
    link.appendChild(document.createTextNode(obj.title))
    link.title = obj.title
    link.href = obj.url
    newLi.appendChild(link)
    list.appendChild(link)})
    
}