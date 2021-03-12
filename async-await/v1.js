const morningRoutineSync = (startTime) => {
    const step1FinishTime = shower(startTime);
    const step2FinishTime = eatBreakfast(step1FinishTime);
    const step3FinishTime = getDressed(step2FinishTime);
    const step4FinishTime = putOnMakeup(step3FinishTime);
    const step5FinishTime = readNews(step4FinishTime);
    return step5FinishTime;
};


const morningRoutine = async(startTime) => {
    const step1FinishTime = await shower(startTime);
    const step2FinishTime =  eatBreakfast(step1FinishTime);
    const step3FinishTime =  getDressed(step2FinishTime);
    const step4FinishTime =  putOnMakeup(step3FinishTime);
    const step5FinishTime =  readNews(step4FinishTime);
    return step5FinishTime;
};



const shower = async startTime => {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(() => myResolve(1), 2000);
    });

    let val = await myPromise;
    console.log(val + ' shower');
    return val;
};

const eatBreakfast = step1FinishTime => {
    console.log("2 eatBreakfast");
    return 2;
};

const getDressed = step2FinishTime => {
    console.log("3 getDressed");
    return 3;
};

const putOnMakeup = step3FinishTime => {
    console.log("4 putOnMakeup");
    return 4;
};

const readNews = step4FinishTime => {
    console.log("5 readNews");
    return 5;
};

morningRoutine(0);





async function test() {
    return 42;
}

await test(); // returns 42
test(); // it returns a resolved promise

async function espera() {
    let val = await test();
    console.log(val);
    return val;
}

espera(); // returns a resolved promise
await espera(); // returns 42

// https://lenguajejs.com/javascript/asincronia/async-await/