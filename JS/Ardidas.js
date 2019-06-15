let burrito = []
let burritopraviagem 

function adicionarCesta(produto) {
    burrito.push(produto);
    alert("Seu burrito contem: " + burrito.toString())
    localStorage.setItem("burrito", JSON.stringify(burrito))
    carregarburrito()
}

function carregarburrito() {
    burrito = JSON.parse(localStorage.getItem('burrito'))
    burritopraviagem = burrito.length
    document.getElementById('nburrito').innerHTML = burritopraviagem

}