"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Search } from "./Search";

const _interactionsData = JSON.parse(
  '{"events":{"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755779","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e2635755779","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757111032},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e263575578c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e263575578c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757121888},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755797","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e2635755797","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757132706},"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e26357557a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e26357557a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757144816},"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e26357557b0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e26357557b0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757149933},"e-67":{"id":"e-67","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e26357557cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e26357557cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757166533},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e26357557d4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e26357557d4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757174450},"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755833","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e2635755833","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757238319},"e-73":{"id":"e-73","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e263575583f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e263575583f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757244397},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755868","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e2635755868","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757250915},"e-77":{"id":"e-77","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e263575586e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eb072679-dfba-557b-3901-7e263575586e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757258471},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755891","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1746473439136},"e-175":{"id":"e-175","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755897","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1746473439136},"e-177":{"id":"e-177","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eb072679-dfba-557b-3901-7e2635755912","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1746473445242}},"actionLists":{"a-18":{"id":"a-18","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-13":{"id":"a-13","title":"Scroll View -> 03","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-13-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-13-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-13-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-14":{"id":"a-14","title":"Scroll View Scale -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738},"a-16":{"id":"a-16","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-17":{"id":"a-17","title":"Scroll View Scale -> 02","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-17-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738},"a-19":{"id":"a-19","title":"Scroll View -> 6","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-19-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-19-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-20":{"id":"a-20","title":"Scroll View -> 7","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-20-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-21":{"id":"a-21","title":"Scroll View Scale -> 5","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"68191197d561397b05c2080b|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DevLinkHomePage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component tag="div">
      <_Builtin.Block className="section-header" tag="div">
        <_Builtin.Block className="container-regular" tag="div">
          <_Builtin.Grid
            className="header-title-grid"
            data-w-id="eb072679-dfba-557b-3901-7e2635755779"
            tag="div"
          >
            <_Builtin.Block
              className="header-content"
              id="w-node-eb072679-dfba-557b-3901-7e263575577a-35755776"
              tag="div"
            >
              <_Builtin.Block className="header-badge" tag="div">
                <_Builtin.Block className="header-badge-light" tag="div">
                  <_Builtin.Block tag="div">{"New"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {"Stay connected to get upcoming jobs"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Heading className="" tag="h2">
                {"Find the most exciting jobs in tech"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className="header-subheading-wrap"
              id="w-node-eb072679-dfba-557b-3901-7e2635755783-35755776"
              tag="div"
            >
              <_Builtin.Paragraph>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et. "
                }
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "/log-in",
                  }}
                >
                  {"Sign in"}
                </_Builtin.Link>
                {" or "}
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "/sign-up",
                  }}
                >
                  {"sign up"}
                </_Builtin.Link>
                {" to get started!"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Grid>
          <_Builtin.Block
            className="header-bottom-wrap"
            data-w-id="eb072679-dfba-557b-3901-7e263575578c"
            tag="div"
          >
            <Search />
            <_Builtin.Block className="header-image-wrap" tag="div">
              <_Builtin.Image
                className="image-cover"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20948_adam-rhodes-ep5lX958f7E-unsplash.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block className="partnership-wrap" tag="div">
              <_Builtin.Block className="partnership-text-wrap" tag="div">
                <_Builtin.Block tag="div">
                  {"Work for "}
                  <_Builtin.Span className="header-company-span">
                    {"industry leading"}
                  </_Builtin.Span>
                  {" global companies"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Grid
            className="logo-grid"
            data-w-id="eb072679-dfba-557b-3901-7e2635755797"
            tag="div"
          >
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20886_Grey%20Logo%20Large%20(2).svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2088c_Grey%20Logo%20Large%20(5).svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2088e_Grey%20Logo%20Large%20(4).svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2086f_Grey%20Logo%20Large%20(1).svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20888_Grey%20Logo%20Large%20(3).svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="logo-wrap" tag="div">
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20881_Grey%20Logo%20Large%20(6).svg"
              />
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-regular neutral-100" tag="div">
        <_Builtin.Block className="container-regular" tag="div">
          <_Builtin.Block
            className="title-wrap-row"
            data-w-id="eb072679-dfba-557b-3901-7e26357557a6"
            tag="div"
          >
            <_Builtin.Block className="title-wrap-left" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Heading tag="h3">
                  {"Explore the latest job openings"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="paragraph-regular text-gray-600">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Link
              className="button-primary"
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"See All Jobs"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-companies" tag="div">
        <_Builtin.Block className="container-regular" tag="div">
          <_Builtin.Block
            className="companies-title-wrap"
            id="w-node-eb072679-dfba-557b-3901-7e26357557cc-35755776"
            data-w-id="eb072679-dfba-557b-3901-7e26357557cc"
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block className="company-title-wrapper" tag="div">
                <_Builtin.Block className="margin-bottom-08" tag="div">
                  <_Builtin.Heading tag="h3">
                    {"Work with exciting companies"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className="paragraph-small text-color-gray-500"
                  tag="div"
                >
                  {"Discover more than 1,600 open positions"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.SliderWrapper
            className="company-slider"
            data-w-id="eb072679-dfba-557b-3901-7e26357557d4"
            navSpacing={3}
            navShadow={false}
            autoplay={false}
            delay={4000}
            iconArrows={true}
            animation="slide"
            navNumbers={false}
            easing="ease"
            navRound={true}
            hideArrows={false}
            disableSwipe={false}
            duration={500}
            infinite={true}
            autoMax={0}
            navInvert={false}
          >
            <_Builtin.SliderMask className="company-mask">
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow className="company-arrow-l" dir="left">
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_918)%22%3E%0A%3Cpath%20d%3D%22M7.828%2011.0002L13.192%205.63617L11.778%204.22217L4%2012.0002L11.778%2019.7782L13.192%2018.3642L7.828%2013.0002H20V11.0002H7.828Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_918%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22matrix(-1%200%200%201%2024%200)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow className="company-arrow-r" dir="right">
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_922)%22%3E%0A%3Cpath%20d%3D%22M16.172%2011.0002L10.808%205.63617L12.222%204.22217L20%2012.0002L12.222%2019.7782L10.808%2018.3642L16.172%2013.0002H4V11.0002H16.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_922%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav className="slide-nav-hidden" />
          </_Builtin.SliderWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-regular" tag="div">
        <_Builtin.Block className="container-regular" tag="div">
          <_Builtin.Block className="feature-grid" tag="div">
            <_Builtin.Block
              id="w-node-eb072679-dfba-557b-3901-7e2635755833-35755776"
              data-w-id="eb072679-dfba-557b-3901-7e2635755833"
              tag="div"
            >
              <_Builtin.Block
                className="feature-image-wrap"
                id="w-node-eb072679-dfba-557b-3901-7e2635755834-35755776"
                tag="div"
              >
                <_Builtin.Image
                  className="image-cover"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2090a_Feature%20Image.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block className="partnership-wrap" tag="div">
                <_Builtin.Block className="partnership-text-wrap" tag="div">
                  <_Builtin.Block tag="div">
                    {"Partnership with "}
                    <_Builtin.Span className="header-company-span">
                      {"Glassdoor"}
                    </_Builtin.Span>
                    {" and "}
                    <_Builtin.Span className="header-company-span">
                      {"LinkedIn"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              data-w-id="eb072679-dfba-557b-3901-7e263575583f"
              tag="div"
            >
              <_Builtin.Block className="margin-bottom-12" tag="div">
                <_Builtin.Block className="detail text-color-primary" tag="div">
                  {"WHY CHOOSE US"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="margin-bottom-24" tag="div">
                <_Builtin.Heading tag="h3">
                  {"Build a custom membership site with locked content."}
                  <_Builtin.Span className="text-color-primary">
                    {""}
                  </_Builtin.Span>
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="paragraph-regular">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna, sit amet pulvinar diam. Sed laoreet feugiat consequat. "
                }
              </_Builtin.Paragraph>
              <_Builtin.Grid className="feature-list" tag="div">
                <_Builtin.Block className="feature-content-block" tag="div">
                  <_Builtin.Block className="icon-wrap-regular" tag="div">
                    <_Builtin.Image
                      className="icon-regular"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2084e_Two-user.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    <_Builtin.Block className="margin-bottom-04" tag="div">
                      <_Builtin.Block className="subheading-regular" tag="div">
                        {"Add a feature point here"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="paragraph-small text-color-gray-500">
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="feature-content-block" tag="div">
                  <_Builtin.Block className="icon-wrap-regular" tag="div">
                    <_Builtin.Image
                      className="icon-regular"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2084e_Two-user.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    <_Builtin.Block className="margin-bottom-04" tag="div">
                      <_Builtin.Block className="subheading-regular" tag="div">
                        {"Add a feature point here"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="paragraph-small text-color-gray-500">
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="feature-content-block" tag="div">
                  <_Builtin.Block className="icon-wrap-regular" tag="div">
                    <_Builtin.Image
                      className="icon-regular"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2084e_Two-user.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    <_Builtin.Block className="margin-bottom-04" tag="div">
                      <_Builtin.Block className="subheading-regular" tag="div">
                        {"Add a feature point here"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="paragraph-small text-color-gray-500">
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-regular neutral-100" tag="div">
        <_Builtin.Block className="container-small" tag="div">
          <_Builtin.Block
            className="title-wrap-center"
            data-w-id="eb072679-dfba-557b-3901-7e2635755868"
            tag="div"
          >
            <_Builtin.Block className="margin-bottom-12" tag="div">
              <_Builtin.Block className="detail text-color-primary" tag="div">
                {"TESTIMONIAL"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Heading tag="h3">
              {"See what users say about our job platform"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.SliderWrapper
            className="testimonial-slider"
            data-w-id="eb072679-dfba-557b-3901-7e263575586e"
            data-animation="cross"
            data-duration="500"
            data-infinite="1"
            navSpacing={3}
            navShadow={false}
            autoplay={false}
            delay={4000}
            iconArrows={true}
            animation="cross"
            navNumbers={false}
            easing="ease"
            navRound={true}
            hideArrows={false}
            disableSwipe={false}
            duration={500}
            infinite={true}
            autoMax={0}
            navInvert={false}
          >
            <_Builtin.SliderMask>
              <_Builtin.SliderSlide tag="div">
                <_Builtin.Grid className="testimonial-grid" tag="div">
                  <_Builtin.Block
                    className="testimonial-content-wrap"
                    tag="div"
                  >
                    <_Builtin.Block className="testimonial-logo-wrap" tag="div">
                      <_Builtin.Image
                        className="icon-extra-large"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20870_Mail%20Chimp%20Icon.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="testimonial-quote">
                      {
                        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”"
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className="paragraph-regular text-color-gray-600"
                      tag="div"
                    >
                      <_Builtin.Span className="text-color-primary">
                        {"David Sinclair"}
                      </_Builtin.Span>
                      {" - Senior Frontend Developer"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="testimonial-image-wrap" tag="div">
                    <_Builtin.Image
                      className="image-cover"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2090b_Testimonial%20Image.jpg"
                    />
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide tag="div">
                <_Builtin.Grid className="testimonial-grid" tag="div">
                  <_Builtin.Block
                    className="testimonial-content-wrap"
                    tag="div"
                  >
                    <_Builtin.Block className="testimonial-logo-wrap" tag="div">
                      <_Builtin.Image
                        className="icon-extra-large"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20870_Mail%20Chimp%20Icon.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="testimonial-quote">
                      {
                        "“There are lot of interesting projects that casting directors post on this platform. So many people and companies trust casting through Platform”"
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className="paragraph-regular text-color-gray-600"
                      tag="div"
                    >
                      <_Builtin.Span className="text-color-primary">
                        {"Emily York"}
                      </_Builtin.Span>
                      {" - Senior Frontend Developer"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="testimonial-image-wrap" tag="div">
                    <_Builtin.Image
                      className="image-cover"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20869_Why%20Choose%20Us%20Image%20(2).jpg"
                    />
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow
              className="testimonial-slider-left-button"
              dir="left"
            >
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_918)%22%3E%0A%3Cpath%20d%3D%22M7.828%2011.0002L13.192%205.63617L11.778%204.22217L4%2012.0002L11.778%2019.7782L13.192%2018.3642L7.828%2013.0002H20V11.0002H7.828Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_918%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22matrix(-1%200%200%201%2024%200)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow
              className="testimonial-slider-right-button"
              dir="right"
            >
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_922)%22%3E%0A%3Cpath%20d%3D%22M16.172%2011.0002L10.808%205.63617L12.222%204.22217L20%2012.0002L12.222%2019.7782L10.808%2018.3642L16.172%2013.0002H4V11.0002H16.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_922%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav className="slide-nav-hidden" />
          </_Builtin.SliderWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="blog-section" tag="div">
        <_Builtin.Block className="container-regular" tag="div">
          <_Builtin.Block
            className="blog-title-wrap"
            data-w-id="eb072679-dfba-557b-3901-7e2635755891"
            tag="div"
          >
            <_Builtin.Block className="margin-bottom-12" tag="div">
              <_Builtin.Block className="detail text-color-primary" tag="div">
                {"Blog"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Heading tag="h3">
              {"Get the latest news about jobs!"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.SliderWrapper
            className="blog-slider"
            data-w-id="eb072679-dfba-557b-3901-7e2635755897"
            animation="slide"
            easing="ease"
            duration={500}
            infinite={true}
            disableSwipe={false}
            autoplay={false}
            delay={4000}
            autoMax={0}
            hideArrows={false}
            navRound={true}
            navNumbers={false}
            navShadow={false}
            navInvert={false}
            navSpacing={3}
            iconArrows={true}
          >
            <_Builtin.SliderMask className="blog-mask">
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide className="blog-slide" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow
              className="blog-slider-left-button"
              dir="left"
            >
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_918)%22%3E%0A%3Cpath%20d%3D%22M7.828%2011.0002L13.192%205.63617L11.778%204.22217L4%2012.0002L11.778%2019.7782L13.192%2018.3642L7.828%2013.0002H20V11.0002H7.828Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_918%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22matrix(-1%200%200%201%2024%200)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow
              className="blog-slider-right-button"
              dir="right"
            >
              <_Builtin.HtmlEmbed
                className="icon-regular"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_416_922)%22%3E%0A%3Cpath%20d%3D%22M16.172%2011.0002L10.808%205.63617L12.222%204.22217L20%2012.0002L12.222%2019.7782L10.808%2018.3642L16.172%2013.0002H4V11.0002H16.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_416_922%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav className="slide-nav-hidden" />
          </_Builtin.SliderWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-regular" tag="div">
        <_Builtin.Block
          className="container-regular"
          data-w-id="eb072679-dfba-557b-3901-7e2635755912"
          tag="div"
        >
          <_Builtin.Block className="cta-block" tag="div">
            <_Builtin.Block className="cta-icon-wrapper" tag="div">
              <_Builtin.Image
                className="icon-large"
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c2090c_Magnifying%20Glass%20Icon.png"
              />
            </_Builtin.Block>
            <_Builtin.Block className="cta-text-wrap" tag="div">
              <_Builtin.Block className="margin-bottom-16" tag="div">
                <_Builtin.Heading tag="h4">
                  {"Explore a job now! "}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="paragraph-regular">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="cta-search-wrapper" tag="div">
            <Search />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
