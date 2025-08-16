"use client"
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from '../page.module.css'

const KVKKContent = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>{t('kvkk.title')}</h1>
                <p className={styles.paragraph}>
                    {t('kvkk.description')}
                </p>
            </div>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.dataController.title')}</h2>
                <p className={styles.paragraph}>
                    {t('kvkk.sections.dataController.content')}
                </p>
            </section>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.personalData.title')}</h2>
                <p className={styles.paragraph}>{t('kvkk.sections.personalData.description')}</p>
                <ul className={styles.list}>
                    {(t('kvkk.sections.personalData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.processingPurposes.title')}</h2>
                <p className={styles.paragraph}>{t('kvkk.sections.processingPurposes.description')}</p>
                <ul className={styles.list}>
                    {(t('kvkk.sections.processingPurposes.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.dataTransfer.title')}</h2>
                <p className={styles.paragraph}>
                    {t('kvkk.sections.dataTransfer.description')}
                </p>
                <ul className={styles.list}>
                    {(t('kvkk.sections.dataTransfer.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph}>{t('kvkk.sections.dataTransfer.note')}</p>
            </section>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.collectionMethod.title')}</h2>
                <p className={styles.paragraph}>
                    {t('kvkk.sections.collectionMethod.description')}
                </p>
                <ul className={styles.list}>
                    {(t('kvkk.sections.collectionMethod.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph}>{t('kvkk.sections.collectionMethod.note')}</p>
            </section>

            <section>
                <h2 className={styles.subtitle}>{t('kvkk.sections.rights.title')}</h2>
                <p className={styles.paragraph}>{t('kvkk.sections.rights.description')}</p>
                <ul className={styles.list}>
                    {(t('kvkk.sections.rights.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>

                <div className={styles.contactInfo}>
                    <p className={styles.paragraph}>
                        {t('kvkk.sections.rights.contactInfo')}<br />
                        <strong>{t('kvkk.sections.rights.email')}</strong> <a href="mailto:hebilblue@gmail.com">hebilblue@gmail.com</a>
                    </p>
                </div>
            </section>

            <div className={styles.footer}>
                <Link href="/" className={styles.backLink}>{t('kvkk.backToHome')}</Link>
                <p className={styles.copyright}>{t('kvkk.copyright')}</p>
            </div>
        </>
    )
}

export default KVKKContent
