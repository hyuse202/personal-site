import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
// import { useDetectAdBlock } from "adblock-detect-react";
import { toast } from "sonner";
import Body from "@/partials/Body";
// import MusicShowcase from "../components/MusicShowcase";
// import SiteTransitions from "../components/SiteTransitions";
// import { MediaPlayer, MediaProvider } from '@vidstack/react';
// import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
// import '@vidstack/react/player/styles/base.css';
// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';
import Skeleton from 'react-loading-skeleton';

export default function HomePage() {
    // const isAdBlockerActive = useDetectAdBlock();
    const [mode, setMode] = useState("image");
    const [loading, setLoading] = useState(true); // Add loading state

    const videoUrl1 = 'youtube/vLKT6KzGV0g';

    // useEffect(() => {
    //     // Simulate an asynchronous operation (replace with your actual data fetching logic)
    //     setTimeout(() => {
    //         setLoading(false); // Set loading state to false when data fetching is complete
    //     }, 2000);

    //     if (isAdBlockerActive) {
    //         toast.message(
    //             `Please disable your adblock for a better experience. We don't have any ads on our site.`,
    //             {
    //                 position: "bottom-right",
    //                 important: true,
    //                 duration: 100000,
    //                 className: "flex-center font-karla text-white",
    //             }
    //         );
    //     }
    // }, [isAdBlockerActive]);

    const switchToImage = () => {
        setMode("image");
    };

    const switchToVideo = () => {
        setMode("video");
    };

    const loadingdisplay = (
        <Body title="Projects">
            <h1 className="font-extrabold text-6xl tracking-tight">
                {loading ? <Skeleton width={200} /> : "Projects"}
            </h1>
            <div className="mt-[20px]"></div>
            <Skeleton baseColor="#202020" width="100px" highlightColor="#666" />
            <div className="mt-[40px]"></div>
            <Skeleton
                baseColor="#202020"
                height="42px"
                className="rounded-lg"
                highlightColor="#666"
            />
            <div className="mt-10">
                <Skeleton
                    height="122px"
                    count={3}
                    className="w-full my-2 rounded-lg"
                    baseColor="#202020"
                    borderRadius="10px"
                    highlightColor="#666"
                />
            </div>
        </Body>
    );

    return (
        <main>
            <Head>
                <title>Ayl Rose</title>
            </Head>
            {/* <SiteTransitions /> */}
            <div className="relative z-0">
                <div className="flex flex-col items-start my-5 relative">
                    <div className="w-[100vh] left-0 md:left-[-20vh] h-[40vh] md:h-[40vh] overflow-hidden relative">
                        <div className={`media-container relative h-full w-full ${mode === 'image' ? '' : 'hidden'}`}>
                            {loading ? (
                                <Skeleton height={400} width={400} />
                            ) : (
                                <Image
                                    quality={100}
                                    src="/ayl.png"
                                    alt="ayl rose"
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-blend-overlay object-cover rounded brightness-50"
                                />
                            )}
                        </div>
                        {/* <div className={`media-container relative h-[50vh] w-[100vh] ${mode === 'video' ? '' : 'hidden'}`}>
                            {loading ? (
                                <Skeleton height={400} width={400} />
                            ) : (
                                <MediaPlayer src={videoUrl1} className="h-scrreen" load="visible">
                                    <MediaProvider />
                                    <DefaultVideoLayout icons={defaultLayoutIcons}  />
                                </MediaPlayer>
                            )}
                        </div> */}
                        <div
                            className="title-description absolute bottom-0 left-0 mb-4 ml-4"
                            style={{ zIndex: 20, maxWidth: "550px" }}
                        >
                            <h1 className="font-extrabold text-2xl md:text-5xl tracking-tight text-white pr-4" style={{ textDecoration: "underline" }}>
                                {loading ? <Skeleton width={200} /> : "Ayl Rose"}
                            </h1>
                            <h2
                                className="text-gray-700 dark:text-gray-200 mb-1 relative"
                                style={{ position: "relative" }}
                            >
                                {loading ? (
                                    <>
                                        {loadingdisplay}
                                    </>
                                ) : (
                                    <>
                                        With his great desire to return to the times of the 80's where neon
                                        lights and VHS were a custom, Ayl Rose brings you fresh vibes of
                                        genres from that time where he will transmit unique emotions and
                                        thoughts through a very unique style.
                                        <br />
                                        <br />
                                        Ayl Rose is an independent composer, producer, and artist
                                        highlighting the beauty of the particularly beautiful genres of
                                        past eras, trying to convey a story that will captivate even your
                                        heart.
                                        <br />
                                        <br />
                                        This is the story of an artist whose soul still lives in the 90's
                                        where those sounds and characteristics of artists from the past
                                        still live in his memory, being one more of those who try to relive
                                        those years back.
                                    </>
                                )}
                            </h2>
                        </div>
                    </div>
                </div>
{/*                <div className="relative md:top-[50%] top-[50vh] right-[-72vh] mb-0 mr-45 flex space-x-4">
                    <button onClick={switchToImage} style={{ zIndex: 20 }} className={`transition-all border-2 p-2 rounded-full focus:outline-none ${mode === 'image' ? 'bg-transparent text-white' : 'bg-gray-300 text-gray-800'}`}>
                        📸
                    </button>
                    <button onClick={switchToVideo} className={`transition-all p-2 border-2 rounded-full focus:outline-none ${mode === 'video' ? 'bg-transparent text-white' : 'bg-gray-300 text-gray-800'}`}>
                        🎥
                    </button>
                </div>*/}
                {/* <div className="mt-5 md:mt-[-0vh]">
                    {loading ? (
                        <>
                            {loadingdisplay}
                        </>
                    ) : (
                        <MusicShowcase />
                    )}
                </div> */}
            </div>
        </main>
    );
}