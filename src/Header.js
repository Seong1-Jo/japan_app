import styles from "./Header.module.css";
import logo from "./images/umb.jpg";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.img} src={logo} alt="logo"></img>
      </div>
      <div>
        <input type="text" placeholder="검색하기"></input>
      </div>
      <div>
        <div>회원가입</div>
        <div>로그인</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Header;
