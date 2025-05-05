"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4c5fd0bb-be77-ca1b-0ecf-d0fd126a155f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4c5fd0bb-be77-ca1b-0ecf-d0fd126a155f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757795489},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4c5fd0bb-be77-ca1b-0ecf-d0fd126a1565","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4c5fd0bb-be77-ca1b-0ecf-d0fd126a1565","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757815413}},"actionLists":{"a-16":{"id":"a-16","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-18":{"id":"a-18","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="blog-section" tag="div">
      <_Builtin.Block className="container-regular" tag="div">
        <_Builtin.Block
          className="blog-title-wrap"
          data-w-id="4c5fd0bb-be77-ca1b-0ecf-d0fd126a155f"
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
          data-w-id="4c5fd0bb-be77-ca1b-0ecf-d0fd126a1565"
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
          <_Builtin.SliderArrow className="blog-slider-left-button" dir="left">
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
    </_Component>
  );
}
