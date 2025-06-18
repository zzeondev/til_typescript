let neverVar: never = 100;
let neverVar: never = true;
let neverVar: never = undefined;
let neverVar: never = null;


// 전달시 unknown 은 타입오류 발생
let testNum: number = neverVar;