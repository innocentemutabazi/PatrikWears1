import { FunctionComponent, useCallback, type CSSProperties } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
  search?: string;
  person?: string;
  heart?: string;
  cart?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];

  /** Action props */
  onLogoContainerClick?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  search,
  person,
  heart,
  cart,
  frameDivPadding,
  onLogoContainerClick,
}) => {
  const navigate = useNavigate();

  const onLogoContainerClick1 = useCallback(() => {
    navigate("/menhome");
  }, [navigate]);

  const onLogoContainerClick2 = useCallback(() => {
    navigate("/women-home");
  }, [navigate]);

  const onLogoContainerClick3 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-01);
          font-family: var(--neue-medium-20);
          padding: ${frameDivPadding};
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          background-color: var(--whatsapp-black-11);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-base) var(--padding-xl);
          z-index: 1;
        `}
      >
        <div
          className={css`
            width: 293px;
            position: relative;
            line-height: 17px;
            display: inline-block;
            white-space: nowrap;
          `}
        >
          FREE SHIPMENT IF YOU PURCHASE TODAY
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          background-color: var(--whatsapp-white-01);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--padding-base) var(--padding-45xl);
          gap: var(--gap-xl);
          font-size: var(--neue-light-12-size);
          @media screen and (max-width: 1100px) {
            padding-left: var(--padding-13xl);
            padding-right: var(--padding-13xl);
            box-sizing: border-box;
          }
        `}
      >
        <div
          className={css`
            background-color: var(--whatsapp-black-11);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
            white-space: nowrap;
            font-size: var(--garamond-bold-20-size);
            font-family: var(--header-2);
          `}
          onClick={onLogoContainerClick}
        >
          <b
            className={css`
              position: relative;
              letter-spacing: -0.02em;
              display: inline-block;
              min-width: 122px;
              white-space: nowrap;
            `}
          >
            Patrik Wears
          </b>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-5xs);
            color: var(--whatsapp-black-11);
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
              cursor: pointer;
            `}
            onClick={onLogoContainerClick1}
          >
            <div
              className={css`
                width: 25px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                min-width: 25px;
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
              cursor: pointer;
            `}
            onClick={onLogoContainerClick2}
          >
            <div
              className={css`
                width: 43px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                min-width: 43px;
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
              cursor: pointer;
            `}
            onClick={onLogoContainerClick3}
          >
            <div
              className={css`
                width: 25px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                min-width: 25px;
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
              font-size: var(--neue-medium-16-size);
              color: var(--whatsapp-white-01);
            `}
          >
            <div
              className={css`
                width: 40px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                min-width: 40px;
                white-space: nowrap;
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
              font-size: var(--neue-medium-16-size);
              color: var(--whatsapp-white-01);
            `}
          >
            <div
              className={css`
                width: 54px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                min-width: 54px;
                white-space: nowrap;
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
            color: var(--whatsapp-white-08);
          `}
        >
          <div
            className={css`
              flex: 1;
              background-color: var(--whatsapp-white-04);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: var(--gap-xl);
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
              `}
            >
              <div
                className={css`
                  width: 39px;
                  position: relative;
                  line-height: 120%;
                  display: inline-block;
                  min-width: 39px;
                `}
              >
                Search
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
              `}
            >
              <img
                className={css`
                  height: 24px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src={search}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
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
              `}
            >
              <img
                className={css`
                  height: 24px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src={person}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
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
              `}
            >
              <img
                className={css`
                  height: 24px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src={heart}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
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
              `}
            >
              <img
                className={css`
                  height: 24px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src={cart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1