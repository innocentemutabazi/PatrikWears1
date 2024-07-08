import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={[
        css`
          align-self: stretch;
          background-color: var(--whatsapp-white-01);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--padding-base) var(--padding-45xl);
          box-sizing: border-box;
          top: 0;
          z-index: 99;
          position: sticky;
          gap: var(--gap-xl);
          width: auto;
          height: auto;
          text-align: center;
          font-size: var(--garamond-bold-20-size);
          color: var(--whatsapp-white-01);
          font-family: var(--header-2);
          &:hover {
            background-color: var(--whatsapp-white-01);
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-xl);
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-base) var(--padding-45xl);
            box-sizing: border-box;
            top: 0;
            z-index: 99;
            position: sticky;
          }
          @media screen and (max-width: 1050px) {
            padding-left: var(--padding-13xl);
            padding-right: var(--padding-13xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          background-color: var(--whatsapp-black-11);
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
            background-color: var(--whatsapp-black-11);
            display: flex;
            width: auto;
            align-self: unset;
            height: auto;
            flex-direction: row;
            gap: var(--gap-5xs);
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
            box-sizing: border-box;
          }
        `}
      >
        <a
          className={css`
            text-decoration: none;
            position: relative;
            letter-spacing: -0.02em;
            font-weight: 700;
            color: inherit;
            display: flex;
            &:hover {
              font-weight: 700;
              font-family: var(--header-2);
              font-size: var(--garamond-bold-20-size);
              letter-spacing: -0.02em;
              text-align: center;
              color: var(--whatsapp-white-01);
              display: flex;
            }
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            Patrik
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            Wears
          </p>
        </a>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          width: auto;
          align-self: unset;
          height: auto;
          font-size: var(--neue-light-12-size);
          color: var(--whatsapp-black-11);
          font-family: var(--neue-medium-20);
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
          <div
            className={css`
              width: 25px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 25;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-light-12-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-black-11);
                display: flex;
                width: 25px;
                min-width: 25;
              }
            `}
          >
            Men
          </div>
        </div>
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
          <div
            className={css`
              width: 43px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 43;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-light-12-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-black-11);
                display: flex;
                width: 43px;
                min-width: 43;
              }
            `}
          >
            Women
          </div>
        </div>
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
          <div
            className={css`
              width: 25px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 25;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-light-12-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-black-11);
                display: flex;
                width: 25px;
                min-width: 25;
              }
            `}
          >
            Kids
          </div>
        </div>
        <div
          className={css`
            background-color: var(--whatsapp-black-11);
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
            font-size: var(--neue-medium-16-size);
            color: var(--whatsapp-white-01);
            &:hover {
              background-color: var(--whatsapp-black-11);
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 40px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 40;
              white-space: nowrap;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-medium-16-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-01);
                display: flex;
                width: 40px;
                min-width: 40;
                white-space: nowrap;
              }
            `}
          >
            Flash
          </div>
        </div>
        <div
          className={css`
            background-color: var(--whatsapp-black-11);
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
            font-size: var(--neue-medium-16-size);
            color: var(--whatsapp-white-01);
            &:hover {
              background-color: var(--whatsapp-black-11);
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 54px;
              position: relative;
              line-height: 120%;
              display: flex;
              min-width: 54;
              white-space: nowrap;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-medium-16-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-01);
                display: flex;
                width: 54px;
                min-width: 54;
                white-space: nowrap;
              }
            `}
          >
            Gbanjo
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 309px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          height: auto;
          &:hover {
            display: flex;
            width: 309px;
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
            flex: 1;
            border-radius: var(--br-base);
            background-color: var(--whatsapp-white-04);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: var(--gap-xl);
            height: auto;
            &:hover {
              background-color: var(--whatsapp-white-04);
              display: flex;
              flex: 1;
              height: auto;
              flex-direction: row;
              gap: var(--gap-xl);
              align-items: center;
              justify-content: space-between;
              border-radius: var(--br-base);
            }
          `}
        >
          <input
            className={css`
              width: 55px;
              border: none;
              outline: none;
              background-color: transparent;
              height: 30px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
              font-family: var(--neue-medium-20);
              font-size: var(--neue-light-12-size);
              color: var(--color-gray-100);
              gap: var(--gap-5xs);
              &:hover {
                display: flex;
                width: 55px;
                height: 30px;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                border-radius: var(--br-base);
                padding: var(--padding-5xs);
                box-sizing: border-box;
              }
            `}
            placeholder="Search"
            type="text"
          />
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
              src="/search.svg"
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
              loading="lazy"
              alt=""
              src="/person.svg"
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
              loading="lazy"
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
              loading="lazy"
              alt=""
              src="/cart.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
