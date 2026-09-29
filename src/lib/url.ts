import { siteBase, siteUrl } from '../config';

/** A site-internal link that respects the configured base path. `link('docs/')` → `/<base>/docs/`. */
export function link(path = ''): string {
	return siteBase + path.replace(/^\/+/, '');
}

/** An absolute URL on the deployed site (for canonical and Open Graph tags). */
export function absolute(path = ''): string {
	return siteUrl + link(path);
}
