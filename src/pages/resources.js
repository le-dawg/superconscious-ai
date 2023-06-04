import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Em, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"resources"} />
		<Helmet>
			<title>
				Superconscious AI AG
			</title>
			<meta name={"description"} content={"Independent applied AI research group \" TUHH, Germany"} />
			<meta property={"og:title"} content={"Superconscious AI AG"} />
			<meta property={"og:description"} content={"Independent applied AI research group \" TUHH, Germany"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1577791355984-9279a5530c90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<meta name={"msapplication-TileColor"} content={"#f72cf0"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header">
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"
				width="7%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
				flex="0 1 auto"
				min-width="24px"
				min-height="24px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				align-self="baseline"
				display="flex"
				justify-content="center"
				align-items="center"
			>
				<Text margin="0px 18px 0px 18px" font="--headline4">
					Superconscious AI AG
				</Text>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						lg-margin="0px 6px 0px 6px"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						href="#what-do"
					>
						What We Do
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#projects"
						text-decoration-line="initial"
						color="--dark"
					>
						Our Projects
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="/resources"
						text-decoration-line="initial"
						color="--dark"
					>
						<Em>
							Resources
						</Em>
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#touch"
					>
						Our Team
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Excellent AI Resources
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						This is our hotlist of internally used resources we have curated from the world wide web. Use them to you advantage!
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0 40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Text
				margin="0px"
				font="--headline2"
				md-font="--headline2"
				color="--dark"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Generative AI
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
		</Section>
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0 40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Text
				margin="0px"
				font="--headline2"
				md-font="--headline2"
				color="--dark"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				MLOps
			</Text>
			<Box min-width="100px" min-height="100px" padding="30px 30px 0px 0px">
				<Link href="https://github.com/EthicalML/awesome-production-machine-learning/" color="#000000" margin="0px 0px 20px 0px">
					[Awesome List] Production Machine Learning
				</Link>
				<Components.QuarklycommunityKitYouTube url="https://www.youtube.com/watch?v=xymbp8RWaCQ" margin="20px 0px 0px 0px" />
			</Box>
			<Box min-width="100px" min-height="100px" padding="30px 30px 0px 0px" max-width="19vw">
				<Link color="#000000" href="https://github.com/EthicalML/awesome-artificial-intelligence-guidelines" margin="0px 0px 20px 0px">
					[Awesome List] AI Guidelines
				</Link>
				<Image display="block" src="https://github.com/EthicalML/awesome-artificial-intelligence-guidelines/raw/master/images/bosstown.gif" max-width="inherit" margin="20px 0px 0px 0px" />
			</Box>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
		</Section>
		<Link href="#" color="#000000">
			Some text
		</Link>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});