const mockButton = document.querySelector('.button')
const mockList = document.querySelector('.list-products')

console.log(mockList)

mockButton.onclick = () => {
    mockList.style.display = "block";
    console.log(1)
}

console.log(mockButton)