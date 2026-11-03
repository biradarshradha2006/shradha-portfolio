@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* GLOBAL */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #080b18;
    color: #fff;
    line-height: 1.7;
}

a {
    text-decoration: none;
}

header {
    width: 100%;
    padding: 20px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(15, 18, 40, 0.97);
    border-bottom: 1px solid #303654;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    color: #fff;
    font-size: 26px;
    font-weight: 800;
}

.logo span {
    color: #38bdf8;
}

nav {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

nav a {
    color: #d1d5db;
    font-size: 14px;
    transition: .3s;
}

nav a:hover,
nav a.active {
    color: #a78bfa;
}

/* BUTTONS */
.btn {
    display: inline-block;
    padding: 13px 23px;
    color: white;
    background: linear-gradient(100deg, #7c3aed, #2563eb);
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    transition: .3s;
    border: none;
    cursor: pointer;
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px #7c3aed66;
}

.btn-outline {
    background: transparent;
    border: 1px solid #8064c2;
    color: #c4b5fd;
}

/* HOME PAGE */
.hero {
    min-height: 85vh;
    padding: 70px 9%;
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    align-items: center;
    gap: 45px;
    background:
        radial-gradient(ellipse at 80% 35%, #30205d 0%, transparent 45%),
        linear-gradient(135deg, #080b18, #10152c);
    overflow: hidden;
}

.hero-content {
    max-width: 650px;
    z-index: 2;
}

.tag {
    display: inline-block;
    color: #38bdf8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    color: white;
    font-size: clamp(38px, 5vw, 65px);
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero h1 span,
.page-heading h1 span,
.page-hero h1 span {
    display: block;
    background: linear-gradient(90deg, #a78bfa, #38bdf8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content h2 {
    color: #c4b5fd;
    font-size: 21px;
    margin-bottom: 17px;
}

.hero-content > p {
    color: #b8c1d5;
    font-size: 14px;
    line-height: 2;
    margin-bottom: 28px;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 30px;
}

.tags,
.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tags span,
.skill-tags span {
    padding: 9px 15px;
    border: 1px solid #6550a5;
    border-radius: 25px;
    background: #21183d;
    color: #c4b5fd;
    font-size: 12px;
}

.hero-visual {
    min-height: 430px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.profile-card {
    z-index: 2;
    width: 310px;
    padding: 30px;
    text-align: center;
    border-radius: 24px;
    border: 1px solid #7961bb;
    background: linear-gradient(145deg, #242044, #11182e);
    box-shadow: 0 20px 70px #0009;
    animation: floatProfile 4s ease-in-out infinite;
}

.profile-top,
.profile-bottom {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: #38bdf8;
    font-size: 10px;
    letter-spacing: 1px;
}

.avatar {
    width: 130px;
    height: 130px;
    margin: 25px auto;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #2563eb);
    border: 5px solid #c4b5fd;
    color: white;
    font-size: 45px;
    font-weight: 800;
}

.profile-card h2 {
    color: white;
    font-size: 22px;
}

.profile-card p {
    color: #a78bfa;
    font-size: 13px;
    margin-top: 8px;
}

.profile-line {
    height: 1px;
    background: #49406f;
    margin: 25px 0;
}

.profile-bottom {
    color: #aeb6cc;
    font-size: 9px;
}

.floating {
    position: absolute;
    padding: 12px 17px;
    border-radius: 12px;
    background: #1c2140;
    color: #c4b5fd;
    border: 1px solid #6550a5;
    box-shadow: 0 8px 25px #0007;
    font-size: 12px;
    animation: floatProfile 3s ease-in-out infinite;
}

.one {
    top: 45px;
    right: 0;
}

.two {
    bottom: 65px;
    left: -10px;
}

.three {
    bottom: 5px;
    right: 10px;
}

.highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    padding: 35px 9% 75px;
}

.card {
    padding: 30px;
    border-radius: 18px;
    background: linear-gradient(145deg, #171d35, #101426);
    border: 1px solid #303654;
    transition: .3s;
}

.card:hover {
    transform: translateY(-7px);
    border-color: #8b5cf6;
}

.card > span {
    color: #38bdf8;
    font-size: 11px;
    letter-spacing: 2px;
}

.card h3 {
    color: #c4b5fd;
    margin: 15px 0 10px;
}

.card p {
    color: #aeb6cc;
    font-size: 13px;
}

/* COMMON PAGE LAYOUT */
.page-container {
    max-width: 1100px;
    margin: 55px auto;
    padding: 0 25px;
}

.page-heading {
    text-align: center;
    padding: 55px 20px;
    margin-bottom: 35px;
    border-radius: 22px;
    background: radial-gradient(circle at 80% 10%, #443078, transparent 45%),
                linear-gradient(135deg, #191936, #111a32);
    border: 1px solid #6550a5;
}

.page-heading h1,
.page-hero h1 {
    color: white;
    font-size: clamp(36px, 5vw, 55px);
    line-height: 1.3;
    margin-bottom: 15px;
}

.page-heading p,
.page-hero p {
    color: #b8c1d5;
    font-size: 14px;
}

.page-hero {
    padding: 45px;
    margin-bottom: 55px;
    border-radius: 22px;
    background: linear-gradient(135deg, #191936, #111a32);
    border: 1px solid #6550a5;
}

.page-hero h2 {
    color: #c4b5fd;
    font-size: 19px;
    margin: 12px 0;
}

.page-hero p {
    max-width: 650px;
    line-height: 1.9;
    margin: 15px 0 25px;
}

.content-section {
    margin-bottom: 45px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.section-title > span {
    padding: 9px 13px;
    border: 1px solid #6550a5;
    border-radius: 9px;
    background: #21183d;
    color: #38bdf8;
    font-weight: 700;
}

.section-title h2 {
    color: #c4b5fd;
    font-size: 23px;
}

.content-card {
    padding: 27px;
    border-radius: 17px;
    background: linear-gradient(135deg, #171e37, #11172b);
    border: 1px solid #303956;
    transition: .3s;
}

.content-card:hover {
    border-color: #8b5cf6;
}

.content-card p {
    color: #c3cada;
    line-height: 2;
}

/* RESUME */
.timeline {
    border-left: 2px solid #6550a5;
    margin-left: 12px;
    padding-left: 28px;
}

.timeline-item {
    position: relative;
    margin-bottom: 25px;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -36px;
    top: 25px;
    width: 13px;
    height: 13px;
    background: #38bdf8;
    border-radius: 50%;
    box-shadow: 0 0 15px #38bdf8;
}

.timeline small,
.project-card small {
    color: #38bdf8;
    font-size: 10px;
    letter-spacing: 2px;
}

.timeline h3,
.project-card h3 {
    color: #c4b5fd;
    margin: 10px 0;
}

.timeline p {
    color: #d1d5db;
    font-size: 14px;
}

.project-card {
    padding: 30px;
    border: 1px solid #6550a5;
    border-radius: 20px;
    background: linear-gradient(135deg, #201943, #111b34);
}

.project-card p {
    color: #bdc5d8;
    line-height: 1.9;
    margin: 15px 0 22px;
}

.skill-tags span {
    transition: .3s;
}

.skill-tags span:hover {
    background: #6d42c1;
    color: white;
    transform: translateY(-3px);
}

/* BIO-DATA */
.biodata-profile {
    text-align: center;
    padding: 35px;
    margin-bottom: 45px;
    border-radius: 20px;
    background: linear-gradient(135deg, #30205d, #151b36);
    border: 1px solid #6550a5;
}

.biodata-profile .avatar {
    margin: 0 auto 18px;
}

.biodata-profile h2 {
    color: white;
    font-size: 27px;
}

.biodata-profile p {
    color: #c4b5fd;
    margin: 8px 0;
}

.status {
    display: inline-block;
    padding: 7px 17px;
    margin-top: 12px;
    background: #21183d;
    color: #c4b5fd;
    border-radius: 20px;
    font-size: 12px;
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
}

.detail {
    padding-bottom: 12px;
    border-bottom: 1px solid #343956;
}

.detail span {
    display: block;
    color: #38bdf8;
    font-size: 12px;
    margin-bottom: 5px;
}

.detail strong {
    color: #e2e8f0;
    font-size: 14px;
}

/* SKILLS */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 23px;
}

.skill-card {
    padding: 28px;
    border-radius: 19px;
    background: linear-gradient(145deg, #191e39, #101629);
    border: 1px solid #343956;
    transition: .3s;
}

.skill-card:hover {
    transform: translateY(-8px);
    border-color: #a78bfa;
    box-shadow: 0 12px 30px #7c3aed22;
}

.skill-icon {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: linear-gradient(135deg, #30205d, #172554);
    border: 1px solid #6550a5;
    font-size: 27px;
    margin-bottom: 20px;
}

.skill-card h2 {
    color: #c4b5fd;
    font-size: 20px;
    margin-bottom: 10px;
}

.skill-card p {
    color: #aeb6cc;
    font-size: 13px;
    line-height: 1.8;
    min-height: 70px;
}

.level {
    display: inline-block;
    margin-top: 16px;
    padding: 6px 13px;
    border: 1px solid #6550a5;
    border-radius: 20px;
    color: #38bdf8;
    font-size: 11px;
}

.skills-message {
    padding: 40px 25px;
    margin-top: 45px;
    border-radius: 20px;
    background: linear-gradient(135deg, #30205d, #101b38);
    border: 1px solid #6550a5;
    text-align: center;
}

.skills-message h2 {
    color: #c4b5fd;
    margin-bottom: 12px;
}

.skills-message p {
    color: #cbd5e1;
}

/* CONTACT */
.contact-layout {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 25px;
}

.contact-info,
.contact-form-card {
    padding: 32px;
    border-radius: 22px;
    background: linear-gradient(145deg, #191e39, #101629);
    border: 1px solid #343956;
}

.contact-info h2,
.contact-form-card h2 {
    color: #c4b5fd;
    font-size: 26px;
    margin-bottom: 12px;
}

.contact-info > p,
.contact-form-card > p {
    color: #aeb6cc;
    font-size: 13px;
    line-height: 1.9;
    margin-bottom: 25px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 16px;
    margin: 15px 0;
    border-radius: 13px;
    background: #202443;
    border: 1px solid #343956;
}

.contact-icon {
    min-width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #7c3aed, #2563eb);
    border-radius: 12px;
}

.contact-item small {
    color: #38bdf8;
    font-size: 9px;
    letter-spacing: 2px;
}

.contact-item h3 {
    color: #e2e8f0;
    font-size: 13px;
    margin-top: 5px;
}

.social-title {
    color: #c4b5fd;
    margin: 28px 0 15px;
}

.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.social-links a {
    color: #c4b5fd;
    padding: 9px 14px;
    border: 1px solid #6550a5;
    border-radius: 22px;
    background: #28204a;
    font-size: 12px;
    transition: .3s;
}

.social-links a:hover {
    background: #6d42c1;
    color: white;
}

.contact-form-card label {
    display: block;
    color: #d5ccf7;
    font-size: 13px;
    margin: 16px 0 8px;
}

.contact-form-card input,
.contact-form-card textarea {
    width: 100%;
    padding: 13px;
    color: white;
    background: #0b1124;
    border: 1px solid #3d4565;
    border-radius: 10px;
    outline: none;
    font-family: inherit;
    font-size: 13px;
}

.contact-form-card input:focus,
.contact-form-card textarea:focus {
    border-color: #a78bfa;
    box-shadow: 0 0 12px #7c3aed33;
}

.contact-form-card textarea {
    resize: vertical;
}

.send-btn {
    width: 100%;
    margin-top: 22px;
}

#formMessage {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
}

.form-note {
    margin-top: 15px;
    font-size: 11px !important;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 25px;
    margin-top: 55px;
    background: #12172b;
    border-top: 1px solid #303654;
    color: #aeb6cc;
    font-size: 13px;
}

/* ANIMATION */
@keyframes floatProfile {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-12px);
    }
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-content {
        margin: auto;
    }

    .hero-buttons,
    .tags {
        justify-content: center;
    }

    .hero-visual {
        min-height: 450px;
    }

    .highlights,
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-layout {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
        gap: 18px;
    }

    nav {
        justify-content: center;
        gap: 13px;
    }

    nav a {
        font-size: 12px;
    }

    .hero {
        padding: 50px 6%;
    }

    .highlights,
    .skills-grid,
    .details-grid {
        grid-template-columns: 1fr;
    }

    .page-container {
        margin: 30px auto;
        padding: 0 15px;
    }

    .page-hero,
    .content-card,
    .project-card,
    .contact-info,
    .contact-form-card {
        padding: 22px;
    }

    .profile-card {
        width: 270px;
    }

    .floating {
        font-size: 10px;
    }

    .one {
        right: -5px;
    }

    .two {
        left: -5px;
    }

    .section-title h2 {
        font-size: 19px;
    }
}
