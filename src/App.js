import React from "react";

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

const Hero = () => {
    return (
        <section className = "hero is-success">
            <div className = "hero-body">
                <div className = "container">
                    <h1 className = "title">Reactで初めてのページ作り </h1>
                    <h2 className = "subtitle">2020/6/4〜</h2>
                </div>
            </div>
        </section>
    );
};

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

const Count = () => {
    return (
        <nav className = "level is-mobile">
                <dvi className = "level-item has-text-centered">
                    <dvi>
                        <p className = "heading">ページ作りに取り組んだ日数合計</p>
                        <p className = "title">3</p>
                    </dvi>
                </dvi>
                <dvi className = "level-item has-textcentered">
                    <dvi>
                        <p className = "heading"> ページの完成度</p>
                        <progress className = "progress" value="1" max="100">1%</progress>
                    </dvi>
                </dvi>
        </nav>
    );
}

const Diary = () => {
    return (
        <article className = "message is-dark has-text-centered">
            <div className = "message-body">
                メモ：とにかくBulmaで出来ることを試してみました。また、URLでも開けるようにしました。（6/5）
            </div>
            <div className = "message-body">
                次回やること：画面全体を見やすくすること。
            </div>
        </article>
    );
}

const Body1 = () => {
    return (
    <section className = "section">
        <div className = "container has-text-centered">
            <h2 className = "subtitle">（その１） ボタンの表示をしてみました。</h2>
            <p>あなたの性別であるボタンをクリックしてください。</p>
            <dvi className = "colmns is6">
            <button className = "button is-small is-info is-outlined">男性</button>
            <button className = "button is-medium is-danger">女性</button>
            <button className = "button is-large is-light">その他</button>
            </dvi>
        </div>
    </section>
    );
}

const Body2 = () => {
    return (
    <section className = "section">
        <div className = "container has-text-centered">
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
        <div className = "container has-text-centered">
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

            <Diary />
            <Body1 />
            <Body2 />
            <Body3 />
            <Footer />
        </div>
    );
};

export default App;