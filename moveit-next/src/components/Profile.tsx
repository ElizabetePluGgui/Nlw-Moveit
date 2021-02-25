import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/67619417?s=460&u=bc9151a9a009071ebef8c49d9140247fda5340db&v=4"
        alt="Elizabete Fabri"
      />
      <div>
        <strong>Elizabete de Sousa Fabri</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
