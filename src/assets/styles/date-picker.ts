// adapted from react-date-picker/dist/DatePicker.css
import { css } from 'styled-components';

import colorVars from 'src/utils/color-vars';

export const datePickerStyle = css`
  .react-date-picker {
    display: inline-flex;
    position: relative;
  }
  .react-date-picker,
  .react-date-picker *,
  .react-date-picker *:before,
  .react-date-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-date-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border-radius: 0.5rem;
  }

  .react-date-picker__inputGroup {
    min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);
    flex-grow: 1;
    padding: 0 2px;
    box-sizing: content-box;
  }

  .react-date-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }

  .react-date-picker__inputGroup__input {
    min-width: 0.54em;
    height: 100%;
    position: relative;
    padding: 0 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }

  .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .react-date-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }

  .react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }

  .react-date-picker__inputGroup__divider,
  .react-date-picker__inputGroup__leadingZero,
  .react-date-picker__inputGroup__input {
    color: ${colorVars.white};
  }

  .react-date-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }

  .react-date-picker__button:enabled {
    cursor: pointer;
  }

  .react-date-picker__button:enabled
    .react-date-picker__button__icon {
    stroke: ${colorVars.white};
  }

  .react-date-picker__button:enabled:hover
    .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus
    .react-date-picker__button__icon {
    stroke: ${colorVars.secondary};
  }

  .react-date-picker__button:disabled
    .react-date-picker__button__icon {
    stroke: #6d6d6d;
  }

  .react-date-picker__button svg {
    display: inherit;
  }

  .react-date-picker__calendar {
    width: 350px;
    max-width: 100vw;
    position: absolute;
    z-index: 1;
    inset: 100% -0.6rem auto auto !important;
  }

  .react-date-picker__calendar--closed {
    display: none;
  }

  .react-date-picker__calendar .react-calendar {
    border-width: thin;
  }
`;
