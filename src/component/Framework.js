import React from "react";

const Framework = () => {
	return (
		<React.Fragment>
      <div className="container-fluid mt-5">
				<div className="row text-center padding">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fas fa-bold" />
						<h3>Bootstrap</h3>
						<p>チートシートとyoutubuのBootcampみながら良さそうなのをいじりながら使ってます。</p>
					</div>
				
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-react" />
						<h3>React</h3>
						<p>SPAページを作成したいのとやっぱり最近はjs押しなのでフレームワークにはReactを採用。ちなみにこのサイトはReactで作ってみました。
              あともう一つの決め手は自分がお話聞いた社員さんがReact使っていたからです。
            </p>
					</div>
				
					<div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-sync-alt"></i>
						<h3>Material</h3>
						<p>Googleが使ってるやつですね。主に色の配置ですごい便利なので使っています。</p>
					</div>

          
					<div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-rocket"></i>
						<h3>Django</h3>
						<p>やはりバックエンドだけではなくフルスタックで出来るようになりたいという気持ちから選びました。
              Udemyのサイト見ながらブログや簡単な社員管理システムなんかは作りました。
            </p>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fa fa-database" />
						<h3>MongoDB</h3>
						<p>Node.js使用時に使いました。SQL文はまだまだ使用頻度が浅く練習が必要です。
              API使用時に頻繁にやり取りするのでここは残りの時間で埋めていきたいです。
            </p>
					</div>


          </div>
				<hr className="my-4" />
			</div>
		</React.Fragment>
	);
};

export default Framework;
