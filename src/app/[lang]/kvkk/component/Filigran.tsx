import Image from 'next/image';
import logoPattern from '../../../assets/hebilblue-logo-pattern.webp';
import styles from '../page.module.css';

const Filigran = () => {
    return (
        <div className={styles.watermark}>
            <Image
                src={logoPattern}
                alt="Logo Pattern"
                className={"absolute top-0 left-0 w-[200px] md:w-[528px] opacity-50 md:opacity-100 hidden md:block"}
                width={150}
                height={150}
            />
            <Image
                src={logoPattern}
                alt="Logo"
                className={`absolute top-0 right-0 w-[200px] md:w-[528px] scale-x-[-1] opacity-50 hidden md:block md:opacity-100`}
                width={528}
                height={200}
            />
        </div>
    )
}

export default Filigran
