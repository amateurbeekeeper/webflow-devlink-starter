"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616991570315},"e-10":{"id":"e-10","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616991570315},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665712674740},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665712674740},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665712675388},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665712675388},"e-89":{"id":"e-89","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757955647},"e-91":{"id":"e-91","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0314d801-392d-31f1-af4e-5260fa92cf0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0314d801-392d-31f1-af4e-5260fa92cf0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666757963615}},"actionLists":{"a-6":{"id":"a-6","title":"FAQ Open","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["44c5e5e1-6cf3-6dd6-5b54-56f4d3bbeee4"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-6-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["44c5e5e1-6cf3-6dd6-5b54-56f4d3bbeee4"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-6-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".plus-icon","selectorGuids":["a40c9d57-8658-8e75-aff7-fe38bcb7a570"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-6-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"","rValue":70,"bValue":222,"gValue":64,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1581565609522},"a-7":{"id":"a-7","title":"FAQ Close","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["44c5e5e1-6cf3-6dd6-5b54-56f4d3bbeee4"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".plus-icon","selectorGuids":["a40c9d57-8658-8e75-aff7-fe38bcb7a570"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-7-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"","rValue":18,"bValue":62,"gValue":31,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1581565609522},"a-16":{"id":"a-16","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-18":{"id":"a-18","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section-regular grey" tag="div">
      <_Builtin.Block className="container-small" tag="div">
        <_Builtin.Block
          className="title-wrap-center max-with-630"
          data-w-id="0314d801-392d-31f1-af4e-5260fa92cf04"
          tag="div"
        >
          <_Builtin.Block className="margin-bottom-12" tag="div">
            <_Builtin.Block className="detail text-color-primary" tag="div">
              {"about hireup"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Heading tag="h3">
            {"Frequently asked questions"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className="faq-wrap"
          data-w-id="0314d801-392d-31f1-af4e-5260fa92cf0a"
          tag="div"
        >
          <_Builtin.Block
            className="faq-block"
            data-w-id="0314d801-392d-31f1-af4e-5260fa92cf0b"
            tag="div"
          >
            <_Builtin.Block className="faq-header" tag="div">
              <_Builtin.Block className="paragraph-large" tag="div">
                {"How do I get started lorem ipsum dolor at?"}
              </_Builtin.Block>
              <_Builtin.Block className="filters-drop-down-wrap" tag="div">
                <_Builtin.Image
                  className="plus-icon"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c208a1_chevron-up.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="faq-content" tag="div">
              <_Builtin.Paragraph className="faq-paragraph">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="faq-block"
            data-w-id="0314d801-392d-31f1-af4e-5260fa92cf14"
            tag="div"
          >
            <_Builtin.Block className="faq-header" tag="div">
              <_Builtin.Block className="paragraph-large" tag="div">
                {"How do I get started lorem ipsum dolor at?"}
              </_Builtin.Block>
              <_Builtin.Block className="filters-drop-down-wrap" tag="div">
                <_Builtin.Image
                  className="plus-icon"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c208a1_chevron-up.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="faq-content" tag="div">
              <_Builtin.Paragraph className="faq-paragraph">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="faq-block"
            data-w-id="0314d801-392d-31f1-af4e-5260fa92cf1d"
            tag="div"
          >
            <_Builtin.Block className="faq-header" tag="div">
              <_Builtin.Block className="paragraph-large" tag="div">
                {"How do I get started lorem ipsum dolor at?"}
              </_Builtin.Block>
              <_Builtin.Block className="filters-drop-down-wrap" tag="div">
                <_Builtin.Image
                  className="plus-icon"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c208a1_chevron-up.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="faq-content" tag="div">
              <_Builtin.Paragraph className="faq-paragraph">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
