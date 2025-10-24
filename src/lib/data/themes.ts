export interface FrameTheme {
  id: string;
  name: string;
  background_color_hex: string;
  color_name_hex: string;
  color_brand_hex: string;
  border_radius?: string;
  shadow?: boolean;
}

export const themes: FrameTheme[] = [
  {
    id: 'light',
    name: 'Light Minimal',
    background_color_hex: '#FAFAFA',
    color_name_hex: '#010101',
    color_brand_hex: '#222222',
    border_radius: '6px',
    shadow: true
  },
  {
    id: 'dark',
    name: 'Dark Contrast',
    background_color_hex: '#010101',
    color_name_hex: '#FAFAFA',
    color_brand_hex: '#BDBDBD',
    border_radius: '6px',
    shadow: false
  },
  {
    id: 'cream',
    name: 'Cream Soft',
    background_color_hex: '#FFF8E7',
    color_name_hex: '#2C2C2C',
    color_brand_hex: '#5B5B5B',
    border_radius: '8px',
    shadow: true
  }
];
