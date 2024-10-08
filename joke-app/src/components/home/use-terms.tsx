'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger
} from '../ui/animated-modal';
import { AboutMeCard } from './about-me-card';

export function Terms() {
  return (
    <div className="flex items-center justify-center py-40">
      <Modal>
        <ModalTrigger className="group/modal-btn z-50 flex justify-center bg-black text-white dark:bg-white dark:text-black">
          <div className="flex flex-row items-center">
            <GitHubLogoIcon className="mr-2 h-6 w-6" />
            <span className="text-sm font-medium">Made by William Elesbão</span>
          </div>
        </ModalTrigger>
        <ModalBody className="bg-transparent">
          <ModalContent className="items-center rounded-md bg-transparent">
            <AboutMeCard />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
