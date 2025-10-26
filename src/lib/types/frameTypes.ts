export interface FrameLayout {
	id: number;
	name: string;
	grid_cols: number; // max 1 (karena 2R)
	grid_rows: number;
	gap: number; // gap antar foto
	label_position: 'top' | 'bottom';
}

export interface FrameTheme {
	background_color_hex: string;
	color_name_hex: string;
	color_brand_hex: string;
	outline: boolean;
	shadow: boolean;
}

export interface FrameFont {
	font_url_name: string;
	font_url_brand: string;
	font_family_name: string;
	font_family_brand: string;
}

export interface FrameData extends FrameLayout, FrameTheme, FrameFont {
	id: number;
	name: string;
	total_user: number;
	total_grid: 3 | 4;
	weight:
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black';
	brand_name: string;
	category: string;
	suitableFor: string | 'couple' | 'friends' | 'solo' | 'family';
	outline_hex: string;
	mid_border_hex: string;
	extra_category?: string;
}
