"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Search } from "./Search";

const _interactionsData = JSON.parse(
  '{"events":{"e-93":{"id":"e-93","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"441fd9a4-d2af-9334-a857-2b0b50b183c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"441fd9a4-d2af-9334-a857-2b0b50b183c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666758082302}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View Scale -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CtaSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section-regular" tag="div">
      <_Builtin.Block
        className="container-regular"
        data-w-id="441fd9a4-d2af-9334-a857-2b0b50b183c8"
        tag="div"
      >
        <_Builtin.Block className="cta-block" tag="div">
          <_Builtin.Block className="cta-icon-wrapper" tag="div">
            <_Builtin.Image
              className="icon-large"
              loading="lazy"
              width="auto"
              height="auto"
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
    </_Component>
  );
}
