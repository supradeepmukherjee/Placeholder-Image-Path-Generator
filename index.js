const select = document.querySelector('select')
const inputAll = document.querySelectorAll('input')
const img = document.querySelector('img')

const textArea = document.querySelector('textarea')
let URLobj = {}
const removeHash = (str) => {
    return str.replace('#', '')
}
const createImgPath = () => {
    URLobj.size = select.value
    URLobj.text = inputAll[0].value.split(' ').join('+')
    URLobj.BGcolor = removeHash(inputAll[1].value)
    URLobj.TextColor = removeHash(inputAll[2].value)
    let URLpath = `http://via.placeholder.com/${URLobj.size}/${URLobj.BGcolor}/${URLobj.TextColor}?text=${URLobj.text}`
    img.src = URLpath
    textArea.value = URLpath
    textArea.focus()
    textArea.select()
    navigator.clipboard.writeText(URLpath)
}
select.addEventListener('change', createImgPath)
inputAll.forEach(currElem => currElem.addEventListener('change', createImgPath))