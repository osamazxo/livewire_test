import { FC, HTMLAttributes } from "react";
import ReactDom from "react-dom";
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}
export const Modal: FC<ModalProps> = ({ opened, setOpened, children }) => {
  return (
    <>
      {ReactDom.createPortal(
        opened && (
          <div>
            <div
              className="fixed top-0 left-0 size-full bg-[#52527a33] z-[1000]"
              onClick={() => {
                setOpened(false);
              }}
            ></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] rounded-[5px] overflow-hidden bg-white">
              {children}
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
};
