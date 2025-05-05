"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Search({ as: _Component = _Builtin.SearchForm }) {
  return (
    <_Component className="search" action="/search">
      <_Builtin.Block className="search-input-wrapper" tag="div">
        <_Builtin.Image
          className="icon-regular"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/68191196d561397b05c207a5/68191197d561397b05c20902_Search%20Icon.svg"
        />
        <_Builtin.SearchInput
          className="search-field"
          autoFocus={false}
          disabled={false}
          maxLength={256}
          name="query"
          placeholder="Search…"
          required={true}
          type="search"
          id="search"
        />
      </_Builtin.Block>
      <_Builtin.SearchButton
        className="search-button"
        type="submit"
        value="Search"
      />
    </_Component>
  );
}
