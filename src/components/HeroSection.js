import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./HeroSection.css";

export const Kim_HomePage = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1
                  className={lightText ? "home__heading" : "home__heading dark"}
                >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Download_HomePage = ({
  lightBg,
  lightText,
  headline,
  buttonLabelPlay,
  buttonLabelApp,
  imgApp,
  imgPlay,
  altApp,
  altPlay,
}) => {
  return (
    <>
      <div
        className={
          lightBg ? "download__hero-section" : "download__hero-section orangeBg"
        }
      >
        <div className="container">
          <div className="row download__hero-row">
            <div className="download__hero-text-wrapper">
              <h1
                className={
                  lightText ? "download__heading" : "download__heading dark"
                }
              >
                {headline}
              </h1>
              <div className="download--button">
                <a href="https://apps.apple.com/us/app/beatboi/id1544905411">
                  <img
                    src={imgApp}
                    alt={altApp}
                    className="download__hero-imgApp"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.JumpStart.BeatBoi">
                  <img
                    src={imgPlay}
                    alt={altPlay}
                    className="download__hero-imgPlay"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BeatBoi_HomePage = ({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
}) => {
  return (
    <>
      <div
        className={
          lightBg ? "beatboi__hero-section" : "beatboi__hero-section darkBg"
        }
      >
        <div className="container">
          <div className="row beatboi__hero-row">
            <div className="col">
              <div className="beatboi__hero-vid-wrapper">
                <ReactPlayer url="https://youtu.be/5Xm7bzDn7wk" />
              </div>
            </div>
            <div className="col">
              <div className="beatboi__hero-text-wrapper">
                <h1
                  className={
                    lightText ? "beatboi__heading" : "beatboi__heading dark"
                  }
                >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "beatboi__hero-subtitle"
                      : "beatboi__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

///////////TeamPage//////////////TeamPage///////////////TeamPage/////////TeamPage//////////////TeamPage//////TeamPage/
//////////TeamPage/////////////TeamPage////////////TeamPage////////TeamPage/////////////////TeamPage/////////TeamPage/

export const Zeke_TeamPage = ({
  lightBg,
  lightText,
  lightTextDesc,
  pageTitle,
  teamMember1,
  teamMember2,
  teamMember3,
  role1,
  role2,
  role3,
  description1,
  email1,
  email2,
  email3,
  description2,
  description3,
  img1,
  alt1,
  img2,
  alt2,
  img3,
  alt3,
}) => {
  return (
    <>
      <div
        className={lightBg ? "team__hero-section" : "team__hero-section darkBg"}
      >
        <div className="team__container">
          <h1 className={lightText ? "team__heading" : "team__heading dark"}>
            {pageTitle}
          </h1>
          <div className="team__profiles">
            <div className="team__profile">
              <img src={img1} alt={alt1} className="team__profile-img" />
              <h3 class="team__user-name">{teamMember1}</h3>
              <h4>{role1}</h4>
              <h5>{email1}</h5>

              <p
                className={
                  lightTextDesc
                    ? "team__hero-subtitle"
                    : "team__hero-subtitle dark"
                }
              >
                {description1}
              </p>
            </div>
            <div className="team__profile">
              <img src={img2} alt={alt2} className="team__profile-img" />
              <h3 class="team__user-name">{teamMember2}</h3>
              <h4>{role2}</h4>
              <h5>{email2}</h5>

              <p
                className={
                  lightTextDesc
                    ? "team__hero-subtitle"
                    : "team__hero-subtitle dark"
                }
              >
                {description2}
              </p>
            </div>
            <div className="team__profile">
              <img src={img3} alt={alt3} className="team__profile-img" />
              <h3 class="team__user-name">{teamMember3}</h3>
              <h4>{role3}</h4>
              <h5>{email3}</h5>
              <p
                className={
                  lightTextDesc
                    ? "team__hero-subtitle"
                    : "team__hero-subtitle dark"
                }
              >
                {description3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const Poppy_Forms = ({
//   lightBg,
//   lightText,
//   lightTextDesc,
//   headline,
//   description,
// }) => {
//   return (
//     <>
//       <form>
//         <div
//           className={
//             lightBg ? "credits__hero-section" : "credits__hero-section darkBg"
//           }
//         >
//           <div className="container">
//             <div className="row credits__hero-row">
//               <div className="col">
//                 <div className="credits__hero-text-wrapper">
//                   <h1 className={lightText ? "heading" : "heading dark"}>
//                     {headline}
//                   </h1>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="credits__hero-text-wrapper">
//                   <p
//                     className={
//                       lightTextDesc
//                         ? "credits__hero-subtitle"
//                         : "credits__hero-subtitle dark"
//                     }
//                   >
//                     {description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

///////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage//////
///////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage/////////////BeatBoiPage//////
export const BeatBoi_GameIdeas = ({
  lightBg,
  lightText,
  GameIdeasHeadline,
  gameIdeas1,
  gameIdeasAlt1,
  gameIdeas2,
  gameIdeasAlt2,
  gameIdeas3,
  gameIdeasAlt3,
  gameIdeas4,
  gameIdeasAlt4,
  gameIdeas5,
  gameIdeasAlt5,
  gameIdeas6,
  gameIdeasAlt6,
}) => {
  return (
    <>
      <div
        className={
          lightBg
            ? "beatboi-page__hero-section"
            : "beatboi-page__hero-section darkBg"
        }
      >
        <div className="container">
          <div className="beatboi-page__hero-text-wrapper">
            <h1
              className={
                lightText
                  ? "beatboi-page__heading"
                  : "beatboi-page__heading dark"
              }
            >
              {GameIdeasHeadline}
            </h1>
            <div className="beat_row1 beatboi-page__hero-row1">
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas1}
                    alt={gameIdeasAlt1}
                    className="beatboi-page__hero-imgs"
                  ></img>
                </div>
              </div>
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas2}
                    alt={gameIdeasAlt2}
                    className="beatboi-page__hero-imgs"
                  />
                </div>
              </div>
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas3}
                    alt={gameIdeasAlt3}
                    className="beatboi-page__hero-imgs"
                  />
                </div>
              </div>
            </div>
            <div className="beat_row1 beatboi-page__hero-row1">
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas4}
                    alt={gameIdeasAlt4}
                    className="beatboi-page__hero-imgs"
                  />
                </div>
              </div>
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas5}
                    alt={gameIdeasAlt5}
                    className="beatboi-page__hero-imgs"
                  />
                </div>
              </div>
              <div className="beat_col1">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={gameIdeas6}
                    alt={gameIdeasAlt6}
                    className="beatboi-page__hero-imgs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BeatBoi_GameScreenshots = ({
  lightBg,
  lightText,
  screenshotHeadline,
  screeenshot1,
  screeenshotAlt1,
  screeenshot2,
  screeenshotAlt2,
  screeenshot3,
  screeenshotAlt3,
  screeenshot4,
  screeenshotAlt4,
}) => {
  return (
    <>
      <div
        className={
          lightBg
            ? "beatboi-page__hero-section"
            : "beatboi-page__hero-section darkBg"
        }
      >
        <div className="container">
          <div className="beatboi-page__hero-text-wrapper">
            <h1
              className={
                lightText
                  ? "beatboi-page__heading"
                  : "beatboi-page__heading dark"
              }
            >
              {screenshotHeadline}
            </h1>
            <div className="beat_row beatboi-page__hero-row1">
              <div className="beat_col">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={screeenshot1}
                    alt={screeenshotAlt1}
                    className="beatboi-page__hero-img"
                  ></img>
                </div>
              </div>
              <div className="beat_col">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={screeenshot2}
                    alt={screeenshotAlt2}
                    className="beatboi-page__hero-img"
                  />
                </div>
              </div>
              <div className="beat_col">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={screeenshot3}
                    alt={screeenshotAlt3}
                    className="beatboi-page__hero-img"
                  />
                </div>
              </div>
              <div className="beat_col">
                <div className="beatboi__hero-img-wrapper">
                  <img
                    src={screeenshot4}
                    alt={screeenshotAlt4}
                    className="beatboi-page__hero-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

///////////Credits Page///////////////Credits Page///////////////Credits Page/////////Credits Page///////////////////Credits Page//////////Credits Page
///////////Credits Page///////////////Credits Page///////////////Credits Page/////////Credits Page///////////////////Credits Page//////////Credits Page

export const Kiki_CreditsPage = ({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
}) => {
  return (
    <>
      <div
        className={
          lightBg ? "credits__hero-section" : "credits__hero-section darkBg"
        }
      >
        <div className="container">
          <div className="row credits__hero-row">
            <div className="col">
              <div className="credits__hero-text-wrapper">
                <h1
                  className={
                    lightText ? "credits__heading" : "credits__heading dark"
                  }
                >
                  {headline}
                </h1>
              </div>
            </div>
            <div className="col">
              <div className="credits__hero-text-wrapper">
                <p
                  className={
                    lightTextDesc
                      ? "credits__hero-subtitle"
                      : "credits__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
