"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Banner({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="banner-announcement" tag="div">
      <_Builtin.Block className="banner-container" tag="div">
        <_Builtin.Block className="banner-text-wrapper" tag="div">
          <_Builtin.Block className="paragraph-small" tag="div">
            {"Discover over 1,000+ premium webflow components today!"}
          </_Builtin.Block>
          <_Builtin.Link
            className="banner-button"
            button={true}
            block=""
            options={{
              href: "http://www.flowbase.co",
            }}
          >
            {"Unlock More"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Link
          className="banner-button-small"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.HtmlEmbed
            className="icon-small"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M12.2%203.80667C11.94%203.54667%2011.52%203.54667%2011.26%203.80667L7.99998%207.06L4.73998%203.8C4.47998%203.54%204.05998%203.54%203.79998%203.8C3.53998%204.06%203.53998%204.48%203.79998%204.74L7.05998%208L3.79998%2011.26C3.53998%2011.52%203.53998%2011.94%203.79998%2012.2C4.05998%2012.46%204.47998%2012.46%204.73998%2012.2L7.99998%208.94L11.26%2012.2C11.52%2012.46%2011.94%2012.46%2012.2%2012.2C12.46%2011.94%2012.46%2011.52%2012.2%2011.26L8.93998%208L12.2%204.74C12.4533%204.48667%2012.4533%204.06%2012.2%203.80667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
