import useCountAnimation from '../hooks/useCountAnimation'
import { useInView } from '../hooks/useInView'
import { textStyles } from '../styles/typography'

const StatItem = ({ title, value, suffix }: { title: string, value: number, suffix: string }) => {
    const { ref, isInView } = useInView<HTMLParagraphElement>()
    const { count } = useCountAnimation(value, 2000, isInView)
    
    return (
        <p ref={ref} className={textStyles.statsLarge}>
            {title}<br />{count} {suffix}
        </p>
    )
}

export default StatItem

