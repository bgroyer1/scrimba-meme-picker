import { catsData } from "./catsData.js"
const emotionsRadioDiv = document.querySelector("#emotion-radios")

/*the commented line is me experimenting with the Set function(is it a function?)
feel like it would make the code a lot cleaner but will do it as the course intends as im sure they structured it this way for a reason */

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
                        <div class="emotion-radios">
                            <input
                                type="radio"
                                name=${emotion}
                                value=${emotion}
                                id=${emotion}
                                >
                            <label for=${emotion}>${emotion}</label>
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
