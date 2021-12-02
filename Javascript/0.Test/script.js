
// panelクラスを取得
const panels = document.querySelectorAll('.panel')

// 配列で要素を取得できるのでループで回す
panels.forEach((panel) => {
    // 取得した要素に対してclickイベントを付与する
    panel.addEventListener('click', () => {
        // クリックした要素に対して、activeクラスを付与する
        // これで要素が広がる
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        // activeクラスを削除する(ある場合)
        panel.classList.remove('active')
    })
}