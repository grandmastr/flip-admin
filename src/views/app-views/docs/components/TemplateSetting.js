import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const appConfigStr = `import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE } from 'constants/ThemeConstant';

export const APP_NAME = 'Emilus';
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '#ffffff'
};
`

const scssConfigStr = `@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

// Start with assigning color names to specific hex values.
$white:                     #ffffff  !default;
$black:                     #000000  !default;
$red:                       #de4436  !default;
$orange:                    #fa8c16  !default;
$gold:                      #ffc542  !default;
$green:                     #21B573  !default;
$blue:                      #3e82f7  !default; 
$cyan:                      #04d182  !default;
$purple:                    #a461d8  !default; 
$magenta:                   #eb2f96  !default;
$volcano:                   #ff6b72  !default;
$lime:                      #a0d911  !default;
$geekblue:                  #17bcff  !default;


// Create grayscale
$gray-dark:                 #1a3353  !default;
$gray:                      #455560  !default;
$gray-light:                #72849a  !default; 
$gray-lighter:              #ededed  !default;
$gray-lightest:             #f7f7f8  !default;


// State Colors
$primary:                    $blue !default;
$secondary:                  $purple !default;
$success:                    $cyan !default;
$info:                       $blue !default;
$warning:                    $gold !default;
$danger:                     $volcano !default;

$state-color-loop: (
  primary $primary,
  secondary $secondary,
  success $success,
  danger $danger,
  info $info,
  warning $warning,
);

$theme-colors: () !default;
$theme-colors: map-merge(
  (
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "gray":       $gray,
    "gray-light": $gray-light,
    "dark":       $gray-dark
  ),
  $theme-colors
);

// Tones Colors
$tone-magenta:              $magenta !default;  
$tone-magenta-light:        rgba($magenta, 0.05) !default; 

$tone-red:                  $red !default;  
$tone-red-light:            rgba($red, 0.05) !default;    

$tone-volcano:              $volcano !default;  
$tone-volcano-light:        rgba($volcano, 0.05) !default; 

$tone-orange:               $orange !default;  
$tone-orange-light:         rgba($orange, 0.1) !default; 

$tone-gold:                 $gold !default;  
$tone-gold-light:           rgba($gold, 0.1) !default;

$tone-lime:                 $lime !default;  
$tone-lime-light:           rgba($lime, 0.1) !default;

$tone-green:                $green !default;  
$tone-green-light:          rgba($green, 0.1) !default;

$tone-cyan:                 $cyan !default;  
$tone-cyan-light:           rgba($cyan, 0.1) !default;

$tone-blue:                 $blue !default;  
$tone-blue-light:           rgba($blue, 0.1) !default;

$tone-geekblue:             $geekblue !default;  
$tone-geekblue-light:       rgba($geekblue, 0.1) !default;

$tone-purple:               $purple !default;  
$tone-purple-light:         rgba($purple, 0.1) !default;

$tone-loop: (
  "magenta"     $tone-magenta     $tone-magenta-light,
  "red"         $tone-red         $tone-red-light,
  "volcano"     $tone-volcano     $tone-volcano-light,
  "orange"      $tone-orange      $tone-orange-light,
  "gold"        $tone-gold        $tone-gold-light,
  "lime"        $tone-lime        $tone-lime-light,
  "green"       $tone-green       $tone-green-light,
  "cyan"        $tone-cyan        $tone-cyan-light,
  "blue"        $tone-blue        $tone-blue-light,
  "geekblue"    $tone-geekblue    $tone-geekblue-light,
  "purple"      $tone-purple      $tone-purple-light
);

`

const TemplateSetting = () => {
	return (
		<div>
			<h2>Template Setting</h2>
			<p>Emilus comes with a variety of different theme & layout, you can try them from quick view panel in our demo and copy the config to your project.</p>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Theme</h4>
				<p>You can change your theme setup from <code>src/configs/AppConfigs.js</code></p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {appConfigStr}
        </SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Colors</h4>
				<p>Theme Colors can be change in <code>src/assets/scss/variables/_theme.scss</code></p>
				<SyntaxHighlighter className="hl-code" language="scss" style={atomDark}>
          {scssConfigStr}
        </SyntaxHighlighter>
			</div>
		</div>
	)
}

export default TemplateSetting
