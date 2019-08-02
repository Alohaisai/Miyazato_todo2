// console.log(!window.localStorage);
// localStorage.removeItem('task');

let data = [];

// クリックイベント
document.getElementById('add')
.addEventListener('click',
// 登録
  function(){
    const task = document.getElementById
    ('task').value;
// taskの値を配列dataに追加
    data.push(task.value);
// taskを追加
    createDOM(task.value);
// dataをローカルストレージに保存
    localStorage.setItem('task', JSON.stringify(data));
//タスクのvalueを初期化
    task.value= '';
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
    dataUpdated();
  })

  document.getElementById('list').appendChild(list);
}

function dataUpdated() {
  localStorage.setItem('task', JSON.stringify(data));
}
