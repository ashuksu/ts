/*

// # Generic-function

// works with different types.
// It is logically universal.


function reeat<T>(value: T, times: number): T[] {
    const result: T[] = [];

    for (let i = 0; i < times; i++) {
        result.push(value);
    }

    console.log(result);
    return result;
}


// const numbers = reeat(5, 3); // numbers → number[]
// const strings = reeat('hi', 2); // strings → string[]



function identity<T>(value: T): T {
    return value;
}


// # Generic-interface


interface Box<T> {
    value: T
}

const numberBox: Box<number> = {
    value: 10, // Box<number> → value: number
}

const stringBox: Box<string> = {
    value: 'hello' // Box<string> → value: string
}


// ---------------------


interface ApiResult<T> {
    data: T
    error: string | null
}


function fetchData<T>(data: T): ApiResult<T> {
    return {
        data,
        error: null
    }
}

// ---------------------


const result2 = fetchData(['a', 'b']); // result: ApiResult<string[]>, T = string[]

// console.log(result2); // result2.data → string[]

 */