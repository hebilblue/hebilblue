import KVKKContent from './component/KVKKContent.tsx'
import styles from './page.module.css'

// Generate static params for static export
export async function generateStaticParams() {
    return [
        { lang: 'tr' },
        { lang: 'en' },
        { lang: 'ru' }
    ]
}

export default function Page() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <KVKKContent />
            </div>
        </div>
    )
}
