import React, { useState } from 'react';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';

function Login() {
  // Type state variables explicitly
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // If you were to use handleSubmit, type the event parameter e
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('로그인 시도:', username, password);
  // };

  return (
    <div className={styles.materialContainer}>
      <div className={styles.box}>
        <div className={styles.title}>로그인</div>

        <div>
          <TextField
            fullWidth
            id="username"
            label="이메일"
            type="text"
            variant="standard"
            // Assuming tossmain is defined in your theme
            color="primary" // You might need to adjust this based on how tossmain is implemented
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
            className={styles.inputmargin}
          />
        </div>

        <div>
          <TextField
            fullWidth
            id="password"
            label="비밀번호"
            type="password"
            variant="standard"
            // Assuming tossmain is defined in your theme
            color="primary" // Adjust based on your theme
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
            className={styles.inputinput}
          />
        </div>

        <div className={`${styles.button} ${styles.login}`}>
          <button type="submit">
            <span>로그인</span>
          </button>
        </div>

        <a href="#" className={styles.passforgot}>비밀번호를 잊으셨나요?</a>
      </div>

      <div className={`${styles.materialbutton} ${styles.alt2}`}>
        <span className={styles.shape}></span>
        <span className={styles.textshape}>회원가입</span>
      </div>
    </div>
  );
}

export default Login;
