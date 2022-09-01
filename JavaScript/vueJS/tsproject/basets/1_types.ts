const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
let num: string | number = 4e2;
num = 'sdgfsdfg'

const str: string = 'Hello TypeScript'

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7]
const numbArr: Array<number> = [1, 2, 3, 4, 5, 6, 7]
const strArr: string[] = ['hello', 'world']

//Tuple
const contact: [string, number] = ['Maxim', 2431960]

//Any
let variable: any = 42;
variable = []

// Function
const sayMyName = (name: string): void => {
    console.log(name)
}
sayMyName('Алексей')

// Never
function throwError(message: string): never {
    throw new Error(message)
}
function neverEnd(message: string): never {
    while (true) {
        console.log(message)
    }
}

// Type
type Login = string

const login: Login = 'dfgdf';

type ID = string | number
const id1: ID = 42
const id2: ID = '42'
// const id3: ID = true