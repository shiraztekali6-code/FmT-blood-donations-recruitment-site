"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const INVITATION_VIDEO_SRC = "/videos/prof-okun-invitation.mp4";
const POSTER_FADE_DURATION_MS = 1600;
const INVITATION_VIDEO_POSTERS = {
  en: "/videos/prof-okun-invitation-poster-en.png",
  he: "/videos/prof-okun-invitation-poster.jpg"
} as const;

export function HeroSection() {
  const { language, t } = useLanguage();
  const fadeFallbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const originalVideoMutedRef = useRef(false);
  const isVideoStartQueuedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPosterVisible, setIsPosterVisible] = useState(true);
  const hasVideo = Boolean(INVITATION_VIDEO_SRC);
  const hasVideoCopy = Boolean(t.video.title || t.video.subtitle);
  const invitationVideoPoster = INVITATION_VIDEO_POSTERS[language];

  function clearFadeFallbackTimeout() {
    if (fadeFallbackTimeoutRef.current) {
      clearTimeout(fadeFallbackTimeoutRef.current);
      fadeFallbackTimeoutRef.current = null;
    }
  }

  function resetVideoToStart(video: HTMLVideoElement) {
    try {
      video.currentTime = 0;
    } catch {
      // Some browsers delay seeking until metadata is available.
    }
  }

  function revealVideoAfterPosterFade() {
    const video = videoRef.current;

    if (!isVideoStartQueuedRef.current) {
      return;
    }

    clearFadeFallbackTimeout();
    isVideoStartQueuedRef.current = false;

    if (!video) {
      setIsPosterVisible(true);
      return;
    }

    resetVideoToStart(video);
    video.muted = originalVideoMutedRef.current;

    if (video.paused) {
      void video.play().catch(() => {
        setIsPosterVisible(true);
      });
    }
  }

  function handleVideoStart() {
    if (isVideoStartQueuedRef.current || !isPosterVisible) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      setIsPosterVisible(false);
      return;
    }

    originalVideoMutedRef.current = video.muted;
    isVideoStartQueuedRef.current = true;
    setIsPosterVisible(false);
    clearFadeFallbackTimeout();
    fadeFallbackTimeoutRef.current = setTimeout(
      revealVideoAfterPosterFade,
      POSTER_FADE_DURATION_MS + 80
    );

    resetVideoToStart(video);
    video.muted = true;
    void video.play().catch(() => {
      clearFadeFallbackTimeout();
      isVideoStartQueuedRef.current = false;
      video.muted = originalVideoMutedRef.current;
      setIsPosterVisible(true);
    });
  }

  useEffect(() => clearFadeFallbackTimeout, []);

  return (
    <section id="top" className="hero hero-photo-section">
      <div className="hero-stage">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <h1>{t.hero.title}</h1>
          <div className="hero-text">
            {t.hero.subtitle.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="hero-impact">{t.hero.impact}</p>
          <div className="cta-row">
            <a className="btn primary" href="#registration">
              {t.hero.primaryCta}
            </a>
            <a className="btn secondary hero-secondary" href="#why-this-research-matters">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className="video-band">
        <div className={`container video-layout${hasVideoCopy ? "" : " video-layout-full"}`}>
          {hasVideoCopy ? (
            <div className="video-copy">
              {t.video.title ? <h2>{t.video.title}</h2> : null}
              {t.video.subtitle ? <p>{t.video.subtitle}</p> : null}
            </div>
          ) : null}
          <div className="video-frame" aria-label={t.video.placeholderTitle}>
            {hasVideo ? (
              <>
                <video
                  ref={videoRef}
                  className="study-video"
                  controls
                  onPlay={() => {
                    if (!isVideoStartQueuedRef.current) {
                      clearFadeFallbackTimeout();
                      setIsPosterVisible(false);
                    }
                  }}
                  preload="metadata"
                >
                  <source src={INVITATION_VIDEO_SRC} type="video/mp4" />
                  {t.video.unsupported}
                </video>
                <button
                  type="button"
                  aria-label={t.video.playLabel}
                  className={`video-poster-overlay${isPosterVisible ? "" : " is-hidden"}`}
                  onClick={handleVideoStart}
                  onTransitionEnd={(event) => {
                    if (event.propertyName === "opacity") {
                      revealVideoAfterPosterFade();
                    }
                  }}
                  tabIndex={isPosterVisible ? 0 : -1}
                >
                  <Image
                    className="video-poster-image"
                    src={invitationVideoPoster}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 58vw"
                  />
                  <span className="video-poster-scrim" aria-hidden="true" />
                  <span className="video-poster-play" aria-hidden="true">
                    <span className="video-play-icon" />
                  </span>
                </button>
              </>
            ) : (
              <div className="native-video-placeholder">
                <span className="video-play-icon" aria-hidden="true" />
                <div>
                  <p className="video-placeholder-title">{t.video.placeholderHeading}</p>
                  <p>{t.video.placeholderText}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
