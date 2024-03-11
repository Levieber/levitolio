import {
	Input,
	array,
	isoTimestamp,
	nullable,
	number,
	object,
	record,
	string,
	url,
} from "valibot";

export const githubProjectsSchema = array(
	object({
		id: number(),
		name: string(),
		html_url: string([url()]),
		homepage: nullable(string([url()])),
		updated_at: nullable(string([isoTimestamp()])),
		languages_url: string([url()]),
	}),
);
export const projectLanguagesSchema = record(number())

export type GithubProject = Input<typeof githubProjectsSchema>[0];
