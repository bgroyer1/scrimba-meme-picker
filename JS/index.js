import { catsData } from "./catsData.js"
const emotionsRadioDiv = document.querySelector("#emotion-radios")
const getImageBtn = document.querySelector("#get-image-btn")
const gifsOnlyOption = document.querySelector("#gifs-only-option")



getImageBtn.addEventListener("click", renderCat)

function renderCat() {
    getSingleCatObject()
}

function getSingleCatObject() {
    let catsArray = getMatchingCatsArray()
    if (c)
}

function getMatchingCatsArray(){
    if (document.querySelector("input[type='radio']:checked")) {
        const selectedRadio = document.querySelector("input[type='radio']:checked").value
        const isGif = gifsOnlyOption.checked
        const matchingCatsArray = catsData.filter((cat) => {
            if (isGif)  {
                return cat.emotionTags.includes(selectedRadio) && cat.isGif
            } else {
                return cat.emotionTags.includes(selectedRadio)
            } 
        })
        return matchingCatsArray
    }
}

emotionsRadioDiv.addEventListener("change", highlightCheckedOption)

function highlightCheckedOption(e) {
    const radioArray = document.getElementsByClassName("radio")
    for (let radio of radioArray) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

/*the commented line is me experimenting with the Set function(is it a function?)
feel like it would make the code a lot cleaner but will do it as the course intends as im sure they structured it this way for a reason */

//update: the set method wasnt any cleaner. Ill look into it and see what the benefits of set vs include aref

function getEmotionsArray(cats) {
	const emotionsArray = []
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
		}
	}
	// let sortedEmotionsArray = [...new Set(emotionsArray)]
	// return sortedEmotionsArray
    return emotionsArray
}

function renderEmotionRadios(cats) {
	let radioHTML = ""
	let emotionsArray = getEmotionsArray(cats)
	for (let emotion of emotionsArray) {
		radioHTML += `
                        <div class="radio">
                            <label for=${emotion}>${emotion}</label>
                            <input
                                type="radio"
                                name="emotion"
                                value=${emotion}
                                id=${emotion}
                                >
                        </div>
                        `
	}
	emotionsRadioDiv.innerHTML = radioHTML
}

renderEmotionRadios(catsData)

/*
this is the original for loop, which the video demonstrated to compare how much simpler the syntax of the for-of loop is


function getEmotionsArray2(cats) {
    const emotionsArray = []
    for (let i = 0; i < cats.length; i ++) {
        for (let j = 0; j < cats[i].emotionTags.length; j ++) {
            emotionsArray.push(cats[i].emotionTags[j])
        }
    }
}
*/
