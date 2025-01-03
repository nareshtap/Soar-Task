import { useEffect, useMemo, useState, Suspense, lazy } from 'react';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../../store/slices/userSlice';
import TabNavigation from '../../components/settings/profile/TabNavigation';


const EditProfileForm = lazy(() => import('../../components/settings/profile/EditProfileForm'));
const Preferences = lazy(() => import('../../components/settings/preferences/Preferences'));
const Security = lazy(() => import('../../components/settings/security/Security'));

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');
  const tabs = ['Edit Profile', 'Preferences', 'Security'];

  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);
  const memoizedState = useMemo(() => state, [state]);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  return (
    <div className=" p-5 lg:p-8 bg-[#fff] rounded-[25px]">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-[41px]">
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 'Edit Profile' && memoizedState.users[0] && (
            <EditProfileForm userData={memoizedState.users[0]} />
          )}
          {activeTab === 'Preferences' && <Preferences />}
          {activeTab === 'Security' && <Security />}
        </Suspense>
      </div>
    </div>
  );
};

export default Settings;
