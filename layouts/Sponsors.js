import SponsorList from "./sponsor_stuff/sponsor-list"
import SponsorTier from "./sponsor_stuff/sponsor-tier"
import styles from "./sponsor_stuff/sponsors.module.css"
import styles1 from "./sponsor_stuff/layout.module.css"

const Sponsors = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return <div className={styles1.content}>
    <article className={[
                styles.article,
                styles.article__sponsor].join(' ')}
                id="sponsors"
            >
                <div className={[
                    styles.article_section,
                    styles.article__sponsors_section].join(' ')}
                >
                    <h2 className={[
                        styles.sponsor_title,
                        "text_center"
                    ].join(' ')}>
                        We <span className="text_color_secondary">Thank</span> all our <span className="text_color_secondary">sponsors!</span>
                    </h2>
                    <p>Without them we could not exist!</p>

                    <SponsorList />
                </div>

                <div className={[
                    styles.article_section,
                    styles.article__sponsors_tier_section].join(' ')}
                >
                    <h2 className={[
                        styles.sponsor_title,
                        "text_center"
                    ].join(' ')}>
                        Sponsorship <span className="text_color_secondary">Tiers</span>
                    </h2>
        
                    <div className={styles.sponsor_tier_container}>
                        <SponsorTier
                            title="Bronze"
                            cost="<5000₸"
                            src="/images/sponsors/tiers/bronze.svg"
                        >
                            <li>
                                Logo and company profile on the conference website.
                            </li>
                        </SponsorTier>
                        <SponsorTier
                            title="Silver"
                            cost="5000-10000₸"
                            src="/images/sponsors/tiers/silver.svg"
                        >
                            <li>
                                Everything in the <span className="text_weight_bold">Bronze tier</span>.
                            </li>
                            <li>
                                Your company logo on all event marketing materials.
                            </li>
                        </SponsorTier>
                        <SponsorTier
                            title="Gold"
                            cost=">10000₸"
                            src="/images/sponsors/tiers/gold.svg"
                        >
                            <li>
                                Everything in the <span className="text_weight_bold">Bronze and Silver tier</span>.
                            </li>
                            <li>
                                Company logo included in swag.
                            </li>
                        </SponsorTier>
                    </div>

                    <div className={styles.sponsor_contact_info}>
                        <div className={styles.sponsor_contact_info_container}>
                            <h3>
                                Want to join the <span className="text_color_secondary">Club?</span>
                            </h3>

                            <p>Email us at <a href="mailto:staf14367@gmail.com">staf14367@gmail.com</a> with your work email and we will get to you as soon as we can!</p>
                        </div>
                        <a href="mailto:staf14367@gmail.com">
                            <button>Contact Us</button>
                        </a>
                    </div>
                </div>
            </article>
    </div>
};

export default Sponsors;
