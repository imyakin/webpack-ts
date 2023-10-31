const num: number = 99;
console.log(num);

const woof = (smth: any) => {
    console.log(smth?.one?.two)
}

woof(0)