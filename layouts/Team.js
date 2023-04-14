import Image from "next/image";

import Badge from "./team_stuff/badge";

import team from "./team_stuff/team.json";
import DefaultImage from "./team_stuff/default.png";

import styles from "./team_stuff/team.module.css";

const Team = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return (
    <div className={styles.content}>
        <article className={styles.team}>
            <h2 className={[styles.team__title, "text_center"].join(' ')} style={{textAlign: "center"}}>
                Our Team
            </h2>
            <p className={[
                styles.team__description,
                "text_center"
            ].join(' ')}>
                Our team consists of consist of 15 members, and 3 interns, who are very passionate about the project and are working hard to make it a success.
            </p>

            <div className={styles.team__members}>
                {
                    team.map((member, index) => (
                        <div className={styles.team__member} key={index}>
                            <div className={[
                                styles.team__member__image,
                                'mb-5'
                            ].join(' ')}>
                                <Image 
                                    src={member.img_src || DefaultImage}
                                    alt="Team member"
                                    fi
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className={styles.team__member__info}>
                                <div className={styles.team__member__title}>
                                    <h3 className={[
                                        styles.team__member__name,
                                        "text_bold pb-1"
                                    ].join(' ')}>
                                        {member.name} {member.last_name}
                                    </h3>
                                    <div className={styles.team_member__badges}>
                                        {
                                            member.badges.map((badge, index2) => (
                                                <Badge text={badge} key={index2}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <p className={[
                                    styles.team__member__desc,
                                    "text"
                                ]}>
                                    {member.text}
                                </p>
                            </div>
                        </div>   
                    ))
                }
            </div>
        </article>
    </div>
)
};

export default Team;
