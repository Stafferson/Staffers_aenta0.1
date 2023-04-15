import Image from 'next/image';

import styles from "./sponsor-tier.module.css"

export default function SponsorTier({
    title,
    cost,
    src,
    children
}) {
    return (
        <div className={styles.sponsor_tier}>
            <div className={styles.image_wrapper}>
                <Image
                    src={src}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h3 className={styles.tier_title}>{title}</h3>
            <h3 className={styles.tier_title}>
                <span className="highlight">{cost}</span>
            </h3>
            <ul className={styles.tier_list}>
                {children}
            </ul>
        </div>
    )
}