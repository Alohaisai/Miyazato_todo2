// console.log(!window.localStorage);
// localStorage.removeItem('task');

let data = [];

// クリックイベント
document.getElementById('add')
.addEventListener('click',
// 登録
  function(){
    data.push(document.getElementById
      ('task').value);
    createDOM(document.getElementById
      ('task').value);
      console.log(data);
    localStorage.setItem('task', JSON.stringify(data));
  }
);

// 出力
data = JSON.parse(localStorage.getItem('task'));
// document.getElementById('list')
// .textContent = data.join(',');


// dataに格納されたHTMLを描画する
for (const value of data) {
  createDOM(value);
}

// HTMLを作成する
function createDOM( value ) {
  let list = document.createElement('li');
  list.textContent = value;
  document.getElementById('list').appendChild(list);

}
