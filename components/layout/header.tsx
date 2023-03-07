import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const Header = () => {
  return (
      <header className="flex justify-between  w-full p-4">
        <div className="flex justify-center">
          <Link href="/">
            <div className="items-center justify-center">
              <Image src="/ets.svg" width="32" height="32" alt="Logo" />
              <span className="ml-4 items-center text-xs">
                Employee Testing Service
              </span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton userProfileMode="modal" afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>
  );
};
