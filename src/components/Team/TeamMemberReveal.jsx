import React from "react";
import styles from "./TeamMemberReveal.module.css";
import Sathyendra from "../../assets/Home_Director/6Q0A0673.JPG.jpeg";
import Kumar from "../../assets/Home_Director/6Q0A0552.JPG.jpeg";
import Sourav from "../../assets/Home_Director/6Q0A0629.JPG.jpeg";

const teamMembers = [
  {
    id: 1,
    title: "Sathyendra Singh",
    name: "Managing Director",
    image: Sathyendra,
    link: "https://github.com/Singhmayank0217",
  },
  {
    id: 2,
    title: "Kumar Deepak",
    name: "",
    image: Kumar,
    post: "Driving innovation in technology",
    link: "https://github.com/RahulChoudhary05",
  },
  {
    id: 3,
    title: "Sourav Singh",
    name: "",
    image: Sourav,
    post: "Driving innovation in technology",
    link: "/team/mike-johnson",
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <div
      onClick={() => {
        window.location.href = member.link;
      }}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.cardFront} flex items-center justify-center`}>
          <div className={styles.imageWrapper}>
            <img src={member.image} alt={member.title} />
          </div>
          <h2 className={styles.name}>{member.title}</h2>
          <p className={styles.title}>{member.name}</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.post}>{member.post || member.name}</p>
        </div>
      </div>
    </div>
  );
};

const TeamMemberReveal = () => {
  return (
    <div className="w-full py-28 text-center bg-gradient-to-b from-slate-100 via-white to-amber-50/60">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 italic mb-5" style={{ fontFamily: '"Playfair Display", serif' }}>
        Board of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
          Directors
        </span>
      </h2>

      <div className="w-32 h-1 mx-auto mb-11 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

      <div className={styles.container}>
        <div className={styles.topRow}>
          <TeamMemberCard
            member={teamMembers[0]}
          />
        </div>

        <div className={styles.bottomRow}>
          {teamMembers.slice(1).map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberReveal;