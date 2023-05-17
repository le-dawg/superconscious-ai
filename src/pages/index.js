import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section, Span, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px">
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
						Service
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
						About
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
						Advisors
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
					>
						Contact
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock" align-content="normal">
			<Section min-height="100vh" padding="0 0 0 0">
				<Override
					slot="SectionContent"
					flex-direction="row"
					flex-wrap="wrap"
					max-width="none"
					width="100%"
					sm-padding="72px 0px 0px 0px"
				/>
				<Box
					display="flex"
					width="40%"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					sm-margin="0px 0px 50px 0px"
					margin="40px 5% 40px 5%"
					lg-padding="24px 60px 24px 60px"
					sm-padding="0px 20px 0px 20px"
					padding="24px 0px 24px 0px"
				>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--headline2"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						<Span
							color="--purple"
							font="--headline4"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							We are
						</Span>
						{" "}
						<br />
						Superconscious AI AG
					</Text>
					<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
						We are a small, independent team of students and alumni researching and testing applied AI use cases at the Hamburg University of Technology. Our independence enables us to pursue applications free from political or departmental leanings.{" "}
						<Strong>
							Join us!
						</Strong>
						<Link href="https://maroon-lavender-3b758.stackbit.app/">
							<br />
						</Link>
					</Text>
					<Box
						display="flex"
						sm-flex-direction="column"
						sm-width="100%"
						sm-text-align="center"
						justify-content="flex-start"
						align-items="center"
					>
						<Link
							href="#"
							padding="12px 24px 12px 24px"
							color="--light"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							transition="background-color 0.2s ease-in-out 0s"
							sm-margin="0px 0px 16px 0px"
							sm-text-align="center"
							background="--color-green"
							hover-background="--color-primary"
							hover-transition="background-color 0.2s ease-in-out 0s"
						>
							Reach out!
						</Link>
						<Link
							href="#"
							padding="10px 24px 10px 24px"
							color="--darkL1"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-darkL1"
							transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							sm-margin="0px 0px 0px 0px"
							sm-text-align="center"
							hover-background="--color-green"
							lg-margin="0px 0px 0px 0px"
							hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							hover-color="--primary"
							hover-border-color="--color-primary"
						>
							Check our Trello
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					width="50%"
					justify-content="center"
					overflow-y="hidden"
					overflow-x="hidden"
					lg-width="100%"
					background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) center center/cover no-repeat scroll padding-box"
					lg-min-height="400px"
					lg-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 100% 75%/cover no-repeat scroll padding-box"
					md-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 100% 100%/cover no-repeat scroll padding-box"
					sm-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 50% 100%/cover no-repeat scroll padding-box"
				/>
			</Section>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					What We{" "}
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="--purple"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						user-select="auto"
						pointer-events="auto"
						border-color="#6f1b6f"
					>
						Do
					</Span>
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Our time is mainly devoted to Generative AIs: we work on efficient (low-resource) LLM use cases as well as image generation.{" "}
					<br />
					As a student-driven research group we look out for the little guy - and represent and underrepresented demographic in the public discourse around AI systems.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px">
					Some text
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Frontend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Backend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="74px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				margin="0px 0px 16px 0px"
				width="100%"
				padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text font="--headline3" color="--dark" lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif" margin="0px 0px 0px 0px">
					Advisors team
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px" font="--headline4" color="--dark">
						Jane Smith
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
						<Override
							slot="link"
							border-radius="50%"
							hover-background="transparent"
							display="flex"
							justify-content="center"
							height="36px"
							align-items="center"
							background="none"
							color="--grey"
							hover-color="--light"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Laura Walker
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" instagram="https://instagram.com/instagram">
						<Override
							slot="link"
							justify-content="center"
							background="none"
							color="--grey"
							display="flex"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
							height="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
				/>
				<Box
					md-justify-content="space-between"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
				>
					<Text font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px">
						Kristen Hudson
					</Text>
					<SocialMedia linked-in="https://linkedin.com/" margin="0px 0px 0px -3px" justify-content="flex-start">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							margin="0 5px 0 5px"
							width="36px"
							justify-content="center"
							background="none"
							hover-color="--light"
							hover-background="transparent"
							padding="5x 5px 5px 5px"
							height="36px"
							display="flex"
							align-items="center"
						/>
						<Override
							slot="icon"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="30% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Katelin Stewart
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp">
						<Override
							slot="link"
							color="--grey"
							padding="5x 5px 5px 5px"
							width="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
							hover-background="transparent"
							margin="0 5px 0 5px"
							height="36px"
							display="flex"
							justify-content="center"
							background="none"
						/>
						<Override
							slot="icon"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
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
				<Image src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z" width="248px" height="auto" max-width="100%" />
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
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Destinations
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Newsroom
				</Link>
				<Link
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
				>
					Partners
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Carreers
				</Link>
			</Box>
			<Box
				empty-border-width="1px"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="50%"
				sm-padding="16px 16px 16px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				flex-direction="column"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Other
				</Text>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Terms & Conditions
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Privacy center
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Accessibility policy
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Cookie policy
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
					Contacts
				</Text>
				<Link
					href="tel:123456789"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					1 (916) 684-4294
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="mailto:mail@gmail.com"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					sale@fantastico.com
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					5121 Laguna Woods Dr, Elk Grove, CA, 95758{"  "}
				</Link>
			</Box>
		</Section>
		<Box min-width="100px" min-height="100px" />
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