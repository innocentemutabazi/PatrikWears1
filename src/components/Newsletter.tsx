import { FunctionComponent } from "react";
import NewsLetterVariant from "./NewsLetterVariant";
import { css } from "@emotion/css";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px var(--padding-12xs);
          box-sizing: border-box;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          text-align: center;
          font-size: var(--neue-medium-32-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: 0px 0px 0px var(--padding-12xs);
            box-sizing: border-box;
            max-width: 100%;
          }
        `,
        className,
      ].join(" ")}
    >
      <NewsLetterVariant />
    </div>
  );
};

export default Newsletter;
