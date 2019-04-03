import React from "react";

const Profile = () => {
	return (
		<div　className="mt-5">

<div class="container-fluid padding">
      <div className="row welcome text-center">
      <div className="col-12">
        <h1 className="display-4">Self-introduction</h1>
    </div>

      </div>
      <hr />
	</div>
      <div className="card-group">
  <div className="card">
    <div className="card-body deep-purple lighten-5">
      <h4 className="card-title pink lighten-4">趣味</h4>
      <p className="card-text">海外ドラマ、アニメ、テキサスホールデム,携帯ゲーム、バスケなどなど </p>
    </div>
  </div>
  <div className="card">
    <div className="card-body deep-purple lighten-5">
      <h4 className="card-title pink lighten-4">就活</h4>
      <p className="card-text">最初はメーカー志望。自己分析するうちにITへ興味が湧く⇒給料が高いからコンサル志望⇒
      工数とか人月とか知ったうえじゃないとPMとかできない⇒まずは大好きなプログラミングでシステム作りたい⇒
      将来独立したい⇒プログラミングで稼ぐ力身に着けよう！</p>
    </div>
  </div>

  
  <div className="card">
    <div className="card-body deep-purple lighten-5">
      <h4 className="card-title pink lighten-4">プログラミング</h4>
      <p className="card-text">大企業なのでJavaがメインになりがちらしいが、
      将来の自分を考えて取りに行く案件は小規模のPython,Node.jsを使ったものに絞っていきたい⇒Udemyを使って猛勉強中。
      最近は開発環境と本番環境でbuildが異なることに死苦八句。データベースとAPIもこれから使いこなしていきたいです。
      </p>
    </div>
  </div>
</div>


    <div class="container-fluid padding">
      <div className="row welcome text-center">
      <div className="col-12">
        <h1 className="display-4">The Study</h1>
    </div>

      </div>
      <hr />
	</div>
      <div className="card-group">
  <div className="card">
    <div className="card-body deep-purple lighten-5">
      <h4 className="card-title pink lighten-4">大学</h4>
      <p className="card-text">次世代新規メモリの開発、有機材料に着目してウェアラブルデバイスとして将来役立ちそうなメモリを作っていました。 </p>
    </div>
  </div>
  <div className="card">
    <div className="card-body deep-purple lighten-5">
      <h4 className="card-title pink lighten-4">大学院</h4>
      <p className="card-text">学部の研究の方向からずれはじめ、主に原理を研究するように。
      あまりの孤独感と自分に合わないことに嫌気がさして将来の仕事について真剣に考え始める。</p>
    </div>
  </div>
</div>
		</div>
	);
};

export default Profile;
