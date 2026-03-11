// import React, { useState } from "react";
// import { FaFacebookF } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FiBookmark } from "react-icons/fi";
// import { FiCopy } from "react-icons/fi";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import "./Vedio.css";

// const Videos = () => {
//   const [hover, setHover] = useState(0);
//   return (
//     <div className="videos-section">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 col-md-12 col-sm-12">
//             <div className="headig mb-5">
//               <h2>Lok Sujak Videos</h2>
//             </div>
//             {/* CARD 1 */}
//             <div className="video-card mb-4">
//               {/* VIDEO */}
//               <div className="video-wrapper">
//               <iframe src="https://www.youtube.com/embed/ttdFCZyopkA?si=hNNGXk_Ig263W4B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//               </div>

//               {/* BODY */}

//               <div className="video-body">
//                 <h3 className="video-title">
//                   Farmers' resistance against corporate farming
//                 </h3>

//                 <div className="video-meta">
//                   <div className="meta-data">
//                     <p>10 March 2026</p>
//                   </div>
//                   <div className="meta-name">
//                     <div className="name">
//                       <h4>Sumaira Aslam</h4>
//                     </div>
//                   </div>
//                 </div>

//                 {/* SOCIAL ICONS */}

//                 <div className="video-icons text-center">
//                   <div className="bookmark hover">
//                     <FiBookmark size={18} />
//                   </div>
//                   <div className="facbook hover">
//                     <FaFacebookF size={18} />
//                   </div>
//                   <div className="whatsapp hover">
//                     <FaWhatsapp size={18} />
//                   </div>
//                   <div className="twitter hover">
//                     <FaTwitter size={18} />
//                   </div>
//                   <div className="linkedin hover">
//                     <FaLinkedinIn size={18} />
//                   </div>
//                   <div className="copy hover">
//                     <FiCopy size={18} />
//                   </div>
//                 </div>
//               </div>

//               {/* RATING */}

//               <div className="rating-box">
//                 <div className="rating-btn">
//                   <div className="btns">
//                     <div className="first-btn">
//                       <button>submit</button>
//                     </div>
//                     <div className="second-btn">
//                       <button>See Rating</button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rating-stars">
//                   <h1>How do you like this report?</h1>

//                   <div className="stars">
//                     {[...Array(5)].map((_, index) => {
//                       const currentStar = index + 1;

//                       return (
//                         <span
//                           key={index}
//                           onMouseEnter={() => setHover(currentStar)}
//                           onMouseLeave={() => setHover(0)}
//                           className="star"
//                         >
//                           {currentStar <= hover ? (
//                             <FaStar size={40} />
//                           ) : (
//                             <FaRegStar size={40} />
//                           )}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CARD 2 */}

//             <div className="video-card mb-4">
//               <div className="video-wrapper">
//                <iframe src="https://www.youtube.com/embed/QzMSeF-AlEE?si=gGnuglykiVWKElk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//               </div>

//               <div className="video-body">
//                 <h2 className="video-title">Village wells now polluted</h2>

//                 <div className="video-meta">
//                   <div className="meta-data">
//                     <p>10 March 2026</p>
//                   </div>
//                   <div className="meta-name">
//                     <div className="name">
//                       <h4>Sumaira Aslam</h4>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="video-icons text-center">
//                   <div className="bookmark hover">
//                     <FiBookmark size={18} />
//                   </div>
//                   <div className="facbook hover">
//                     <FaFacebookF size={18} />
//                   </div>
//                   <div className="whatsapp hover">
//                     <FaWhatsapp size={18} />
//                   </div>
//                   <div className="twitter hover">
//                     <FaTwitter size={18} />
//                   </div>
//                   <div className="linkedin hover">
//                     <FaLinkedinIn size={18} />
//                   </div>
//                   <div className="copy hover">
//                     <FiCopy size={18} />
//                   </div>
//                 </div>
//               </div>

