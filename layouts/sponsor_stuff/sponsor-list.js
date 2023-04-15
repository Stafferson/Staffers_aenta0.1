import Image from 'next/image';

import styles from './sponsor-list.module.css';


const IMAGE_SCHEMAS = [
	{
		"alt": "chevron",
		"href": "https://www.chevron.com/",
		"src": "/images/sponsors/chevron.png",
	},
	{
		"alt": "caravan-of-knowledge",
		"href": "https://caravanofknowledge.com/",
		"src": "/images/sponsors/caravan-of-knowledge.png",
	},
	{
		"alt": "zertte-studio",
		"href": "https://zertte-studio.kz/",
		"src": "/images/sponsors/zertte-studio.png",
	},
	{
		"alt": "Fizmat",
		"href": "https://fizmat.kz/",
		"src": "/images/sponsors/fizmat.png",
	},
    {
		"alt": "GSC Study",
		"href": "https://gscstudy.kz/",
		"src": "/images/sponsors/gsc-study.png",
	}
]

export default function SponsorList() {
    return (
        <div className={styles.sponsor_container}>
            {IMAGE_SCHEMAS.map((image, index) => (
                <>
                    <a
                        href={image.href}
                        className={[
                            styles.sponsor_wrapper,
                            styles.image_wrapper].join(' ')
                        }
                        key={index}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </>
            ))}
        </div>
    );
}