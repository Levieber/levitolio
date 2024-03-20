import {
	url,
	type Input,
	array,
	isoTimestamp,
	nullable,
	number,
	object,
	record,
	string,
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

export const featuredProjectsSchema = object({
	allFeaturedprojects: array(
		object({
			id: string(),
			name: string(),
			description: string(),
			homepage: nullable(string([url()])),
			codeUrl: nullable(string([url()])),
			preview: object({
				url: string([url()]),
				width: number(),
				height: number()
			}),
		}),
	),
});

export const projectLanguagesSchema = record(number());

export type GithubProject = Input<typeof githubProjectsSchema>[0];
export type FeaturedProject = Input<typeof featuredProjectsSchema>["allFeaturedprojects"][0]
