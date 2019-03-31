import React from "react";

const Skill = () => {
	return (
		<React.Fragment>
			<div className="container-fluid mt-5">
				<div className="row text-center padding">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fas fa-code" />
						<h3>HTML5</h3>
						<p>フロントエンドをいじるときの最低限は使えます。</p>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fas fa-bold" />
						<h3>Bootstarp</h3>
						<p>チートシートとyoutubuのbootcampみながら良さそうなのをいじりながら使ってます</p>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-css3" />
						<h3>CSS</h3>
						<p>bootstrapに頼りすぎているので危険</p>
					</div>
				
				
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-node" />
						<h3>Node.js</h3>
						<p>入社後のプロジェクトで今後よく出てきそうなのと流行りのjsなので</p>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-react" />
						<h3>React</h3>
						<p>SPAページを作成したいのとやっぱり最近はjs押しなので勉強中です。ちなみにこのサイトはReactで作ってみました。</p>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<i className="fab fa-python" />
						<h3>Python</h3>
						<p>自動化と聞いて最初にもっと勉強しておけばよかったと思っている言語。最近はDjango使いながら遊んでます。</p>
					</div>
          </div>

				<hr className="my-4" />
			</div>
		</React.Fragment>
	);
};

export default Skill;
