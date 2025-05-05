"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-179":{"id":"e-179","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4d7814fe-af15-4352-b78e-1bdf65509c6b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1746473448971}},"actionLists":{"a-22":{"id":"a-22","title":"Scroll View -> 8","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-22-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DevLinkFooterComponent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="footer-section" tag="div">
      <_Builtin.Block
        className="container-regular"
        data-w-id="4d7814fe-af15-4352-b78e-1bdf65509c6b"
        tag="div"
      >
        <_Builtin.Link
          className="footer-logo-link"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="footer-logo"
            width="auto"
            height="auto"
            loading="lazy"
            alt="Brand"
            src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c208e1_HireUp%20Logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block className="footer-grid" tag="div">
          <_Builtin.Grid className="footer-left-column" tag="div">
            <_Builtin.Block className="footer-column" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Block
                  className="detail text-color-gray-400"
                  tag="div"
                >
                  {"pages"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Home"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Home V2"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"About"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Pricing"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Jobs"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Post a Job"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="footer-column" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Block
                  className="detail text-color-gray-400"
                  tag="div"
                >
                  {"account"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign In"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Sign Up"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Reset Password"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"User Account"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="footer-column" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Block
                  className="detail text-color-gray-400"
                  tag="div"
                >
                  {"template"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Style Guide"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"License"}
              </_Builtin.Link>
              <_Builtin.Link
                className="footer-link"
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Changelog"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Grid>
          <_Builtin.Block
            className="foooter-right-column"
            id="w-node-_4d7814fe-af15-4352-b78e-1bdf65509c96-65509c6a"
            tag="div"
          >
            <_Builtin.Block className="footer-form-wrapper" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Block
                  className="detail text-color-gray-400"
                  tag="div"
                >
                  {"Sign up to our newsletter"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.FormWrapper className="footer-form-block">
                <_Builtin.FormForm
                  className="footer-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  id="email-form"
                >
                  <_Builtin.FormTextInput
                    className="form-text-field"
                    name="email-2"
                    maxLength={256}
                    data-name="Email 2"
                    placeholder="Email address"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    id="footer-email"
                  />
                  <_Builtin.FormButton
                    className="button-primary"
                    type="submit"
                    value="Get Started"
                    data-wait="Get Started"
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage className="success-message">
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage className="error-message">
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
            <_Builtin.Block className="footer-legal-text-wrapper" tag="div">
              <_Builtin.Block tag="div">
                {"HireUP. All Rights Reserved, 2022."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="footer-bottom" tag="div">
          <_Builtin.Block className="footer-legal-links" tag="div">
            <_Builtin.Block className="footer-link" tag="div">
              {"© Made by "}
              <_Builtin.Span className="">{"Flowbase"}</_Builtin.Span>
              {" & powered by "}
              <_Builtin.Span className="">{"Webflow"}</_Builtin.Span>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="footer-social-links" tag="div">
            <_Builtin.Link
              className="footer-social-link"
              button={false}
              block="inline"
              options={{
                href: "https://www.google.com/",
                target: "_blank",
              }}
            >
              <_Builtin.HtmlEmbed
                className="footer-social"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M19.3607%209.43027C18.5866%209.43014%2017.8434%209.73391%2017.291%2010.2762C16.7386%2010.8185%2016.4212%2011.556%2016.407%2012.33L16.3785%2013.9342C16.3769%2014.0203%2016.357%2014.1051%2016.3202%2014.183C16.2835%2014.2609%2016.2307%2014.3302%2016.1653%2014.3863C16.0999%2014.4423%2016.0234%2014.4839%2015.9408%2014.5084C15.8581%2014.5328%2015.7713%2014.5395%2015.6859%2014.528L14.096%2014.312C12.004%2014.0268%209.99954%2013.0633%208.07658%2011.4612C7.4675%2014.8325%208.65713%2017.168%2011.5222%2018.9697L13.3016%2020.088C13.3861%2020.1412%2013.4564%2020.2142%2013.5061%2020.3008C13.5559%2020.3873%2013.5837%2020.4848%2013.5872%2020.5846C13.5906%2020.6843%2013.5695%2020.7835%2013.5257%2020.8732C13.482%2020.963%2013.4169%2021.0406%2013.3362%2021.0994L11.7147%2022.284C12.6793%2022.3441%2013.5949%2022.3013%2014.3547%2022.1505C19.1601%2021.1911%2022.3552%2017.5754%2022.3552%2011.6109C22.3552%2011.1241%2021.3244%209.43027%2019.3607%209.43027ZM14.37%2012.2923C14.3878%2011.3105%2014.6948%2010.3558%2015.2526%209.54762C15.8104%208.73948%2016.5942%208.11385%2017.5059%207.74907C18.4176%207.38428%2019.4167%207.29655%2020.378%207.49686C21.3393%207.69717%2022.2202%208.17662%2022.9103%208.87518C23.6344%208.87008%2024.2507%209.05342%2025.6287%208.21823C25.2875%209.8886%2025.1194%2010.6138%2024.3922%2011.6109C24.3922%2019.3944%2019.6082%2023.1792%2014.754%2024.1479C11.4255%2024.8119%206.58546%2023.7211%205.19824%2022.2728C5.90509%2022.2178%208.77732%2021.9092%2010.4375%2020.6941C9.03297%2019.7682%203.44232%2016.4784%207.11611%207.6336C8.84047%209.64721%2010.5893%2011.0181%2012.3615%2011.7454C13.5409%2012.2292%2013.8302%2012.219%2014.371%2012.2933L14.37%2012.2923Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-social-link"
              button={false}
              block="inline"
              options={{
                href: "https://www.google.com/",
                target: "_blank",
              }}
            >
              <_Builtin.HtmlEmbed
                className="footer-social"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M15.9996%2012.9447C15.1893%2012.9447%2014.4121%2013.2667%2013.839%2013.8397C13.266%2014.4127%2012.9441%2015.1899%2012.9441%2016.0003C12.9441%2016.8107%2013.266%2017.5879%2013.839%2018.1609C14.4121%2018.7339%2015.1893%2019.0559%2015.9996%2019.0559C16.81%2019.0559%2017.5872%2018.7339%2018.1602%2018.1609C18.7333%2017.5879%2019.0552%2016.8107%2019.0552%2016.0003C19.0552%2015.1899%2018.7333%2014.4127%2018.1602%2013.8397C17.5872%2013.2667%2016.81%2012.9447%2015.9996%2012.9447ZM15.9996%2010.9077C17.3503%2010.9077%2018.6456%2011.4442%2019.6006%2012.3993C20.5557%2013.3543%2021.0922%2014.6497%2021.0922%2016.0003C21.0922%2017.3509%2020.5557%2018.6463%2019.6006%2019.6013C18.6456%2020.5563%2017.3503%2021.0929%2015.9996%2021.0929C14.649%2021.0929%2013.3537%2020.5563%2012.3986%2019.6013C11.4436%2018.6463%2010.907%2017.3509%2010.907%2016.0003C10.907%2014.6497%2011.4436%2013.3543%2012.3986%2012.3993C13.3537%2011.4442%2014.649%2010.9077%2015.9996%2010.9077ZM22.62%2010.6531C22.62%2010.9907%2022.4859%2011.3146%2022.2471%2011.5533C22.0084%2011.7921%2021.6845%2011.9262%2021.3469%2011.9262C21.0092%2011.9262%2020.6854%2011.7921%2020.4466%2011.5533C20.2078%2011.3146%2020.0737%2010.9907%2020.0737%2010.6531C20.0737%2010.3154%2020.2078%209.99158%2020.4466%209.75282C20.6854%209.51406%2021.0092%209.37992%2021.3469%209.37992C21.6845%209.37992%2022.0084%209.51406%2022.2471%209.75282C22.4859%209.99158%2022.62%2010.3154%2022.62%2010.6531ZM15.9996%207.85215C13.4798%207.85215%2013.0683%207.85928%2011.896%207.91122C11.0975%207.94891%2010.5618%208.05585%2010.0647%208.24937C9.62269%208.42048%209.3039%208.6252%208.96473%208.96539C8.64594%209.27339%208.40083%209.64941%208.24769%2010.0654C8.05418%2010.5645%207.94723%2011.0992%207.91056%2011.8967C7.8576%2013.0211%207.85149%2013.4143%207.85149%2016.0003C7.85149%2018.5201%207.85862%2018.9316%207.91056%2020.1039C7.94825%2020.9014%208.05519%2021.4382%208.24769%2021.9342C8.42084%2022.3772%208.62455%2022.696%208.96269%2023.0342C9.30593%2023.3764%209.62473%2023.5811%2010.0627%2023.7502C10.5658%2023.9447%2011.1016%2024.0527%2011.896%2024.0894C13.0205%2024.1423%2013.4136%2024.1484%2015.9996%2024.1484C18.5195%2024.1484%2018.9309%2024.1413%2020.1032%2024.0894C20.8997%2024.0517%2021.4365%2023.9447%2021.9335%2023.7522C22.3745%2023.5801%2022.6954%2023.3754%2023.0335%2023.0372C23.3768%2022.694%2023.5815%2022.3752%2023.7506%2021.9372C23.9441%2021.4351%2024.052%2020.8983%2024.0887%2020.1039C24.1417%2018.9795%2024.1478%2018.5863%2024.1478%2016.0003C24.1478%2013.4805%2024.1407%2013.069%2024.0887%2011.8967C24.051%2011.1002%2023.9441%2010.5624%2023.7506%2010.0654C23.5971%209.64983%2023.3524%209.27396%2023.0345%208.96539C22.7267%208.64643%2022.3506%208.4013%2021.9345%208.24835C21.4355%208.05483%2020.8997%207.94789%2020.1032%207.91122C18.9788%207.85826%2018.5857%207.85215%2015.9996%207.85215ZM15.9996%205.81511C18.767%205.81511%2019.1122%205.82529%2020.198%205.87622C21.2827%205.92715%2022.0211%206.09724%2022.6709%206.34983C23.3432%206.60854%2023.9095%206.95891%2024.4757%207.52418C24.9937%208.03334%2025.3944%208.64923%2025.6501%209.329C25.9017%209.97779%2026.0728%2010.7172%2026.1237%2011.802C26.1716%2012.8877%2026.1848%2013.233%2026.1848%2016.0003C26.1848%2018.7676%2026.1746%2019.1129%2026.1237%2020.1986C26.0728%2021.2834%2025.9017%2022.0218%2025.6501%2022.6716C25.3951%2023.3517%2024.9943%2023.9678%2024.4757%2024.4764C23.9664%2024.9941%2023.3506%2025.3949%2022.6709%2025.6508C22.0221%2025.9023%2021.2827%2026.0734%2020.198%2026.1244C19.1122%2026.1722%2018.767%2026.1855%2015.9996%2026.1855C13.2323%2026.1855%2012.887%2026.1753%2011.8013%2026.1244C10.7166%2026.0734%209.97816%2025.9023%209.32834%2025.6508C8.6483%2025.3956%208.0323%2024.9948%207.52353%2024.4764C7.00552%2023.9673%206.60475%2023.3514%206.34918%2022.6716C6.09658%2022.0228%205.92649%2021.2834%205.87556%2020.1986C5.82769%2019.1129%205.81445%2018.7676%205.81445%2016.0003C5.81445%2013.233%205.82464%2012.8877%205.87556%2011.802C5.92649%2010.7162%206.09658%209.97881%206.34918%209.329C6.60405%208.64881%207.0049%208.03275%207.52353%207.52418C8.03245%207.00599%208.64841%206.6052%209.32834%206.34983C9.97816%206.09724%2010.7156%205.92715%2011.8013%205.87622C12.887%205.82835%2013.2323%205.81511%2015.9996%205.81511Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="footer-social-link"
              button={false}
              block="inline"
              options={{
                href: "https://www.google.com/",
                target: "_blank",
              }}
            >
              <_Builtin.HtmlEmbed
                className="footer-social"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M17.0182%2024.0853C19.0728%2023.8239%2020.9508%2022.7899%2022.2705%2021.1935C23.5901%2019.5971%2024.2524%2017.5582%2024.1227%2015.491C23.993%2013.4239%2023.0811%2011.4837%2021.5722%2010.0648C20.0634%208.64585%2018.0708%207.85471%2015.9996%207.85215C13.9259%207.8506%2011.9296%208.63981%2010.4175%2010.0589C8.90538%2011.4781%207.99127%2013.4204%207.86141%2015.4901C7.73156%2017.5597%208.39572%2019.601%209.71858%2021.1981C11.0414%2022.7951%2012.9234%2023.8276%2014.9811%2024.0853V18.0373H12.9441V16.0003H14.9811V14.3157C14.9811%2012.9539%2015.1237%2012.4599%2015.3885%2011.9619C15.6494%2011.4691%2016.0526%2011.0663%2016.5456%2010.8059C16.9346%2010.5971%2017.4184%2010.4718%2018.2638%2010.4178C18.5989%2010.3964%2019.0328%2010.4229%2019.5655%2010.4993V12.4345H19.0552C18.1212%2012.4345%2017.7352%2012.4783%2017.505%2012.6015C17.3677%2012.6721%2017.2558%2012.784%2017.1852%2012.9213C17.063%2013.1515%2017.0182%2013.3796%2017.0182%2014.3146V16.0003H19.5645L19.0552%2018.0373H17.0182V24.0853ZM15.9996%2026.1855C10.3744%2026.1855%205.81445%2021.6256%205.81445%2016.0003C5.81445%2010.375%2010.3744%205.81511%2015.9996%205.81511C21.6249%205.81511%2026.1848%2010.375%2026.1848%2016.0003C26.1848%2021.6256%2021.6249%2026.1855%2015.9996%2026.1855Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
