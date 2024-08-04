import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { GlareCard } from '../ui/glare-card';

export function AboutMeCard() {
  return (
    <GlareCard className="relative flex flex-col items-center justify-center">
      <Image
        src={`https://github.com/williamelesbao.png`}
        alt="William Elesbão"
        width={120}
        height={120}
        className="rounded-full text-white"
      />
      <p className="mt-4 text-xl font-bold text-white">William Elesbão</p>
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="rounded-full">
          <Link href={`https://github.com/williamelesbao`} target="_blank" className='text-white/75 cursor-pointer'>
            <GitHubLogoIcon className="h-9 w-9" />
          </Link>
        </div>
        <div className="rounded-full">
          <Link href={`https://linkedin.com/williamelesbao`} target="_blank" className='text-white/75 cursor-pointer'>
            <LinkedInLogoIcon className="h-9 w-9" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center">
        <p className="mt-4 text-base font-semibold text-white/75">
          Full Stack Developer
        </p>
      </div>
    </GlareCard>
  );
}
