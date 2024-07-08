import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type MobileShoppingCardType = {
  className?: string;
  unsplashb4Xk6bzgQWU?: string;
  eXPLOREPATRIKOLOR?: string;
  classicRunwayDress?: string;

  /** Style props */
  propOverflowY?: CSSProperties["overflowY"];
};

const MobileShoppingCard: FunctionComponent<MobileShoppingCardType> = ({
  className = "",
  unsplashb4Xk6bzgQWU,
  eXPLOREPATRIKOLOR,
  classicRunwayDress,
  propOverflowY,
}) => {
  return (
    <div
      className={[
        css`
          height: 447px;
          background-color: var(--whatsapp-white-01);
          border: 1px solid var(--whatsapp-white-02);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-5xs) var(--padding-6xs);
          gap: var(--gap-base);
          width: auto;
          align-self: unset;
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          &:hover {
            background-color: var(--whatsapp-white-01);
            display: flex;
            width: auto;
            align-self: unset;
            height: 447px;
            flex-direction: column;
            gap: var(--gap-base);
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-5xs) var(--padding-6xs);
            box-sizing: border-box;
            border: 1px solid var(--whatsapp-white-02);
          }
          overflow-y: ${propOverflowY};
        `,
        className,
      ].join(" ")}
    >
      <img
        className={css`
          align-self: stretch;
          flex: 1;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
          display: flex;
          width: auto;
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            flex: 1;
          }
        `}
        alt=""
        src={unsplashb4Xk6bzgQWU}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-11xs);
          width: auto;
          height: auto;
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-11xs);
            align-items: flex-start;
            justify-content: flex-start;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: auto;
            align-self: unset;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              width: 156px;
              position: relative;
              line-height: 17px;
              display: flex;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--font-size-sm);
                line-height: 17px;
                text-align: center;
                color: var(--whatsapp-white-11);
                display: flex;
                width: 156px;
              }
            `}
          >
            {eXPLOREPATRIKOLOR}
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: auto;
            height: auto;
            gap: var(--gap-5xs);
            text-align: left;
            font-size: var(--neue-light-12-size);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 120%;
              font-weight: 300;
              display: flex;
              &:hover {
                font-weight: 300;
                font-family: var(--neue-medium-20);
                font-size: var(--neue-light-12-size);
                line-height: 120%;
                text-align: left;
                color: var(--whatsapp-white-11);
                display: flex;
                flex: 1;
              }
            `}
          >
            {classicRunwayDress}
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-0);
          row-gap: 20px;
          width: auto;
          height: auto;
          font-size: var(--neue-medium-16-size);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-0);
            align-items: center;
            justify-content: space-between;
            row-gap: 20px;
          }
        `}
      >
        <div
          className={css`
            width: 234px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              width: 234px;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: flex-start;
            }
          `}
        >
          <div
            className={css`
              width: 89px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 89;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-medium-16-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-11);
                display: flex;
                width: 89px;
                min-width: 89;
              }
            `}
          >
            SHOP NOW
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-11xs) 0px;
            box-sizing: border-box;
            width: auto;
            align-self: unset;
            height: auto;
            gap: var(--gap-0);
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-0);
              align-items: center;
              justify-content: center;
              padding: var(--padding-11xs) 0px;
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xs);
              &:hover {
                display: flex;
                width: 12px;
                height: 12px;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                border-radius: var(--br-base);
              }
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 12px;
                  height: 12px;
                }
              `}
              alt=""
              src="/star.svg"
            />
          </div>
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xs);
              &:hover {
                display: flex;
                width: 12px;
                height: 12px;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                border-radius: var(--br-base);
              }
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 12px;
                  height: 12px;
                }
              `}
              alt=""
              src="/star.svg"
            />
          </div>
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xs);
              &:hover {
                display: flex;
                width: 12px;
                height: 12px;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                border-radius: var(--br-base);
              }
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 12px;
                  height: 12px;
                }
              `}
              alt=""
              src="/star.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileShoppingCard;
