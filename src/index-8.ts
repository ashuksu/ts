/*

// Discriminated Unions (размеченные объединения)

type ApiResponse = | { success: true; data: string } | { success: false; error: string }

// Type narrowing по дискриминатору

function handleiResponse(response: ApiResponse) {
    if (response.success) {
        console.log(response.data)
    } else {
        console.log(response.error)
    }
}

// дискриминатор
// success: true | false


type LoadingState =
    | { status: 'loading' }
    | { status: 'success'; data: string[] }
    | { status: 'error'; error: string }

function handleState1(state: LoadingState) {
    if (state.status === 'loading') {
        console.log('loading ...');
    }

    if (state.status === 'success') {
        console.log(state.data);
    }

    if (state.status === 'error') {
        console.log(state.error);
    }
}


// Exhaustiveness checking


function handleState2(state: LoadingState) {
    switch (state.status) {
        case 'loading':
            console.log('loading ...');
            break
        case 'error':
            console.log(state.error);
            break;
        case 'success':
            console.log(state.data);
            break
        default:
            const _exhaustiveCheck: never = state;
            return _exhaustiveCheck;
    }
}

type Shape =
    | { type: "circle"; radius: number }
    | { type: "square"; side: number }

function getArea(shape: Shape) {
    if (shape.type === 'circle') {
        return Math.PI * shape.radius ** 2;
    }

    return shape.side ** 2;
}


 */