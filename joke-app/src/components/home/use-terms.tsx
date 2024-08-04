'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from '../ui/animated-modal';
import { AboutMeCard } from './about-me-card';

export function Terms() {
  return (
    <div className="flex items-center justify-center py-40">
      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black">
          <div className="flex flex-row items-center">
            <GitHubLogoIcon className="mr-2 h-6 w-6" />
            <span className="text-sm font-medium">Made by William Elesbão</span>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className='items-center bg-transparent rounded-md'>
            {/* <div className="mx-auto flex max-w-sm flex-wrap items-start justify-start gap-x-4 gap-y-6 py-10"> */}
              <AboutMeCard />
            {/* </div> */}
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
