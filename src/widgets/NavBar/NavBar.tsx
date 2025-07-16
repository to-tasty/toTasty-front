import UserDropDown from '@/entities/user/ui/DropdownWithIcon';
import LoginButton from '@/features/Navigation/ui/LoginButton';
import NavTabs from '@/features/Navigation/ui/NavTabs';
import Logo from '@/shared/ui/logo';
import { NavigationMenu } from '@/shared/ui/NavigationMenu';

export default function NavBar() {
  const buttonToggleState = true; // store에서 user 가져와서 조건부 렌더링하게 수정할 예정
  return (
    <div className="w-full bg-white sticky flex justify-center border-b border-[#E3E7EB]">
      <div className="flex justify-between h-[75px] w-7xl items-center px-5">
        <NavigationMenu className="gap-6">
          <Logo />
          <NavTabs />
        </NavigationMenu>
        {buttonToggleState ? <UserDropDown /> : <LoginButton />}
      </div>
    </div>
  );
}
