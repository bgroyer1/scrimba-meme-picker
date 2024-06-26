import { catsData } from "./catsData.js"
const emotionsRadioDiv = document.querySelector("#emotion-radios")
const getImageBtn = document.querySelector("#get-image-btn")
const gifsOnlyOption = document.querySelector("#gifs-only-option")
const memeModalInner = document.querySelector("#meme-modal-inner")
const memeModal = document.querySelector("#meme-modal")
const memeModalCloseBtn = document.querySelector("#meme-modal-close-btn")

emotionsRadioDiv.addEventListener("change", highlightCheckedOption)

memeModalCloseBtn.addEventListener("click", closeModal)

getImageBtn.addEventListener("click", renderCat)

function highlightCheckedOption(e) {
	const radioArray = document.getElementsByClassName("radio")
	for (let radio of radioArray) {
		radio.classList.remove("highlight")
	}
	document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function closeModal() {
	memeModal.style.display = "none"
}

function renderCat() {
	const catObject = getSingleCatObject()
	memeModalInner.innerHTML = `<img
                                    class="cat-img"
                                    src="./IMG/${catObject.image}"
                                    alt="${catObject.alt}"
                                    >`
	memeModal.style.display = "flex"
}

function getSingleCatObject() {
	let catsArray = getMatchingCatsArray()
	if (catsArray.length === 1) {
		return catsArray[0]
	} else {
		const randomNumber = Math.floor(Math.random() * catsArray.length)
		return catsArray[randomNumber]
	}
}

function getMatchingCatsArray() {
	if (document.querySelector("input[type='radio']:checked")) {
		const selectedRadio = document.querySelector(
			"input[type='radio']:checked"
		).value
		const isGif = gifsOnlyOption.checked
		const matchingCatsArray = catsData.filter((cat) => {
			if (isGif) {
				return cat.emotionTags.includes(selectedRadio) && cat.isGif
			} else {
				return cat.emotionTags.includes(selectedRadio)
			}
		})
		return matchingCatsArray
	}
}

/*the commented line is me experimenting with the Set function(is it a function?)
*/

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
