import React from "react";
const TopPage = () => {
	return (
		<div>
			<div class="jumbotron">
				<h1 class="display-3">ようこそ</h1>
				<p class="lead">ここはKaleido's Portfolioのトップページです</p>
				<hr class="my-2" />
				<p>
					来年4月から外資っぽいITに入社します。
					即戦力になるためプログラミング言語を勉強中
					どこかでインターンに参加して更なるスキルを身に着けたいと考えている理系の大学院生です。
				</p>
				<p>
					とりあえずスキルページは埋めてみたのでよかったら見てみてください！。ブログは独学プログラミング。就活。についてつぶやいてます
				</p>
				
			</div>
      <div className="container-fluid padding">

	<div className="row text-center padding">
		<div className="col-12">
			<h2>Connect</h2>
		</div>
		<div className="col-12 social padding">
			<a href="https://kaleido01.com"><i className="fas fa-blog"></i></a>
			<a href="https://twitter.com/kaleidoblog"><i className="fab fa-twitter"></i></a>
      
		</div>
	</div>

</div>
		</div>
	);
};

export default TopPage;
