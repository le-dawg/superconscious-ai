import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
				<Text margin="0px 18px 0px 18px" font="--headline3">
					Superconscious AI AG
				</Text>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
					>
						What We Do
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
					>
						Our Projects
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
					>
						Our Team
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock">
			<Text
				margin="0px 0px 0px 0px"
				font="--headline1"
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				MLOps
			</Text>
			<Section
				padding="60px 0"
				sm-padding="40px 0"
				min-height="600px"
				sm-min-height="auto"
				background="--color-light"
				display="flex"
				flex-direction="column"
			>
				<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
				<Text
					as="h3"
					margin="8px 0px 32px"
					font="--headline2"
					md-font="--headline2"
					color="--dark"
					width="100%"
				>
					What are MLOps?
				</Text>
				<Text
					margin="0px"
					max-width="600px"
					font="--base"
					color="--grey"
					padding="0px 16px 0px 0px"
					width="66.66%"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					md-margin="0px 0px 24px 0px"
				>
					&lt;MLOps Intro&gt;
				</Text>
				<Text
					margin="0px 0px 0px auto"
					font="--base"
					color="--grey"
					width="20%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
				>
					The key to successful MLOps is ...{" "}
				</Text>
			</Section>
			<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0" sm-padding="30px 0 30px 0">
				<Box margin="0px 0px 32px 0px" display="flex" flex-direction="column" align-items="flex-start">
					<Text
						font="--headline1"
						color="--dark"
						text-align="center"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						margin="16px 0px 0px 0px"
					>
						Cases
					</Text>
					<Text font="--lead" color="--darkL2" max-width="600px">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					</Text>
				</Box>
				<LinkBox
					display="flex"
					margin="0px 0px 32px 0px"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-direction="row"
					align-items="flex-start"
					flex-wrap="wrap"
					lg-margin="0px 0px 16px 0px"
				>
					<Box
						width="60%"
						padding="0px 16px 0px 0px"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						margin="0px 0px 0px 0px"
						md-width="100%"
						lg-width="100%"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
							border-radius="24px"
							max-width="100%"
							max-height="456px"
							width="100%"
							object-fit="none"
							lg-max-height="392px"
							sm-max-height="213px"
						/>
					</Box>
					<Box
						width="40%"
						padding="0px 0px 0px 16px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						sm-align-items="flex-start"
						sm-flex-direction="column"
						sm-justify-content="flex-start"
						flex-direction="column"
						lg-width="100%"
						lg-flex-direction="row"
						lg-justify-content="space-between"
						lg-padding="16px 12px 16px 12px"
					>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
							2021
						</Text>
						<Box padding="0px 50px 0px 0px" lg-width="70%" sm-width="100%" lg-padding="0px 0px 0px 0px">
							<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
								Finance Dashboard
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							</Text>
						</Box>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					margin="0px 0px 32px 0px"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-direction="row"
					align-items="flex-start"
					flex-wrap="wrap"
					lg-margin="0px 0px 16px 0px"
				>
					<Box
						width="60%"
						padding="0px 16px 0px 0px"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						margin="0px 0px 0px 0px"
						md-width="100%"
						lg-width="100%"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://images.unsplash.com/photo-1623500006871-81fd925ddac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							border-radius="24px"
							max-width="100%"
							max-height="456px"
							width="100%"
							object-fit="none"
							lg-max-height="392px"
							sm-max-height="213px"
						/>
					</Box>
					<Box
						width="40%"
						padding="0px 0px 0px 16px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						sm-align-items="flex-start"
						sm-flex-direction="column"
						sm-justify-content="flex-start"
						flex-direction="column"
						lg-width="100%"
						lg-flex-direction="row"
						lg-justify-content="space-between"
						lg-padding="16px 12px 16px 12px"
					>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
							2021
						</Text>
						<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
							<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
								Logotype
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							</Text>
						</Box>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					margin="0px 0px 32px 0px"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-direction="row"
					align-items="flex-start"
					flex-wrap="wrap"
					lg-margin="0px 0px 16px 0px"
				>
					<Box
						width="60%"
						padding="0px 16px 0px 0px"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						margin="0px 0px 0px 0px"
						md-width="100%"
						lg-width="100%"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=806&q=80"
							border-radius="24px"
							max-width="100%"
							max-height="456px"
							width="100%"
							object-fit="none"
							lg-max-height="392px"
							sm-max-height="213px"
						/>
					</Box>
					<Box
						width="40%"
						padding="0px 0px 0px 16px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						sm-align-items="flex-start"
						sm-flex-direction="column"
						sm-justify-content="flex-start"
						flex-direction="column"
						lg-width="100%"
						lg-flex-direction="row"
						lg-justify-content="space-between"
						lg-padding="16px 12px 16px 12px"
					>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
							2021
						</Text>
						<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
							<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
								SMM
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							</Text>
						</Box>
					</Box>
				</LinkBox>
			</Section>
		</Section>
		<Section padding="54px 0 30px 0" quarkly-title="Footer" lg-padding="30px 0 20px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
				sm-margin="0px 0px 16px 0px"
				empty-min-width="64px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				md-align-items="flex-start"
				md-display="flex"
				md-justify-content="center"
				sm-padding="16px 16px 16px 0px"
			>
				<Image src="https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png" width="248px" height="auto" max-width="100%" />
			</Box>
			<Box
				width="25%"
				flex-direction="column"
				md-width="50%"
				sm-padding="16px 16px 16px 0px"
				empty-border-style="solid"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				empty-min-width="64px"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					About
				</Text>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Genesis
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				flex-direction="column"
				sm-padding="16px 16px 16px 0px"
				empty-min-width="64px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Contact
				</Text>
				<Link
					href="tel:123456789"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					@superconAI
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="mailto:mail@gmail.com"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					superconscious[at]tuhh.de
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Schlossmühlendamm 32
					<br />
					21075 Hamburg, Germany
				</Link>
			</Box>
		</Section>
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