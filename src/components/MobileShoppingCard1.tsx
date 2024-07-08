import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type MobileShoppingCard1Type = {
  className?: string;
  unsplashb4Xk6bzgQWU?: string;

  /** Style props */
  propOverflowY?: CSSProperties["overflowY"];
};

const MobileShoppingCard1: FunctionComponent<MobileShoppingCard1Type> = ({
  className = "",
  unsplashb4Xk6bzgQWU,
  propOverflowY,
}) => {
  return (
    <div
      className={[
        css`
          height: 352.7px;
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
          font-size: var(--neue-medium-16-size);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          &:hover {
            background-color: var(--whatsapp-white-01);
            display: flex;
            width: auto;
            align-self: unset;
            height: 352.7px;
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
        loading="lazy"
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
              width: 103px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 103;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-medium-16-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-11);
                display: flex;
                width: 103px;
                min-width: 103;
              }
            `}
          >
            Club 99 Heels
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
            Classic office high heels
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
          gap: var(--gap-xl);
          width: auto;
          height: auto;
          font-size: var(--garamond-bold-20-size);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-xl);
            align-items: center;
            justify-content: space-between;
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
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 76;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-11);
                display: flex;
                min-width: 76;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            N35,000
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
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-xl);
          width: auto;
          height: auto;
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-xl);
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
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
              justify-content: flex-start;
            }
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
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
                border-radius: var(--br-base);
                padding: var(--padding-5xs);
                box-sizing: border-box;
              }
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 24px;
                  height: 24px;
                }
              `}
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
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
              justify-content: flex-start;
            }
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
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
                border-radius: var(--br-base);
                padding: var(--padding-5xs);
                box-sizing: border-box;
              }
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 24px;
                  height: 24px;
                }
              `}
              alt=""
              src="/cart.svg"
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
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
              justify-content: flex-start;
            }
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
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
                border-radius: var(--br-base);
                padding: var(--padding-5xs);
                box-sizing: border-box;
              }
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                &:hover {
                  display: flex;
                  width: 24px;
                  height: 24px;
                }
              `}
              alt=""
              src="/add.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileShoppingCard1;
