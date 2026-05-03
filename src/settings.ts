export const profile = {
	fullName: 'Jintang Xue',
	title: 'Final-year Ph.D. Candidate',
	institute: 'USC Viterbi (ECE)',
	author_name: 'Jintang Xue', // Author name to be highlighted in the papers section
	cv: '/files/Jintang_Xue_CV_2025.11.8.pdf',
	research_areas: [
		{
			title: 'Large Language Models',
			description:
				'Reasoning, generation, and grounding of foundation language models.',
			field: 'computer-science',
			icon: '💬',
		},
		{
			title: 'Multimodal Learning',
			description:
				'Bridging language with vision and 3D scenes through joint representations.',
			field: 'computer-science',
			icon: '🎨',
		},
		{
			title: '3D Understanding',
			description:
				'Point cloud reasoning, scene segmentation, and language-conditioned 3D analysis.',
			field: 'engineering',
			icon: '🧊',
		},
		{
			title: 'Natural Language Processing',
			description:
				'Word embeddings, fairness in dialogue systems, and efficient feature selection.',
			field: 'mathematics',
			icon: '📝',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'jintangx@usc.edu',
	linkedin: 'https://www.linkedin.com/in/jintang-xue-1a348621b',
	x: '',
	bluesky: '',
	github: 'https://github.com/jintangxue',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=jj6aMWUAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0009-0004-3531-8147',
}

export const template = {
	website_url: 'https://jintangxue.github.io',
	menu_left: false,
	transitions: true,
	lightTheme: 'light',
	darkTheme: 'dark',
	excerptLength: 200,
	postPerPage: 5,
	base: '',
}

export const seo = {
	default_title: 'Jintang Xue',
	default_description:
		'Final-year Ph.D. Candidate in ECE at USC Viterbi, working on multimodal foundation models for language and 3D scene understanding.',
	default_image: '/images/profile.jpg',
}
