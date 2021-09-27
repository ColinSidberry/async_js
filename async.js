"use strict";

const BASE_URL = "http://numbersapi.com";
const num = 1;

let $container = $('#container');

// const url = `${BASE_URL}/1`;
let nums = [1,2,3,4].join(',');

async function getNumberFacts(nums){
    console.log('surl in getNumberFact: ',`${BASE_URL}/${nums}?json`);
    const resp = await axios({url:`${BASE_URL}/${nums}?json` ,
        method: 'get',
    });
    return resp.data;
}

async function pasteToDOM(){
    let numFacts = await getNumberFacts(nums);
    console.log('numFacts in the pasteToDOM: ', numFacts)
    for (let fact in numFacts){
        $container.append(`<div>${numFacts[fact]}</div>`);
    }
}

pasteToDOM();