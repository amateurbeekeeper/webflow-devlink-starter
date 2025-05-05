"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function DevLinkNavigationComponent({
  as: _Component = _Builtin.NavbarWrapper,
}) {
  return (
    <_Component
      className="navbar"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block className="container-navigation" tag="div">
        <_Builtin.Block className="navigation-left" tag="div">
          <_Builtin.NavbarBrand
            className="brand"
            options={{
              href: "#",
              preload: "none",
            }}
          >
            <_Builtin.Image
              className="logo"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c208e1_HireUp%20Logo.svg"
            />
          </_Builtin.NavbarBrand>
        </_Builtin.Block>
        <_Builtin.Block className="navigation-middle" tag="div">
          <_Builtin.NavbarMenu className="nav-menu" tag="nav" role="navigation">
            <_Builtin.NavbarLink
              className="nav-link"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Home"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Company"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link"
              options={{
                href: "#",
              }}
            >
              {"Browse"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="nav-link"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Blog"}
            </_Builtin.NavbarLink>
            <_Builtin.Block className="navbar-mobile-button-wrapper" tag="div">
              <_Builtin.Link
                className="button-primary"
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Login"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block className="navigation-right" tag="div">
          <_Builtin.Block className="navigation-button-wrap" tag="div">
            <_Builtin.NavbarLink
              className="nav-link"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Post a Job"}
            </_Builtin.NavbarLink>
            <_Builtin.NotSupported _atom="UserLogOutLogIn" />
          </_Builtin.Block>
          <_Builtin.NavbarButton className="menu-button" tag="div">
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
