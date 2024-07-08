import { FunctionComponent } from "react";
import Header from "../components/Header";
import { css } from "@emotion/css";
import Here from "../components/Here";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 1280px;
        position: relative;
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-21xl);
        line-height: normal;
        letter-spacing: normal;
        height: auto;
        &:hover {
          background-color: var(--color-white);
          display: flex;
          width: 1280px;
          height: auto;
          flex-direction: column;
          gap: var(--gap-21xl);
          align-items: flex-start;
          justify-content: flex-start;
          line-height: normal;
          letter-spacing: normal;
        }
        @media screen and (max-width: 750px) {
          gap: var(--gap-xl);
        }
      `}
    >
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-01);
          font-family: var(--neue-medium-20);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
        `}
      >
        <Header />
        <div
          className={css`
            align-self: stretch;
            background-color: var(--iris-100);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-base) var(--padding-xl);
            box-sizing: border-box;
            width: auto;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              background-color: var(--iris-100);
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
              padding: var(--padding-base) var(--padding-xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 435px;
              position: relative;
              line-height: 17px;
              display: flex;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--font-size-sm);
                line-height: 17px;
                text-align: center;
                color: var(--whatsapp-white-01);
                display: flex;
                width: 435px;
              }
            `}
          >
            SAVE UP TO 60% WHEN YOU PURCHASE FROM OUR PATRIKLUB
          </div>
        </div>
        <Here />
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-21xl) var(--padding-41xl)
            var(--padding-13xl);
          box-sizing: border-box;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
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
            padding: 0px var(--padding-21xl) var(--padding-41xl)
              var(--padding-13xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1225px) {
            padding-bottom: 39px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 750px) {
            padding-bottom: 25px;
            box-sizing: border-box;
          }
        `}
      >
        <ProductGrid />
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
        `}
      >
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
