import icon from "./images/kirin.jpg";
import rama from "./images/rama.jpg";
import hyou from "./images/hyou.jpg";
import tora from "./images/tora.jpg";
import React, { useEffect, useState} from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


const Hero = () => {
    return (
        <section className = "hero is-success">
            <div className = "hero-body">
                <div className = "container has-text-centered">
                    <h1 className = "title">Hello!</h1>
                    <h2 className = "subtitle">This pages is about miura.</h2>
                </div>
            </div>
        </section>
    );
};

const FirstWord = () => {
    return (    
        <section className="hero">
          <div className="hero-body">
            <div className="container">
            <div className ="box">
                <article className ="media">
                    <div className ="media-left">
                        <figure className ="image is-64x64">
                            <img className = "is-rounded" src={icon} alt="kirin"></img>
                        </figure>
                    </div>
                    <div className ="media-content">
                        <div className ="content">
                            <p><strong>miura</strong> <br></br>
                            こんにちわ、miuraです。<br></br>
                            このページはReactで自己紹介のWebページが作れることを目標としています。
                            そのためページ内容が次々と変わるかと思いますが、暖かく見守っていてください...。</p>
                            <section className = "section has-text-centered">
                              <p className ="heading">ページの完成度↓</p>
                              <progress className ="progress is-danger" value="80" max="100">80%</progress>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
            </div>
          </div>
        </section>
    );
}

const About = () => {
    return (
        <section className="hero">
          <div className="hero-body">
            <div className="container">
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
                                    <ol><strong>趣味：海外映画・ドラマ、写真</strong></ol>
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
                        <div className ="tile is-parent is-vertical">
                            <article className ="tile is-child notification is-info">
                                <p className ="subtitle">特に好きな〇〇について</p>
                                <ul>
                                    <ol><strong>映画：アベンジャーズシリーズ</strong></ol>
                                    <ol><strong>ドラマ：キャッスル（ミステリー作家のNY事件簿）</strong></ol>
                                    <ol><strong>バラエティ：世界の果てまでイッテQ！</strong></ol>
                                    <ol><strong>動物：ラマ</strong></ol>
                                    <ol><strong>食べ物：わらび餅</strong></ol>
                                    <ol><strong>スポーツ：バトミントン</strong></ol>
                                    <ol><strong>アーティスト：BTOB</strong></ol>
                                </ul>
                            </article>
                        <div className ="tile is-parent is-vertical">
                            <article className ="tile is-child notification is-primary">
                                <p className ="subtitle">スポーツ経験</p>
                                <ul>
                                    <ol><strong>バトミントン</strong></ol>
                                    <ol><strong>卓球</strong></ol>
                                    <ol><strong>柔道</strong></ol>
                                    <ol><strong>ゴルフ</strong></ol>
                                    <ol><strong>アイススケート</strong></ol>
                                </ul>
                            </article>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </section>
    );
}

const Image = ({ url }) => {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img alt="dogs" src={url} />
          </figure>
        </div>
      </div>
    );
};
  
const Content = ({ data }) => {
    if (data == null) {
      return (
        <div className="content">
          <p>読み込み中...（かわいい犬たちが出現しますよ）</p>
        </div>
      );
    }
    return (
      <div className="columns is-vcentered is-mobile">
        {data.message.map((url, i) => {
          return (
            <div key={i} className="column">
              <Image url={url} />
            </div>
          );
        })}
      </div>
    );
};

const Dogs = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random/4")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);
  
    return (
      <div>
        <section className="section">
          <div className="container">
            <Content data={data} />
          </div>
        </section>
      </div>
    );
};  

const Animals = () => {
    return (
        <section className="hero">
          <div className="hero-body">
            <div className="container">
            <div className ="tile is-ancestor ">
                <div className ="tile is-vertical">
                    <div className ="tile">
                    <article class="tile is-child notification is-warning">
                    <p className ="subtitle">動物メイン</p>
                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <figure className ="image is-mobile is-vcentered">
                                        <img src={rama} alt="rama"></img>
                                    </figure>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <figure className ="image is-mobile is-vcentered">
                                        <img src={icon} alt="kirin"></img>
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <figure className ="image is-mobile is-vcentered">
                                        <img src={hyou} alt="hyou"></img>
                                    </figure>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <figure className ="image is-mobile is-vcentered">
                                        <img src={tora} alt="tora"></img>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </article>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </section>
    );
}

const Count = () => {
    const handleButtonClick = () => {
        alert("ありがとうございます！（特に何もないのですが・・・）");
    }
    return (
        <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">閲覧したらぜひ↓</p>
                    <button class="button is-rounded is-danger" onClick={handleButtonClick}>Clicke Me!</button>
                </div>
            </div>
        </nav>
    );
}

const LastWord = () => {
    return (    
        <section className="hero">
          <div className="hero-body">
            <div className="container">
            <div className ="box">
                <article className ="media">
                    <div className ="media-left">
                        <figure className ="image is-64x64">
                            <img className = "is-rounded" src={icon} alt="kirin"></img>
                        </figure>
                    </div>
                    <div className ="media-content">
                        <div className ="content">
                            <p><strong>miura</strong> <br></br>
                            最後までありがとうございました！<br></br></p>
                        </div>
                    </div>
                </article>
                <dvi><Count /></dvi>
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

const Body = () => {
    return (
        <Router>
            <dvi className = "tabs is-medium">
                <ul>
                    <li className = "is-active">
                    <Link to = "/first">はじめに</Link>
                    </li>
                    <li className = "is-active">
                    <Link to = "/aboutMe">miuraについて</Link>
                    </li>
                    <li className = "is-active">
                    <Link to = "/photo">写真</Link>
                    </li>
                    <li className = "is-active">
                    <Link to = "/breaktime">息抜きコーナー</Link>
                    </li>
                    <li className = "is-active">
                    <Link to = "/">最後に</Link>
                    </li>
                </ul>
            </dvi>
            <Switch>
                <Route path = "/first">
                    <FirstWord />
                </Route>
                <Route path = "/aboutMe">
                    <About />
                </Route>
                <Route path = "/photo">
                    <section className="hero">
                        <div className="hero-body">
                        <div className="container">
                            <p className ="subtitle">今まで撮った来た写真たちです。<br></br><strong>注）無断使用しないようにお願いします！</strong></p>
                        </div>
                        </div>
                    </section>
                    <Animals />
                </Route>
                <Route path = "/breaktime">
                    <Dogs />
                </Route>
                <Route path = "/">
                    <LastWord />
                </Route>
            </Switch>
        </Router>
    );
}

const App = () => {
    return (
        <div>
            <Hero />
            <Body />
            <Footer />
        </div>
    );
};

export default App;