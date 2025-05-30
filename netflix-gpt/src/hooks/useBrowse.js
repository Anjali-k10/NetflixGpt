import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const useBrowse = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log('Sign out button clicked'); 
    signOut(auth)
      .then(() => {
        console.log('Successfully signed out');
        navigate("/"); 
      })
      .catch((error) => {
        console.error('Sign out error: ', error);
        navigate("*");
      });
  };

  
  useEffect(() => {
    if (!user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  return { handleSignOut }; 
};

export default useBrowse;
