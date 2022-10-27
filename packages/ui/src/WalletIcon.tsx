import type { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';
import React from 'react';
import { Wallet } from '@demox-labs/aleo-wallet-adapter-react';

export interface WalletIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    wallet: Wallet | null;
}

export const WalletIcon: FC<WalletIconProps> = ({ wallet, ...props }) => {
    return wallet && <img src={wallet.adapter.icon} alt={`${wallet.adapter.name} icon`} {...props} />;
};
