import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type NewsLetterVariantType = {
  className?: string;
};

const NewsLetterVariant: FunctionComponent<NewsLetterVariantType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          background-color: var(--iris-100);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--padding-30xl) var(--padding-45xl);
          box-sizing: border-box;
          max-width: 100%;
          gap: var(--gap-xl);
          height: auto;
          text-align: center;
          font-size: var(--neue-medium-32-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
          &:hover {
            background-color: var(--iris-100);
            display: flex;
            flex: 1;
            height: auto;
            flex-direction: row;
            gap: var(--gap-xl);
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-30xl) var(--padding-45xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1050px) {
            flex-wrap: wrap;
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
          width: 622px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: var(--gap-9xs);
          max-width: 100%;
          height: auto;
          &:hover {
            display: flex;
            width: 622px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-9xs);
            align-items: flex-start;
            justify-content: center;
            max-width: 100%;
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            width: auto;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              max-width: 100%;
            }
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: flex;
              max-width: 100%;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--neue-medium-32-size);
                line-height: 120%;
                text-align: center;
                color: var(--color-white);
                display: flex;
                flex: 1;
                max-width: 100%;
              }
              @media screen and (max-width: 750px) {
                font-size: var(--font-size-7xl);
                line-height: 31px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-lgi);
                line-height: 23px;
              }
            `}
          >
            Join our exclusive Patriclub newsletter list
          </h1>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            width: auto;
            align-self: unset;
            height: auto;
            gap: var(--gap-5xs);
            font-size: var(--garamond-bold-20-size);
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              max-width: 100%;
            }
          `}
        >
          <h2
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 300;
              font-family: inherit;
              display: flex;
              &:hover {
                font-weight: 300;
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--color-white);
                display: flex;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            Be the first to know when we have new releases
          </h2>
        </div>
      </div>
      <button
        className={css`
          cursor: pointer;
          border: 1px solid var(--cyber-punk-gradient);
          padding: var(--padding-3xl) var(--padding-mini);
          background-color: var(--whatsapp-black-11);
          width: 292px;
          border-radius: var(--br-base);
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: auto;
          gap: var(--gap-5xs);
          &:hover {
            background-color: var(--whatsapp-black-11);
            display: flex;
            width: 292px;
            height: auto;
            flex-direction: row;
            gap: var(--gap-5xs);
            align-items: center;
            justify-content: center;
            border-radius: var(--br-base);
            padding: var(--padding-3xl) var(--padding-mini);
            box-sizing: border-box;
            border: 1px solid var(--cyber-punk-gradient);
          }
        `}
      >
        <div
          className={css`
            height: 16px;
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              flex: 1;
              height: 16px;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              padding: 0px 0px;
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 182px;
              position: relative;
              font-size: var(--garamond-bold-20-size);
              line-height: 120%;
              font-family: var(--neue-medium-20);
              color: var(--whatsapp-white-01);
              text-align: center;
              display: flex;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-01);
                display: flex;
                width: 182px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            Sign me up for free!
          </div>
          <img
            className={css`
              height: 12px;
              flex: 1;
              position: relative;
              max-width: 100%;
              overflow: hidden;
              display: flex;
              gap: var(--gap-0);
              &:hover {
                display: flex;
                flex: 1;
                height: 12px;
                gap: var(--gap-0);
              }
            `}
            alt=""
            src="/arrow-right-3.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default NewsLetterVariant;