//               <div className="rating-box">
//                 <div className="rating-btn">
//                   <div className="btns">
//                     <div className="first-btn">
//                       <button>submit</button>
//                     </div>
//                     <div className="second-btn">
//                       <button>See Rating</button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rating-stars">
//                   <h1>How do you like this report?</h1>

//                   <div className="stars">
//                     {[...Array(5)].map((_, index) => {
//                       const currentStar = index + 1;

//                       return (
//                         <span
//                           key={index}
//                           onMouseEnter={() => setHover(currentStar)}
//                           onMouseLeave={() => setHover(0)}
//                           className="star"
//                         >
//                           {currentStar <= hover ? (
//                             <FaStar size={40} />
//                           ) : (
//                             <FaRegStar size={40} />
//                           )}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* card 3 */}
//             <div className="video-card mb-4">
//               <div className="video-wrapper">
//               <iframe  src="https://www.youtube.com/embed/s4gbYE-b_C8?si=CqCyLE9sKKhd2LiL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//               </div>

//               <div className="video-body">
//                 <h2 className="video-title">Village wells now polluted</h2>

//                 <div className="video-meta">
//                   <div className="meta-data">
//                     <p>10 March 2026</p>
//                   </div>
//                   <div className="meta-name">
//                     <div className="name">
//                       <h4>Sumaira Aslam</h4>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="video-icons text-center">
//                   <div className="bookmark hover">
//                     <FiBookmark size={18} />
//                   </div>
//                   <div className="facbook hover">
//                     <FaFacebookF size={18} />
//                   </div>
//                   <div className="whatsapp hover">
//                     <FaWhatsapp size={18} />
//                   </div>
//                   <div className="twitter hover">
//                     <FaTwitter size={18} />
//                   </div>
//                   <div className="linkedin hover">
//                     <FaLinkedinIn size={18} />
//                   </div>
//                   <div className="copy hover">
//                     <FiCopy size={18} />
//                   </div>
//                 </div>
//               </div>

//               <div className="rating-box">
//                 <div className="rating-btn">
//                   <div className="btns">
//                     <div className="first-btn">
//                       <button>submit</button>
//                     </div>
//                     <div className="second-btn">
//                       <button>See Rating</button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="rating-stars">
//                   <h1>How do you like this report?</h1>

//                   <div className="stars">
//                     {[...Array(5)].map((_, index) => {
//                       const currentStar = index + 1;

//                       return (
//                         <span
//                           key={index}
//                           onMouseEnter={() => setHover(currentStar)}
//                           onMouseLeave={() => setHover(0)}
//                           className="star"
//                         >
//                           {currentStar <= hover ? (
//                             <FaStar size={40} />
//                           ) : (
//                             <FaRegStar size={40} />
//                           )}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Videos;






import React, { useState } from "react";
import { useTranslation } from "react-i18next";  
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Vedio.css";

