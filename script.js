const inputColor = document.querySelector('#input-color')
const selection = document.querySelector('#selection')
const getColorBtn = document.querySelector('#get-color-btn')
const colors = document.querySelector('.colors')

let dataArr = []

getColorBtn.addEventListener('click', () => {
    const color = inputColor.value.slice(1,7)
    const option = selection.value
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${option}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const dataColors = data.colors
            dataArr = []
            for (const color of dataColors){
                dataArr.push(color.hex.value)
            }
            renderData(dataArr)
        })
})

const renderData = (data) => {
    let html = ''
    for (let i = 0; i < data.length; i++){
        html += `
    <div class="color${i+1}-grid">
        <div class="color${i+1}"></div>
        <div class="color-name">${data[i]}</div>
    </div>`
    }
    colors.innerHTML = html
    for (let i = 0; i < data.length; i++){
        document.querySelector(`.color${i+1}`).style.backgroundColor = data[i];
    }
}
