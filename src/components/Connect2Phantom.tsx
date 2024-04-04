import { FC, useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
};

const Connect2Phantom: FC = () => {
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      if (solWindow?.solana?.isPhantom) {
        setProvider(solWindow.solana);
        setWalletAvail(true);
        // Attemp an eager connection
        solWindow.solana.connect({ onlyIfTrusted: true });
      }
    }
  }, []);

  useEffect(() => {
    provider?.on("connect", (publicKey: PublicKey) => {
      console.log(`connect event: ${publicKey}`);
      setConnected(true);
      setPubKey(publicKey);
    });
    provider?.on("disconnect", () => {
      console.log("disconnect event");
      setConnected(false);
      setPubKey(null);
    });
  }, [provider]);

  const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log(`connect handler`);
    provider?.connect().catch((err) => {
      console.error("connect ERROR:", err);
    });
  };

  const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log("disconnect handler");
    provider?.disconnect().catch((err) => {
      console.error("disconnect ERROR:", err);
    });
  };

  return (
    <div>
      {walletAvail ? (
        <>
          {!connected ? (
            <>
              <button
                className={`bg-[#3887BF] w-[193px] h-[55px] ml-[21px] text-center justify-center items-center text-[20px] leading-normal font-normal text-black`}
                onClick={connectHandler}
                disabled={connected}
              >
                Connect Wallet
              </button>
            </>
          ) : (
            <>
              <button
                className={`bg-[#3887BF] w-[193px] h-[55px] ml-[21px] text-center justify-center items-center text-[20px] leading-normal font-normal text-black`}
                onClick={disconnectHandler}
                disabled={!connected}
              >
                Disconnect
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <p className="ml-3">
            <a href="https://phantom.app/"> To get it. https://phantom.app/</a>.
          </p>
        </>
      )}
    </div>
  );
};

export default Connect2Phantom;
