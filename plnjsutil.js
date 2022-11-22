/**
 * 
 * @param {HTMLElement} element 
 */
const removeAllChildNodes = (element) => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


/**
 * 
 * @param {number} max 
 * @returns {number} 0 ~ max - 1の値
 */
 const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


/**
 * 
 * @param {Array} array 
 * @param {Number} number 
 * @returns {Array<Array>}
 */
const sliceByNumber = (array, number) => {
    const length = array.length;

    const slicedArray = new Array(length)
                                 .fill()
                                 .map((_, i) => 
                                    array.slice(i * number, (i + 1) * number)
                                 );

    return slicedArray;
}


/**
 * 
 * @param {Array} array 
 */
const shuffleArray = (array) => {
    for(let index = array.length - 1; index > 0; index--) {
        const target = Math.floor(Math.random() * (index + 1));
        [array[index], array[target]] = [array[target], array[index]];
    }
}


/**
 * 
 * @param {Array} array
 * @returns {any} dictionary  
 */
const countArrayElements = (array) => {
    const mostCommons = array.reduce(
        (prev, curr) => ({
            ...prev,
            [curr]: 1 + (prev[curr] || 0),
        }),
        {}
    );

    return mostCommons;
}


/**
 * 
 * @param {string} url 
 * @param {string} concat 
 * @returns {string} resolvedUrl - URL where the argument url and concat is resolved
 */
const concatAndResolveUrl = (url, concat) => {
    let url1 = url.split('/');
    let url2 = concat.split('/');
    let url3 = [ ];

    for (let i = 0, l = url1.length; i < l; i ++) {
        if (url1[i] == '..') {
            url3.pop();
        } else if (url1[i] == '.') {
            continue;
        } else {
            url3.push(url1[i]);
        }
    }

    for (let j = 0, l = url2.length; j < l; j ++) {
        if (url2[j] == '..') {
            url3.pop();
        } else if (url2[j] == '.') {
            continue;
        } else {
            url3.push(url2[j]);
        }
    }
    
    return url3.join('/');
}


/**
 * 
 * @param {string} url - 
 */
const jumpPage = (url) => {
    location.href = url
}


/**
 * 
 * @param {string} path - Path of JSON to be read 
 * @returns {any | Array<any>} Object read from JSON
 */
const fetchJson = async (path) => {
    const response = await fetch(path)
                                .catch(err => {
                                    console.error(err);
                                });
    const jsonData = await response.json();

    return jsonData;
}


/**
 * This function calculates the difference between nowDate and the targetDate
 * 
 * @param {Date} nowDate 
 * @param {Date} targetDate 
 * @returns {number} Difference between nowDate and targetDate  
 */
const showDiffDate = (nowDate, targetDate) => {
    const nowTime = nowDate.getTime();
    const targetTime = targetDate.getTime();

    const diffMSec = targetTime - nowTime;
    const diffDays = diffMSec / (1000 * 60 * 60 * 24);
    const showDays = Math.ceil(diffDays); 

    return showDays
}


/**
 * This function calculates the difference between now date and the targetDate
 * 
 * @param {Date} targetDate 
 * @returns {number} Difference between now date and targetDate  
 */
const showDiffNowDate = (targetDate) => {
    const showDays = showDiffDate(new Date(), targetDate)
    return showDays
}
