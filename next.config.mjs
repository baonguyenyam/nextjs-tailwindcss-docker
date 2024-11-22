// import MillionLint from "@million/lint";

const nextConfig = {
	compress: true,
	crossOrigin: 'anonymous',
	poweredByHeader: false,
	reactStrictMode: true,
	output: 'standalone',
	compiler: {
		styledComponents: false
	},
	sassOptions: {
		quietDeps: true,
	},
	serverExternalPackages: ['nguyenpham'],
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
	experimental: {
		nextScriptWorkers: false,
		forceSwcTransforms: true, // Allow Babel to be replaced with SWC
		optimizePackageImports: [
			'antd',
			'date-fns',
			'react-icons/*',
			'@emotion/react',
			"dayjs",
			"flowbite",
			"lightgallery",
			//fortawesome
			'@fortawesome/react-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-brands-svg-icons',
			// Fullpage 
			'@fullpage/react-fullpage',
			'next-themes',
			'react-youtube',
			'@react-google-maps/api',
			"react-countdown",
			'@rumess/react-flip-countdown'
		],
		reactCompiler: {
			compilationMode: 'annotation',
		},
		staleTimes: {
			dynamic: 30,
			static: 180,
		},
		// ppr: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
		dirs: [
			'!src/generated',
			'!_**/*',
		],
	},
	// URL Rewrites
	// async rewrites() {
	// 	return [{
	// 		source: '/blogs',
	// 		destination: '/events',
	// 	}, ]
	// },
	// Redirects - 301 Permanent
	async redirects() {
		return [
			// {
			// 	source: '/blog/old',
			// 	destination: '/blog/new',
			// 	permanent: true,
			// },
		]
	},
	images: {
		remotePatterns: [{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},

};

// export default MillionLint.next({
// 	rsc: true
// })(nextConfig);

export default nextConfig;