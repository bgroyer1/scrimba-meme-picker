import { catsData } from "./catsData.js"

function getEmotionsArray(cats) {
	const emotionsArray = []
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
			emotionsArray.push(emotion)
		}
	}
	return emotionsArray
}

console.log(getEmotionsArray(catsData))

/*
function getEmotionsArray2(cats) {
    const emotionsArray = []
    for (let i = 0; i < cats.length; i ++) {
        for (let j = 0; j < cats[i].emotionTags.length; j ++) {
            emotionsArray.push(cats[i].emotionTags[j])
        }
    }
}
*/
