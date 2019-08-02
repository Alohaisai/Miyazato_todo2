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
    document.getElementById
      ('task').value= '';
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

  let button = document.createElement('button');
  button.textContent = '削除';
  list.appendChild(button);


  button.addEventListener('click', function(){
    this.parentNode.remove();
    data.splice(data.indexOf(this.parentNode.textContent.slice(0, -2)),1);
    console.log(data);
    localStorage.setItem('task', JSON.stringify(data));
  })


  document.getElementById('list').appendChild(list);

}
