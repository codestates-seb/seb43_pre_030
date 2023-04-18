import SignupInfo from '../components/SignupInfo';
import SOInfo from '../components/SoInfo';

function Signup() {
  return (
    <div className="flex justify-center w-full h-[calc(100vh-180px)] align-center bg-soGray-bg">
      <div className="flex items-center justify-center w-full h-full mx-32">
        <SOInfo />
        <SignupInfo />

      </div>
    </div>
  );
}

export default Signup;