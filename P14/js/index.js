// headerの要素からトップセクションへのスクロールを設定
const headerButtons = document.querySelectorAll('#header_button, #index_logo');
const sectionTop = document.getElementById('section_top');

headerButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		const targetTop = sectionTop.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: targetTop,
			behavior: 'smooth'
		});
	});
});
// headerの要素からトップセクションへのスクロールを設定 End

// headerのテキストを設定
const headerText = 'New digital single "Far Away" out now!';

document.querySelector('.header_text').textContent = headerText;
// headerのテキストを設定 End

// YouTubeの動画の埋め込みを設定
// videoオブジェクトに埋め込みコードとタイトルを設定
const video = {
	embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyIIoBPq8Pw?si=2b8m6uvDZE_90WQi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
	title: 'Far Away (Official Lyric Video)'
};

document.querySelector('.video_wrapper').innerHTML = video.embed;
document.querySelector('.video_title').textContent = video.title;
// YouTubeの動画の埋め込みを設定 End

// NEW RELEASEの情報を設定
const newRelease = {
	image: './img/leave_me_behind.jpg',
	title: 'Leave Me Behind',
	type: 'Digital Single',
	date: '2026-11-30',
	youtubeHref: '',
	streamingHref: ''
};

const nrInner = document.createElement('div');
nrInner.className = 'nr_inner';
nrInner.innerHTML = `
	<div class="img">
		<img class="nr_img" alt="">
	</div>
	<div class="info">
		<h3 class="nr_title"></h3>
		<ul>
			<li class="nr_type"></li>
			<li><span class="nr_date"></span> Release</li>
			<li><a target="_blank" class="nr_youtube external_links">YouTube</a></li>
			<li><a target="_blank" class="nr_streaming external_links">Streaming &amp; Download</a></li>
		</ul>
	</div>
`;
nrInner.querySelector('.nr_img').src = newRelease.image;
nrInner.querySelector('.nr_title').textContent = newRelease.title;
nrInner.querySelector('.nr_type').textContent = newRelease.type;
nrInner.querySelector('.nr_date').textContent = newRelease.date;
nrInner.querySelector('.nr_youtube').setAttribute('href', newRelease.youtubeHref);
nrInner.querySelector('.nr_streaming').setAttribute('href', newRelease.streamingHref);
document.querySelector('.nr_wrap').appendChild(nrInner);
// NEW RELEASEの情報を設定 End

// SNSのリンクを設定
const socialLinks = [
	{ href: 'https://www.youtube.com/@PORT14-k8w', text: 'YouTube' },
	{ href: 'https://music.apple.com/jp/artist/port-14/1769986386', text: 'Apple Music' },
	{ href: 'https://music.youtube.com/@PORT14-k8w', text: 'YouTube Music' },
	{ href: 'https://open.spotify.com/intl-ja/artist/1mec8Pc216744Rl0fyVDZR?si=8HWJTuTURJSXqoFytHpoLg', text: 'Spotify' },
	{ href: 'https://x.com/port14_0', text: 'X' },
	{ href: 'https://port14.booth.pm/', text: 'BOOTH' },
	{ href: 'https://narasu.jp/client/static/artists/18567', text: 'Other streaming services' }
];

const socialList = document.querySelector('.sns');

socialLinks.forEach(function (socialLink) {
	const item = document.createElement('li');
	const link = document.createElement('a');
	link.href = socialLink.href;
	link.target = '_blank';
	link.className = 'external_links';
	link.textContent = socialLink.text;
	item.appendChild(link);
	socialList.appendChild(item);
});
// SNSのリンクを設定 End

// DISCOGRAPHYの情報を設定
// releases配列に新しいリリース情報を追加する場合はここに追加
const releases = [
	{
		title: 'Leave Me Behind',
		image: './img/leave_me_behind.jpg',
		href: 'disc.html#lmb'
	},
	{
		title: 'Call (Arrange Ver.)',
		image: './img/call_arrange.jpg',
		href: 'disc.html#cal-a'
	},
	{
		title: 'Far Away',
		image: './img/far_away.jpg',
		href: 'disc.html#fa'
	},
	{
		title: 'On a Summer Day',
		image: './img/on_a_summer_day.jpg',
		href: 'disc.html#oasd'
	},
	{
		title: 'Distance',
		image: './img/distance.jpg',
		href: 'disc.html#dis'
	},
	{
		title: 'Call',
		image: './img/call.jpg',
		href: 'disc.html#cal'
	},
	{
		title: 'Dreaming',
		image: './img/dreaming.jpg',
		href: 'disc.html#dre'
	},
	{
		title: 'Waiting For You',
		image: './img/waiting_for_you.png',
		href: 'disc.html#wfy'
	}
];

const discWrap = document.querySelector('.disc_wrap');

releases.forEach(function (release) {
	const inner = document.createElement('div');
	inner.className = 'disc_inner';

	const link = document.createElement('a');
	link.href = release.href;

	const imageWrapper = document.createElement('div');
	imageWrapper.className = 'img';
	const image = document.createElement('img');
	image.src = release.image;
	image.alt = release.title;
	imageWrapper.appendChild(image);

	const titleWrapper = document.createElement('div');
	titleWrapper.className = 'disc_title';
	const title = document.createElement('h3');
	title.textContent = release.title;
	titleWrapper.appendChild(title);

	link.appendChild(imageWrapper);
	link.appendChild(titleWrapper);
	inner.appendChild(link);
	discWrap.appendChild(inner);
});
// DISCOGRAPHYの情報を設定 End