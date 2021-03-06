import { Action } from "redux";
import { EActionTypes } from "../Actions";

export interface IOutputLevelAction extends Action {
	value: number
}

export interface IExternalOutputLevelAction extends IOutputLevelAction {
	type: EActionTypes.EXTERNAL_OUTPUT_LEVEL
}

export const createExternalOutputLevel = (value: number): IExternalOutputLevelAction => (
	{
		type: EActionTypes.EXTERNAL_OUTPUT_LEVEL,
		value
	}
)

export interface IInternalOutputLevelAction extends IOutputLevelAction {
	type: EActionTypes.INTERNAL_OUTPUT_LEVEL
}

export const createInternalOutputLevel = (value: number): IInternalOutputLevelAction => (
	{
		type: EActionTypes.INTERNAL_OUTPUT_LEVEL,
		value
	}
)

export interface IExternalOutputNameAction extends Action {
	type: EActionTypes.EXTERNAL_OUTPUT_NAME
	channel: number
	name: string
}

export const createExternalOutputName = (channel: number, name: string): IExternalOutputNameAction => (
	{
		type: EActionTypes.EXTERNAL_OUTPUT_NAME,
		channel,
		name
	}
)

export interface IExternalOutputColorAction extends Action {
	type: EActionTypes.EXTERNAL_OUTPUT_COLOR
	channel: number
	color: number
}

export const createExternalOutputColor = (channel: number, color: number): IExternalOutputColorAction => (
	{
		type: EActionTypes.EXTERNAL_OUTPUT_COLOR,
		channel,
		color
	}
)

export interface IInternalOutputChoiceAction extends Action {
	type: EActionTypes.INTERNAL_OUTPUT_CHOICE
	choice: number
}

export const createInternalOutputChoice = (choice: number): IInternalOutputChoiceAction => (
	{
		type: EActionTypes.INTERNAL_OUTPUT_CHOICE,
		choice
	}
)

