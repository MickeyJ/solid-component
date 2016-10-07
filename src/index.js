
import banner from './Banner/banner'
import boxButton from './Button/box_button'

import form from './Form/form'
import textInput from './Form/Input/text_input'
import multiSelect from './Form/MultiSelect/multi_select'

import navBar from './Navigation/NavBar/nav_bar'
import navTab from './Navigation/NavTab/nav_tab'

export const Banner = banner;
export const BoxButton = boxButton;

export const Form = form;
export const TextInput = textInput;
export const MultiSelect = multiSelect;

export const NavBar = navBar;
export const NavTab = navTab;

if(!process.env.BABEL_ENV){
  require('./style/main.scss')
}

