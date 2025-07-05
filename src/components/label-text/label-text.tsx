import styles from './label-text.module.scss';

type LabelTextProps = {
  label: string;
  text: string | React.ReactNode;
};

export default function LabelText({ label, text }: LabelTextProps) {
  return (
    <p className={styles.label}>
      {label}
      <span className={styles.text}>{text}</span>
    </p>
  );
}
