// DISCOGRAPHYの情報を設定
// discography配列に新しいリリース情報を追加する場合はここに追加
// 例:
// {
// 	image: './img/new_release.jpg',
// 	title: 'New Release',
// 	id: 'new-release',
// 	type: 'Digital Single',
// 	date: '2026-01-01',
// 	youtubeHref: 'https://www.youtube.com/@PORT14-k8w',
// 	streamingHref: 'https://link-map.jp/links/JmEyZeld',
// 	details: [
// 		'Music : Naohiro Yamada',
// 		'Lyrics : Naohiro Yamada',
// 		'Vocal : Naohiro Yamada',
// 		'Mixing Engineer：Naruki Konagaya',
// 		'Mastering Engineer：Naruki Konagaya',
// 		'Photographer : Keiko'
// 	]
// }
const discography = [
	{
		image: './img/leave_me_behind.jpg',
		title: 'Leave Me Behind',
		id: 'lmb',
		type: 'Digital Single',
		date: '2026-11-30',
		youtubeHref: '',
		streamingHref: '',
		details: [
			'Music : Tomoki Yamada',
			'Lyrics : Naohiro Yamada',
			'Arrangement : Tomoki Yamada, Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Guitar : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : Name Withheld'
		]
	},
	{
		image: './img/call_arrange.jpg',
		title: 'Call (Arrange Ver.)',
		id: 'cal-a',
		type: 'Digital Single',
		date: '2026-03-27',
		youtubeHref: 'https://www.youtube.com/watch?v=YXkjiP-yLVs',
		streamingHref: 'https://link-map.jp/links/N6SBOzml',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Arrangement : Naohiro Yamada',
			'Piano Arrangement : 長利和季',
			'Vocal : Naohiro Yamada',
			'Piano : 長利和季',
			'Guitar : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : Naohiro Yamada'
		]
	},
	{
		image: './img/far_away.jpg',
		title: 'Far Away',
		id: 'fa',
		type: 'Digital Single',
		date: '2025-11-29',
		youtubeHref: 'https://www.youtube.com/watch?v=ZyIIoBPq8Pw',
		streamingHref: 'https://link-map.jp/links/SmgFl45_',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Designer : U'
		]
	},
	{
		image: './img/on_a_summer_day.jpg',
		title: 'On a Summer Day',
		id: 'oasd',
		type: 'Digital Single',
		date: '2025-07-26',
		youtubeHref: 'https://www.youtube.com/watch?v=35gp3R_YeAs',
		streamingHref: 'https://link-map.jp/links/23dpPcOy',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Guitar : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : Naohiro Yamada'
		]
	},
	{
		image: './img/distance.jpg',
		title: 'Distance',
		id: 'dis',
		type: 'Digital Single',
		date: '2025-06-13',
		youtubeHref: 'https://www.youtube.com/watch?v=eB7-PXZ2Xvg',
		streamingHref: 'https://link-map.jp/links/dFaPnS-h',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : AYUMI'
		]
	},
	{
		image: './img/call.jpg',
		title: 'Call',
		id: 'cal',
		type: 'Digital Single',
		date: '2025-04-15',
		youtubeHref: 'https://www.youtube.com/watch?v=kkyObvDs_bQ',
		streamingHref: 'https://link-map.jp/links/ZWTyovQJ',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : AYUMI'
		]
	},
	{
		image: './img/dreaming.jpg',
		title: 'Dreaming',
		id: 'dre',
		type: 'Digital Single',
		date: '2024-11-27',
		youtubeHref: 'https://www.youtube.com/watch?v=q8f6PgEc3dk',
		streamingHref: 'https://link-map.jp/links/2Sv8oOnu',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Mixing Engineer：Yuya Miyazaki',
			'Mastering Engineer：Yuya Miyazaki',
			'Photographer : Naohiro Yamada'
		]
	},
	{
		image: './img/waiting_for_you.png',
		title: 'Waiting For You',
		id: 'wfy',
		type: 'Digital Single',
		date: '2024-10-10',
		youtubeHref: 'https://www.youtube.com/watch?v=zv9nX3hamXs',
		streamingHref: 'https://link-map.jp/links/JmEyZeld',
		details: [
			'Music : Naohiro Yamada',
			'Lyrics : Naohiro Yamada',
			'Vocal : Naohiro Yamada',
			'Mixing Engineer：Naruki Konagaya',
			'Mastering Engineer：Naruki Konagaya',
			'Photographer : Keiko'
		]
	}
];

const discWrap = document.querySelector('.content.disc .disc_wrap');

if (!discWrap) {
	throw new Error('disc_wrapが見つかりません。');
}

discography.forEach(function (release) {
	const inner = document.createElement('div');
	inner.className = 'disc_inner';
	if (release.id) {
		inner.id = release.id;
	}

	const imageWrapper = document.createElement('div');
	imageWrapper.className = 'img';
	const image = document.createElement('img');
	image.className = 'disc_img';
	image.src = release.image;
	image.alt = release.title;
	imageWrapper.appendChild(image);

	const info = document.createElement('div');
	info.className = 'info';
	const title = document.createElement('h3');
	title.className = 'disc_title';
	title.textContent = release.title;

	const list = document.createElement('ul');
	const type = document.createElement('li');
	type.className = 'disc_type';
	type.textContent = release.type;

	const dateItem = document.createElement('li');
	const date = document.createElement('span');
	date.className = 'disc_date';
	date.textContent = release.date;
	dateItem.appendChild(date);
	dateItem.appendChild(document.createTextNode(' Release'));

	const youtubeItem = document.createElement('li');
	const youtube = document.createElement('a');
	youtube.className = 'external_links';
	youtube.href = release.youtubeHref;
	youtube.target = '_blank';
	youtube.textContent = 'YouTube';
	youtubeItem.appendChild(youtube);

	const streamingItem = document.createElement('li');
	const streaming = document.createElement('a');
	streaming.className = 'disc_link external_links';
	streaming.href = release.streamingHref;
	streaming.target = '_blank';
	streaming.textContent = 'Streaming & Download';
	streamingItem.appendChild(streaming);

	list.append(type, dateItem, youtubeItem, streamingItem);

	const lyricsItem = document.createElement('li');
	const lyricsLink = document.createElement('a');
	lyricsLink.href = `lyrics.html#${release.id}`;
	lyricsLink.textContent = 'Lyrics';
	lyricsItem.appendChild(lyricsLink);
	list.appendChild(lyricsItem);

	const details = document.createElement('ul');
	details.className = 'details';
	release.details.forEach(function (detail) {
		const item = document.createElement('li');
		item.textContent = detail;
		details.appendChild(item);
	});

	info.append(title, list, details);
	inner.append(imageWrapper, info);
	discWrap.appendChild(inner);
});
// DISCOGRAPHYの情報を設定 End