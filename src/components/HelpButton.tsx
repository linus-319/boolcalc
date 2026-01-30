import styles from './HelpButton.module.css';

type HelpButtonProps = {
    onClick: () => void
}

export default function HelpButton({ onClick }: HelpButtonProps) {
    return (
        <button type='button' onClick={onClick} className={styles.helpButton}>?</button>
    )
}