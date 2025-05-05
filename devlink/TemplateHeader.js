"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function TemplateHeader({
  as: _Component = _Builtin.Block,
  title = "Changelog",
  description = "Follow this page to keep updated with the latest template changes.",
}) {
  return (
    <_Component className="template-header" tag="div">
      <_Builtin.Block className="container-regular" tag="div">
        <_Builtin.Block className="title-wrap-small-centre" tag="div">
          <_Builtin.Block className="margin-bottom-16" tag="div">
            <_Builtin.Heading tag="h2">{title}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph className="paragraph-regular text-color-white">
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
