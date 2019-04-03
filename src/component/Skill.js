import React from "react";

const Skill = () => {
	return (
		<React.Fragment>
			<div className="container-fluid mt-5">
				<div className="row text-center padding">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fas fa-code" />
            <i className="fab fa-css3" />
						<h3>HTML5,CSS</h3>
						<p>Progateで学習。道場でLP作成するところまでは実践済み。見よう見まねでひたすら経験積んでいます。
              ずっとバックエンドだったのでこれから少しずつって感じです。
            </p>
					</div>
				
				
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-node" />
						<h3>Node.js</h3>
						<p>会社の少数プロジェクトでも使用されていると伺い、今流行りのJSを触ろうとおもって手を付けました。
              同時にMongoDBも触ったので作ったアプリ見ながらなら何とかいけます。
            </p>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-python" />
						<h3>Python</h3>
						<p>大学のデータ処理なんかはこいつに任せてました。基本その時その時調べながら使っているのでまだまだ甘いです。
              FrameworkにはDjangoを採用。簡単なブログくらいなら作れます。今のTwitter自動いいねはPythonにやってもらってます。  
              将来AIによる自動化やデータ分析などにも興味があります。主にUdemyで学習中
            </p>
					</div>
          </div>

				<hr className="my-4" />
			</div>
		</React.Fragment>
	);
};

export default Skill;
