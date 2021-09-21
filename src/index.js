/**
 * const letなどの変数宣言
 */

// var vani1 = "var変数";
// console.log(vani1);

// // var変数は上書き可能
// vani1 = "var変数はは上書き可能";
// console.log(vani1);

// // var変数は再宣言可能
// var vani1 = "var変数を再宣言";
// console.log(vani1);

// let val2 = "let変数";
// console.log(val2);

// // let は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // エラーがでる
// let val2 = "let変数を再宣言";

//const val3 = "const変数";
//console.log(val3);

// const 変数は上書き不可
// エラーでる
// val3 = "const変数を上書き";

//const val3 ~ "const変数を再宣言します";

// オブジェクトの場合はCONSTをいじれる
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey"); //apeendがpush
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じぇけぇ";
// const age = 28;
//　私の名前はじぇけぇです。年齢は28歳です

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// テンプレート文字列はバッククオート「``」を用いる
// バッククオートはShift + @ でできる
// 文字列の中でJSを使いたいときは${変数}でいける
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("あああああ"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// //処理が一行で完結するときの書き方、｛｝とリターンを省略できる
// const func3 = (str) => str;
// console.log(func2("ああああい"));

// //二つの引数
// const func33 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func33(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です年齢は${age}です`;
// console.log(message2);

//配列の分割代入

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。\n 年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。\n年齢は${age}です・。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 * 「...」のようにドットが3つ続くもの
 * 配列の中身を一個ずつ取り出してくれる
 */
//配列の展開
// const ary1 = [1, 2];
// console.log(ary1);
// console.log(...ary1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(ary1[0], ary1[1]);
// sumFunc(...ary1);
