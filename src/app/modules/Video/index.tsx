import React, { useCallback, useEffect, useState } from "react";
import { faExpand, faGear, faInfoCircle, faLink, faPause, faPlay, faVolumeOff, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

import { site } from "@/app/const/const";

import styles from "./index.module.css";

// Memoized Modal component to prevent unnecessary re-renders
const MemoizedModal = React.memo(({ open, onCancel }: { open: boolean; onCancel: () => void }) => (
	<Modal
		title="Information"
		open={open}
		onCancel={onCancel} // Use memoized function here
		footer={null}
		centered
		keyboard={false}
		width={400}
		maskClosable={false}>
		<p>{site.name} Music Player</p>
		<p>Version 1.0.0</p>
	</Modal>
));
MemoizedModal.displayName = "MemoizedModal";

export default function Video(props: any) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	// Video Proccess Bar
	const videoProccessBar = useCallback(() => {
		const video_hide = document.getElementById(props.id + "hide" || "madevideohide") as HTMLVideoElement;
		const videoProccessBarFill = document.getElementById("videoProccessBarFill") as HTMLDivElement;
		if (video_hide) {
			video_hide.addEventListener("timeupdate", () => {
				const percent = (video_hide.currentTime / video_hide.duration) * 100;
				videoProccessBarFill.style.width = `${percent}%`;
			});
		}
	}, [props.id]);

	// Play Video
	const PlayVideo = () => {
		const wrapvideo = document.getElementById("wrapvideo") as HTMLDivElement;
		const playicon = document.getElementById("playicon") as HTMLDivElement;
		const pauseicon = document.getElementById("pauseicon") as HTMLDivElement;
		const video = document.getElementById(props.id || "madevideo") as HTMLVideoElement;
		const video_hide = document.getElementById(props.id + "hide" || "madevideohide") as HTMLVideoElement;
		wrapvideo.classList.remove("hidden");
		if (video) {
			video.play();
			video_hide?.play();
			playicon.classList.add("hidden");
			playicon.classList.remove("flex");
			pauseicon.classList.remove("hidden");
			pauseicon.classList.add("flex");
			video.classList.remove("opacity-0");
		}
		if (video?.paused) {
			video.play();
			video_hide?.play();
			video.classList.add("opacity-0");
			playicon.classList.add("hidden");
			playicon.classList.remove("flex");
			pauseicon.classList.remove("hidden");
			pauseicon.classList.add("flex");
		}
	};

	// Pause Video
	const PauseVideo = () => {
		const playicon = document.getElementById("playicon") as HTMLDivElement;
		const pauseicon = document.getElementById("pauseicon") as HTMLDivElement;
		const video = document.getElementById(props.id || "madevideo") as HTMLVideoElement;
		const video_hide = document.getElementById(props.id + "hide" || "madevideohide") as HTMLVideoElement;
		if (video) {
			video.pause();
			video_hide?.pause();
			video.classList.remove("opacity-0");
			playicon.classList.remove("hidden");
			playicon.classList.add("flex");
			pauseicon.classList.add("hidden");
			pauseicon.classList.remove("flex");
		}
	};

	// Toggle Video
	const toggleVideo = () => {
		const wrapvideo = document.getElementById("wrapvideo") as HTMLDivElement;
		const playicon = document.getElementById("playicon") as HTMLDivElement;
		const pauseicon = document.getElementById("pauseicon") as HTMLDivElement;
		const video = document.getElementById(props.id || "madevideo") as HTMLVideoElement;
		const video_hide = document.getElementById(props.id + "hide" || "madevideohide") as HTMLVideoElement;
		if (video) {
			if (video.paused) {
				video.play();
				video_hide?.play();
				wrapvideo.classList.remove("hidden");
				playicon.classList.add("hidden");
				playicon.classList.remove("flex");
				pauseicon.classList.remove("hidden");
				pauseicon.classList.add("flex");
				video.classList.remove("opacity-0");
			} else {
				video.pause();
				video_hide?.pause();
				video.classList.remove("opacity-0");
				playicon.classList.remove("hidden");
				playicon.classList.add("flex");
				pauseicon.classList.add("hidden");
				pauseicon.classList.remove("flex");
			}
		}
	};

	// Mute Video
	const muteVideo = () => {
		const muteicon = document.getElementById("muteicon") as HTMLDivElement;
		const shoundcon = document.getElementById("shoundcon") as HTMLDivElement;
		const video = document.getElementById(props.id || "madevideo") as HTMLVideoElement;
		if (video) {
			if (video.muted) {
				video.muted = false;
				muteicon.classList.remove("hidden");
				shoundcon.classList.add("hidden");
			} else {
				video.muted = true;
				muteicon.classList.add("hidden");
				shoundcon.classList.remove("hidden");
			}
		}
	};

	// Info
	const info = () => {
		setOpen(true);
	};

	// fullscreen
	const fullscreen = () => {
		const wrapvideo = document.getElementById("wrapvideo") as HTMLDivElement;
		if (wrapvideo) {
			if (wrapvideo.requestFullscreen) {
				wrapvideo.requestFullscreen();
			}
		}
	};

	// Register props.color to style tag
	let style = "";
	if (props.color) {
		style += `
			.bg-\\[\\${props.color}\\] {
				background-color: ${props.color};
			}
			.text-\\[\\${props.color}\\] {
				color: ${props.color};
			}
		`;
	}

	// Memoized onCancel function
	const handleCancel = useCallback(() => {
		setOpen(false);
	}, []);

	// getEventByID
	useEffect(() => {
		videoProccessBar();
		const styleTag = document.createElement("style");
		styleTag.innerHTML = style;
		document.head.appendChild(styleTag);
	}, [router, style, videoProccessBar]);

	return (
		<>
			<div className={`${styles.index} justify-center items-center flex flex-col mb-20 lg:mb-25 mx-auto`}>
				<div className="mx-auto w-full max-w-[1400px] 3xl:max-w-[1600px] 12xl:max-w-[2000px] relative mb-10">
					<div className="shadow-xl relative">
						{/* Video Proccess Bar */}
						<div className="absolute bottom-0 left-0 w-full h-1 z-[100000]">
							<div
								id="videoProccessBar"
								className="w-full h-full bg-white bg-opacity-40">
								<div
									id="videoProccessBarFill"
									className={`h-full bg-[${props.color}]`}
									style={{ width: 0 }}></div>
							</div>
						</div>
						{/* Video */}
						<div
							id="wrapvideo"
							className={`w-full h-full cursor-pointer object-cover bg-cover bg-center bg-no-repeat relative`}
							style={{ backgroundImage: `url(${props.thumbnail})` }}
							onClick={() => toggleVideo()}
							dangerouslySetInnerHTML={{
								__html: `<video 
							loop 
							muted 
							playsinline 
							src=${props.src}
							class="w-full h-full object-cover opacity-0" 
							id=${props.id || "madevideo"}
							>
							<track kind="captions" srcLang="en" label="English" />
							</video>`,
							}}
						/>
						{/* Hide Video */}
						<div className="absolute hidden w-1 h-1 opacity-0 top-0 left-0 z-[-1]">
							<video
								loop
								muted
								playsInline
								src={`${props.src}`}
								className="object-cover"
								id={`${props.id + "hide" || "madevideohide"}`}>
								<track
									kind="captions"
									srcLang="en"
									label="English"
								/>
							</video>
						</div>
					</div>
					{/* Play Icon  */}
					<div className="flex absolute right-3 bottom-3 md:right-5 md:bottom-5 z-[1000] justify-center items-center space-x-1">
						<div
							className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center`}
							onClick={() => PlayVideo()}
							id="playicon">
							<FontAwesomeIcon
								className="w-3 h-3 md:h-4 md:w-4 text-white"
								icon={faPlay}
							/>
						</div>
						<div
							className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer justify-center items-center hidden`}
							onClick={() => PauseVideo()}
							id="pauseicon">
							<FontAwesomeIcon
								className="w-3 h-3 md:h-4 md:w-4 text-white"
								icon={faPause}
							/>
						</div>
						<div className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center  relative group`}>
							<FontAwesomeIcon
								className="w-3 h-3 md:h-4 md:w-4 text-white"
								icon={faGear}
								id="gear"
							/>
							<div className="absolute bottom-full left-0 w-full hidden group-hover:flex flex-col space-y-1 pb-1">
								<div className="iten">
									<a
										className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center`}
										href="https://youtu.be/LqNKoSgqI1o"
										target="_blank"
										rel="noreferrer">
										<FontAwesomeIcon
											className="w-3 h-3 md:h-4 md:w-4 text-white"
											icon={faLink}
										/>
									</a>
								</div>
								<div className="iten">
									<div
										className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center`}
										onClick={() => muteVideo()}>
										<FontAwesomeIcon
											className="w-3 h-3 md:h-4 md:w-4 text-white hidden"
											icon={faVolumeOff}
											id="muteicon"
										/>
										<FontAwesomeIcon
											className="w-3 h-3 md:h-4 md:w-4 text-white"
											icon={faVolumeXmark}
											id="shoundcon"
										/>
									</div>
								</div>
								{/* Fullscreen */}
								<div className="iten">
									<div
										className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center`}
										onClick={() => fullscreen()}>
										<FontAwesomeIcon
											className="w-3 h-3 md:h-4 md:w-4 text-white"
											icon={faExpand}
										/>
									</div>
								</div>
								<div className="iten">
									<div
										className={`bg-[${props.color}] w-8 h-8 md:h-10 md:w-10 cursor-pointer flex justify-center items-center`}
										onClick={() => info()}>
										<FontAwesomeIcon
											className="w-3 h-3 md:h-4 md:w-4 text-white"
											icon={faInfoCircle}
										/>
									</div>
								</div>
							</div>
						</div>

						<MemoizedModal
							open={open}
							onCancel={handleCancel} // Use memoized function here
						/>
					</div>
				</div>
			</div>
		</>
	);
}
