import React from "react";

const Hero = () => {
    return (
        <section className = "hero is-success">
            <div className = "hero-body">
                <div className = "container">
                    <h1 className = "title">初めてのページ作り </h1>
                    <h2 className = "subtitle">2020/6/4〜</h2>
                </div>
            </div>
        </section>
    );
};

const Message = () => {
    return (
        <article className="message">
            <div className="message-header">
                <p>注意</p>
                <button className="delete is-medium" aria-label="delete"></button>
            </div>
            <div className = "message-body">
                 このページは<strong>未完成</strong>です。
            </div>
        </article>
    );
}

const Count = () => {
    return (
        <nav className = "level">
                <dvi class = "level-item has-text-centered">
                    <dvi>
                        <p class = "heading">ページ作りに取り組んだ日数合計</p>
                        <p class = "title">1</p>
                    </dvi>
                </dvi>
        </nav>
    );
}

const FirstWord = () => {
    return (
        <footer className = "footer">
            <dvi className = "content has-text-centered">
                <p>
                こんにちわ、miuraです。
                このページはCSSフレームワーク Bulmaを使用してページが作れることを目標としています。
                まだ完成像は考えていないのですが、学んだ知識を組み合わせて最終的にはちゃんとしたページを作りたいと思っています。
               （暖かく見守っていてください。）そのため、ページ内容が次々と変わります。
                </p>
            </dvi>
        </footer>
    );
}

const Diary = () => {
    return (
        <article className = "message is-dark has-text-centered">
            <div className = "message-body">
                メモ：今回はとにかく試しただけです。(6/4)
            </div>
        </article>
    );
}

const Menu = () => {
    return (
        <aside className = "menu">
            <p className = "menu-label-color">メニュー</p>
            <ul className = "menu-list">
                <li><a>その１</a></li>
                <li><a>その２</a></li>
                <li><a>その３</a></li>
            </ul>
        </aside>
    );
}

const Body1 = () => {
    return (
    <section className = "section">
        <div className = "container">
            <h2 className = "subtitle">（その１） ボタンの表示をしてみました。</h2>
            <p>あなたの性別であるボタンをクリックしてください。</p>
            <button className = "button is-medium is-info">男性</button>
            <button className = "button is-medium is-danger">女性</button>
            <button className = "button is-medium is-light">その他</button>
        </div>
    </section>
    );
}

const Body2 = () => {
    return (
    <section className = "section">
        <div className = "container">
            <h2 className = "subtitle">（その２） 選択式の表示をしてみました。</h2>
            <p>あなたの性別を選んでください。</p> 
            <div class="select is-warning">
                <select>
                    <option>男性</option>
                    <option>女性</option>
                    <option>その他</option>
                </select>
            </div>
        </div>
    </section>
    );
}

const Body3 = () => {
    return (
    <section className = "section">
        <div className = "container">
            <h2 className = "subtitle">（その３） テキストエリアの表示をしてみました。</h2>
            <p>あなたの性別を記入してください。</p>
            <textarea class="textarea is-warning" placeholder="男、女、その他"></textarea>
        </div>
    </section>
    );
}

const Footer = () => {
    return (
        <footer className = "footer">
            <dvi className = "content has-text-centered">
                <p>&copy; 2020 miura</p>
            </dvi>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Message />
            <Hero />
            <FirstWord />
            <Count />
            <p>ページの完成度</p>
            <progress class="progress" value="1" max="100">1%</progress>
            <Diary />
            <Menu />
            <Body1 />
            <Body2 />
            <Body3 />
            <Footer />
        </div>
    );
};

export default App;