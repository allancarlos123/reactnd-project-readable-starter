import React from "react";
import {Menu} from "semantic-ui-react";

export default function SortBy(props) {
  return (
    <Menu text vertical>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name='recently'
        active={props.activeSortBy === 'recently'}
        onClick={props.handleSortBy}/>
      <Menu.Item
        name='mostPopular'
        active={props.activeSortBy === 'mostPopular'}
        onClick={props.handleSortBy}/>
    </Menu>
  )
}