import type { FC, MouseEventHandler } from 'react';
import React from 'react';
import { WalletReadyState } from '../base/adapter.js';
import { Wallet } from '../useWallet.js';
import { Button } from './Button.js';
import { WalletIcon } from './WalletIcon.js';

export interface WalletListItemProps {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({ handleClick, tabIndex, wallet }) => {
    return (
        <li>
            <Button onClick={handleClick} startIcon={<WalletIcon wallet={wallet} />} tabIndex={tabIndex}>
                {wallet.adapter.name}
                {wallet.readyState === WalletReadyState.Installed && <span>Detected</span>}
            </Button>
        </li>
    );
};
