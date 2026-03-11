// import React from "react";
// // repeat cards to make 12
// //   const articles = Array(4)
// //     .fill(data)
// //     .flat();
// import "./Articles.css";
// const Articles = () => {
//   const data = [
//     {
//       image: "/img1.png",
//       title:
//         "Migrating Burkis quit their Ormari language, leaving it behind in their villages",
//       author: "Arshad Momand",
//       authorImg: "/author 1.png",
//     },

//     {
//       image: "/img2.png",
//       title: "The story of Dhatki, the language of folk songs of Thar",
//       author: "Jai Prakash",
//     },

//     {
//       image: "/img3.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Mehreen Burney",
//       authorImg: "/author2.png",
//     },
//     {
//       image: "/img4.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Jai Parkash",
      
//     },
//     {
//       image: "/img5.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Ashfaq Lagari",
//       authorImg: "/author3.png",
//     },
//     {
//       image: "/img6.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Uzma Iqbal",
//       authorImg: "/author4.png",
//     },
//     {
//       image: "/img7.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Sumaira Aslam",
      
//     },
//     {
//       image: "/img8.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Sumaira Aslam",
//       authorImg: "/author5.png",
//     },
//     {
//       image: "/img2.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Ashfaq Lagari",
//       authorImg: "/author3.png",
//     },
//     {
//       image: "/img10.jpg",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Nabi Jan Orkazai",
//       authorImg: "/author6.png",
//     },
//     {
//       image: "/img11.png",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Sujak Report",
      
//     },
//     {
//       image: "/img12.jpg",
//       title:
//         "Darzi, darzan and darazdotcom: Who is winning the contest over how we clothe?",
//       author: "Umar Bacha",
//       authorImg: "/author7.png",
//     },
//   ];

  

//   return (
//     <div className="artical-section">
//       <div className="container mt-5 mb-5 cards">
//         <div className="row g-4">
//           {data.map((item, index) => (
//             <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={index}>
//               <div className="news-card">
//                 {/* Image Section */}

//                 <div className="image-box">
//                   <img src={item.image} alt="article" />

//                   <span className="badge">Article</span>
//                 </div>

//                 {/* Card Body */}

//                 <div className="card-content">
//                   <h5>{item.title}</h5>

//                   <a href="#" className="read-more">
//                     Read more →
//                   </a>
//                 </div>

//                 {/* Card Footer */}

//                 <div className="author">
//                   <div className="card-footer ms-auto">
//                     <span>{item.author}</span>

//                     {item.authorImg && (
//                       <img src={item.authorImg} alt="author" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="articles-btn">
//         <button className="load-btn">Show More Post</button>
//       </div>
//     </div>
//   );
// };

// export default Articles;







import { useTranslation } from "react-i18next";
import "./Articles.css";

const Articles = () => {
  const { t, i18n } = useTranslation();

  const data = [
    { image: "/img1.png",  title: t("card1Title"), author: t("author1"), authorImg: "/author 1.png" },
    { image: "/img2.png",  title: t("card2Title"), author: t("author2") },
    { image: "/img3.png",  title: t("card3Title"), author: t("author3"), authorImg: "/author2.png" },
    { image: "/img4.png",  title: t("card3Title"), author: t("author4") },
    { image: "/img5.png",  title: t("card3Title"), author: t("author5"), authorImg: "/author3.png" },
    { image: "/img6.png",  title: t("card3Title"), author: t("author6"), authorImg: "/author4.png" },
    { image: "/img7.png",  title: t("card3Title"), author: t("author7") },
    { image: "/img8.png",  title: t("card3Title"), author: t("author7"), authorImg: "/author5.png" },
    { image: "/img2.png",  title: t("card3Title"), author: t("author5"), authorImg: "/author3.png" },
    { image: "/img10.jpg", title: t("card3Title"), author: t("author8"), authorImg: "/author6.png" },
    { image: "/img11.png", title: t("card3Title"), author: t("author9") },
    { image: "/img12.jpg", title: t("card3Title"), author: t("author10"), authorImg: "/author7.png" },
  ];

  return (
    <div className="artical-section" dir={i18n.language === "ur" ? "rtl" : "ltr"}>
      <div className="container mt-5 mb-5 cards">
        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={index}>
              <div className="news-card">
                <div className="image-box">
                  <img src={item.image} alt="article" />
                  <span className="badge">{t("article")}</span>
                </div>

                <div className="card-content">
                  <h5>{item.title}</h5>
                  <a href="#" className="read-more">{t("readMore")}</a>
                </div>

                <div className="author">
                  <div className="card-footer ms-auto">
                    <span>{item.author}</span>
                    {item.authorImg && (
                      <img src={item.authorImg} alt="author" />
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="articles-btn">
        <button className="load-btn">{t("showMore")}</button>
      </div>
    </div>
  );
};

export default Articles;