import type { FC, MouseEventHandler } from 'react';
import React, { useCallback, useMemo } from 'react';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { WalletIcon } from './WalletIcon';
import { WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base';

export const WalletConnectButton: FC<ButtonProps> = ({ children, disabled, onClick, decryptPermission, network, programs, ...props }) => {
    const { wallet, connect, connecting, connected } = useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if (onClick) onClick(event);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented) connect(decryptPermission || "NO_DECRYPT", network || WalletAdapterNetwork.Testnet, programs ?? []).catch(() => {});
        },
        [onClick, connect]
    );

    const content = useMemo(() => {
        if (children) return children;
        if (connecting) return 'Connecting ...';
        if (connected) return 'Connected';
        if (wallet) return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);

    return (
        <Button
            className="wallet-adapter-button-trigger"
            disabled={disabled || !wallet || connecting || connected}
            startIcon={wallet ? <WalletIcon wallet={wallet} /> : undefined}
            onClick={handleClick}
            {...props}
        >
            {content}
        </Button>
    );
};
