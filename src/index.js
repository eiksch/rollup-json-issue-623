import dictFromJson from './dict.json';

let dictFromJs = {
    "jsKey": "resultJs"
}

class Sample {
    translateFromJson(key) {
        return dictFromJson[key] ?? key;
    }

    translateFromJs(key){
        return dictFromJs[key] ?? key;
    }
}

export const SampleInstance = new Sample();

//will fail, terser will mangle props of json dictionary because they are not quoted
let resultFromJson = SampleInstance.translateFromJson('jsonKey');
console.assert( resultFromJson === 'resultJson', `translation: ${resultFromJson}, source: json`);

//will success, I quoted props by myself in JS, terser will not mangle them
let resultFromJs = SampleInstance.translateFromJs('jsKey');
console.assert( resultFromJs === 'resultJs', `translation is ${resultFromJs}, source: js`);
