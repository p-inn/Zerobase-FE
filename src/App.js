import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Nav/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.scss';

import { setUserInfo } from './store/userSlice';

import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { requestUserConfirm } from './api/userAPI';

function App() {
  let location = useLocation();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);


  const requestLoginConfirm = useCallback(async () => {
    const userInfo = await requestUserConfirm();
    if (userInfo) {
      setIsLogin(true);
      dispatch(
        setUserInfo({
          email: userInfo.email,
          displayName: userInfo.displayName,
          profileImg: userInfo.profileImg,
        })
      );
    }
  }, [location]);

  useEffect(() => {
    requestLoginConfirm();
  }, [requestLoginConfirm]);

  return (
    <div>
        <div>
          <Navbar isLogin={isLogin} />
          <div className={style.outlet}>
            <Outlet />
          </div>
          <div className={style.footer}>
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
