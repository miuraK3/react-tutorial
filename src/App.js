import React from "react";

const Hero = () => {
    return (
        <section className = "hero is-success">
            <div className = "hero-body">
                <div className = "container has-text-centered">
                    <h1 className = "title">Reactでページ作り</h1>
                    <h2 className = "subtitle">2020/6/4~</h2>
                </div>
            </div>
        </section>
    );
};

const FirstWord = () => {
    return (    
        <section className = "section">
            <div className ="box">
                <article className ="media">
                    <div className ="media-left">
                        <figure className ="image is-64x64">
                            <img className = "is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
                        </figure>
                    </div>
                    <div className ="media-content">
                        <div className ="content">
                            <p><strong>miura</strong> <br></br>
                            こんにちわ、miuraです。<br></br>
                            このページはCSSフレームワーク Bulmaを使用して自己紹介のページが作れることを目標としています。
                            そのためページ内容が次々と変わるかと思いますが、暖かく見守っていてください...。</p>
                        </div>
                    </div>
                </article>
            </div>
        </section> 
    );
}

const Body1 = () => {
    return (
        <section className = "section">
            <div className ="tile is-ancestor ">
                <div className ="tile is-vertical ">
                    <div className ="tile">
                        <div className ="tile is-parent">
                            <article className ="tile is-child notification is-info">
                                <p className ="subtitle">Miuraの基本情報</p>
                                <ul>
                                    <ol><strong>名前：miura</strong><br></br>（本名は伏せさせていただきます...。）</ol>
                                    <ol><strong>年齢：20</strong></ol>
                                    <ol><strong>出身：東京</strong></ol>
                                    <ol><strong>大学：日本大学文理学部 情報科学科</strong></ol>
                                    <ol><strong>海外歴：アメリカ・ボストン（0~3才）、中国・上海（4~15才）</strong><br></br>（悲しいことにアメリカの記憶は一切ありません。）</ol>
                                    <ol><strong>趣味：海外映画・ドラマ・バラエティをみること</strong></ol>
                                    <ol><strong>最近ハマっていること：韓国のバラエティを見ること</strong></ol>
                                </ul>
                            </article>
                        </div>
                        <div className ="tile is-parent is-vertical">
                            <article className ="tile is-child notification is-primary">
                                <p className ="subtitle">勉強中のプログラミング言語</p>
                                <ul>
                                    <ol><strong>Processing</strong></ol>
                                    <ol><strong>C言語</strong></ol>
                                    <ol><strong>JavaScript</strong></ol>
                                </ul>
                            </article>
                            <article className ="tile is-child notification is-warning">
                                <p className ="subtitle">勉強中の言語</p>
                                <ul>
                                    <ol><strong>中国語</strong></ol>
                                    <ol><strong>英語</strong></ol>
                                    <ol><strong>韓国語</strong></ol>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
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
            <Hero />
            <FirstWord />
            <Body1 />
            <Footer />
        </div>
    );
};

export default App;