const Videos = () => {
  const { t, i18n } = useTranslation();  
  const [hover, setHover] = useState(0);
  return (
    <div className="videos-section" dir={i18n.language === "ur" ? "rtl" : "ltr"}>  
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="headig mb-5">
              <h2>{t("lokSujakVideos")}</h2> 
            </div>
            {/* CARD 1 */}
            <div className="video-card mb-4">
              <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/ttdFCZyopkA?si=hNNGXk_Ig263W4B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="video-body">
                <h3 className="video-title">{t("video1Title")}</h3>  
                <div className="video-meta">
                  <div className="meta-data">
                    <p>{t("videoDate")}</p>  
                  </div>
                  <div className="meta-name">
                    <div className="name">
                      <h4>{t("videoAuthor")}</h4>  
                    </div>
                  </div>
                </div>
                <div className="video-icons text-center">
                  <div className="bookmark hover"><FiBookmark size={18} /></div>
                  <div className="facbook hover"><FaFacebookF size={18} /></div>
                  <div className="whatsapp hover"><FaWhatsapp size={18} /></div>
                  <div className="twitter hover"><FaTwitter size={18} /></div>
                  <div className="linkedin hover"><FaLinkedinIn size={18} /></div>
                  <div className="copy hover"><FiCopy size={18} /></div>
                </div>
              </div>
              <div className="rating-box">
                <div className="rating-btn">
                  <div className="btns">
                    <div className="first-btn"><button>{t("submit")}</button></div>  
                    <div className="second-btn"><button>{t("seeRating")}</button></div>  
                  </div>
                </div>
                <div className="rating-stars">
                  <h1>{t("ratingQuestion")}</h1>  
                  <div className="stars">
                    {[...Array(5)].map((_, index) => {
                      const currentStar = index + 1;
                      return (
                        <span key={index} onMouseEnter={() => setHover(currentStar)} onMouseLeave={() => setHover(0)} className="star">
                          {currentStar <= hover ? <FaStar size={40} /> : <FaRegStar size={40} />}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="video-card mb-4">
              <div className="video-wrapper">
               <iframe src="https://www.youtube.com/embed/QzMSeF-AlEE?si=gGnuglykiVWKElk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="video-body">
                <h2 className="video-title">{t("video2Title")}</h2>  
                <div className="video-meta">
                  <div className="meta-data">
                    <p>{t("videoDate")}</p>  
                  </div>
                  <div className="meta-name">
                    <div className="name">
                      <h4>{t("videoAuthor")}</h4>  
                    </div>
                  </div>
                </div>
                <div className="video-icons text-center">
                  <div className="bookmark hover"><FiBookmark size={18} /></div>
                  <div className="facbook hover"><FaFacebookF size={18} /></div>
                  <div className="whatsapp hover"><FaWhatsapp size={18} /></div>
                  <div className="twitter hover"><FaTwitter size={18} /></div>
                  <div className="linkedin hover"><FaLinkedinIn size={18} /></div>
                  <div className="copy hover"><FiCopy size={18} /></div>
                </div>
              </div>
              <div className="rating-box">
                <div className="rating-btn">
                  <div className="btns">
                    <div className="first-btn"><button>{t("submit")}</button></div>
                    <div className="second-btn"><button>{t("seeRating")}</button></div>
                  </div>
                </div>
                <div className="rating-stars">
                  <h1>{t("ratingQuestion")}</h1>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => {
                      const currentStar = index + 1;
                      return (
                        <span key={index} onMouseEnter={() => setHover(currentStar)} onMouseLeave={() => setHover(0)} className="star">
                          {currentStar <= hover ? <FaStar size={40} /> : <FaRegStar size={40} />}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="video-card mb-4">
              <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/s4gbYE-b_C8?si=CqCyLE9sKKhd2LiL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="video-body">
                <h2 className="video-title">{t("video2Title")}</h2>
                <div className="video-meta">
                  <div className="meta-data">
                    <p>{t("videoDate")}</p>
                  </div>
                  <div className="meta-name">
                    <div className="name">
                      <h4>{t("videoAuthor")}</h4>
                    </div>
                  </div>
                </div>
                <div className="video-icons text-center">
                  <div className="bookmark hover"><FiBookmark size={18} /></div>
                  <div className="facbook hover"><FaFacebookF size={18} /></div>
                  <div className="whatsapp hover"><FaWhatsapp size={18} /></div>
                  <div className="twitter hover"><FaTwitter size={18} /></div>
                  <div className="linkedin hover"><FaLinkedinIn size={18} /></div>
                  <div className="copy hover"><FiCopy size={18} /></div>
                </div>
              </div>
              <div className="rating-box">
                <div className="rating-btn">
                  <div className="btns">
                    <div className="first-btn"><button>{t("submit")}</button></div>
                    <div className="second-btn"><button>{t("seeRating")}</button></div>
                  </div>
                </div>
                <div className="rating-stars">
                  <h1>{t("ratingQuestion")}</h1>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => {
                      const currentStar = index + 1;
                      return (
                        <span key={index} onMouseEnter={() => setHover(currentStar)} onMouseLeave={() => setHover(0)} className="star">
                          {currentStar <= hover ? <FaStar size={40} /> : <FaRegStar size={40} />}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;

