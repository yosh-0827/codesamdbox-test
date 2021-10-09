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

/**
 * 配列をまとめる
 */
// const ary2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...ary3] = ary2;
// console.log(num1);
// console.log(num2);
// console.log(ary3);

//配列のコピー
// const ary4 = [10, 20];
// const ary6 = [...ary4]; //スプレッド構文で配列に入れることでコピーできる
// console.log(ary6);

//配列の結合
// const ary5 = [30, 40];
// const ary7 = [...ary4, ...ary5];
// console.log(ary7);

// MapやFilterの処理
// 従来の配列forループ
//const nameAry = ["田中", "山田", "前田"];
// for (let index = 0; index < nameAry.length; index++) {
//   console.log(nameAry[index]);
// }

// // Map
// const nameAry2 = nameAry.map((name) => {
//   return name;
// });
// console.log(nameAry2);
// // 省略版
// nameAry.map((name) => console.log(name));
// 省略版で番号管理したい場合
// 要素の番号は引数の２番目に入っている。
// nameAry.map((name, index) => console.log(`${index + 1}番目：${name}です。`));

/**
 * Filter (ある条件に一致したものだけ返却して、新しい配列を生成する関数のこと)
 */
// const numAry = [1, 2, 3, 4, 5];
// const newNumAry = numAry.filter((num) => {
//   //filterのリターンは条件式を記載する必要がある。
//   return num % 2 === 1;
// });
// console.log(newNumAry);

//指定以外の場合は違う中身を表示する
// const newNameAry = nameAry.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameAry);

/**
 * 三項演算子
 * ある条件？条件がtrueのとき：条件がfalseのとき;
 */
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // toLocaleString()は3桁くぎりのカンマ区切りにしてくれるやつ
// // 文字列に対しては有効にはならない
// console.log(num.toLocaleString());

// const num1 = "1300";
// const formattedNum =
//   typeof num1 === "number" ? num1.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));
