import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class guitarMIDIGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this.style.display = "inline-flex";
        
        this._root.innerHTML = `<style>.my-pedal {align-items:normal;alignment-baseline:baseline;backface-visibility:visible;baseline-source:auto;border-collapse:separate;border-image-repeat:stretch;box-decoration-break:slice;box-sizing:border-box;break-inside:auto;caption-side:top;clear:none;column-fill:balance;column-span:none;contain:none;container-type:normal;content-visibility:visible;direction:ltr;display:block;dominant-baseline:auto;empty-cells:show;field-sizing:fixed;flex-direction:row;flex-wrap:nowrap;float:none;font-kerning:auto;font-language-override:normal;font-optical-sizing:auto;font-synthesis-style:auto;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-emoji:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;forced-color-adjust:auto;grid-auto-flow:row;hyphens:manual;image-orientation:from-image;image-rendering:auto;ime-mode:auto;isolation:auto;justify-items:normal;line-break:auto;list-style-position:outside;mask-type:luminance;math-shift:normal;math-style:normal;mix-blend-mode:normal;-moz-box-align:stretch;-moz-box-direction:normal;-moz-box-orient:horizontal;-moz-box-pack:start;-moz-float-edge:content-box;-moz-orient:inline;-moz-text-size-adjust:auto;object-fit:fill;outline-style:none;overflow-anchor:auto;overflow-wrap:normal;paint-order:normal;pointer-events:auto;position:unset;position-area:none;position-try-order:normal;position-visibility:anchors-visible;print-color-adjust:economy;resize:none;ruby-align:space-around;ruby-position:alternate;scroll-behavior:auto;scroll-snap-align:none;scroll-snap-stop:normal;scroll-snap-type:none;scrollbar-gutter:auto;scrollbar-width:auto;shape-rendering:auto;stroke-linecap:butt;stroke-linejoin:miter;table-layout:auto;text-align:center;text-align-last:auto;text-anchor:start;text-autospace:no-autospace;text-box-edge:auto;text-box-trim:none;text-combine-upright:none;text-decoration-line:none;text-decoration-skip-ink:auto;text-decoration-style:solid;text-emphasis-position:auto;text-justify:auto;text-orientation:mixed;text-rendering:auto;text-transform:none;text-underline-position:auto;text-wrap-mode:wrap;text-wrap-style:auto;touch-action:none;transform-box:view-box;transform-style:flat;unicode-bidi:isolate;user-select:auto;vector-effect:none;visibility:visible;-webkit-text-security:none;white-space-collapse:collapse;word-break:normal;writing-mode:horizontal-tb;appearance:none;-moz-force-broken-image-icon:0;break-after:auto;break-before:auto;color-interpolation:srgb;color-interpolation-filters:linearrgb;align-content:normal;justify-content:normal;clip-rule:nonzero;fill-rule:nonzero;align-self:auto;justify-self:auto;font-synthesis-position:auto;font-synthesis-small-caps:auto;font-synthesis-weight:auto;overflow-block:visible;overflow-inline:visible;overflow-x:visible;overflow-y:visible;overscroll-behavior-block:auto;overscroll-behavior-inline:auto;overscroll-behavior-x:auto;overscroll-behavior-y:auto;border-block-end-style:solid;border-block-start-style:solid;border-bottom-style:solid;border-inline-end-style:solid;border-inline-start-style:solid;border-left-style:solid;border-right-style:solid;border-top-style:solid;column-rule-style:none;accent-color:auto;anchor-name:none;animation-composition:replace;animation-delay:0s;animation-direction:normal;animation-duration:0s;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-range-end:normal;animation-range-start:normal;animation-timeline:auto;animation-timing-function:ease;aspect-ratio:auto;backdrop-filter:none;background-attachment:scroll;background-blend-mode:normal;background-clip:border-box;background-image:none;background-origin:padding-box;background-position-x:0%;background-position-y:0%;background-repeat:repeat;background-size:contain;baseline-shift:0px;border-image-outset:0;border-image-slice:100%;border-image-width:1;border-spacing:0px;box-shadow:rgba(0, 0, 0, 0.7) 4px 5px 6px 0px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px;caret-color:rgb(33, 37, 41);clip:auto;clip-path:none;color:rgb(33, 37, 41);color-scheme:normal;column-count:auto;container-name:none;content:normal;counter-increment:none;counter-reset:none;counter-set:none;cursor:auto;d:none;filter:none;flex-basis:auto;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-feature-settings:normal;font-palette:normal;font-size:16px;font-size-adjust:none;font-style:normal;font-variant-alternates:normal;font-variation-settings:normal;font-weight:400;font-width:100%;grid-template-areas:none;hyphenate-character:auto;hyphenate-limit-chars:auto;letter-spacing:normal;line-height:24px;list-style-type:disc;mask-clip:border-box;mask-composite:add;mask-image:none;mask-mode:match-source;mask-origin:border-box;mask-position-x:0%;mask-position-y:0%;mask-repeat:repeat;mask-size:auto;math-depth:0;offset-anchor:auto;offset-path:none;offset-position:normal;offset-rotate:auto;outline-offset:0px;overflow-clip-margin:0px;page:auto;perspective:none;position-anchor:normal;position-try-fallbacks:none;quotes:auto;rotate:none;scale:none;scroll-timeline-axis:block;scroll-timeline-name:none;scrollbar-color:auto;shape-outside:none;stroke-dasharray:none;stroke-dashoffset:0px;stroke-width:1px;tab-size:8;text-decoration-inset:0px;text-decoration-thickness:auto;text-emphasis-style:none;text-indent:0px;text-overflow:clip;text-shadow:none;text-underline-offset:auto;transform-origin:183.5px 201.5px;transition-behavior:normal;transition-delay:0s;transition-duration:0s;transition-property:all;transition-timing-function:ease;translate:none;view-timeline-axis:block;view-timeline-inset:auto;view-timeline-name:none;view-transition-class:none;view-transition-name:none;-webkit-text-stroke-width:0px;will-change:auto;word-spacing:0px;z-index:auto;zoom:1;object-position:50% 50%;perspective-origin:183.5px 201.5px;fill:rgb(0, 0, 0);stroke:none;grid-template-columns:none;grid-template-rows:none;border-image-source:none;list-style-image:none;grid-auto-columns:auto;grid-auto-rows:auto;fill-opacity:1;stroke-opacity:1;anchor-scope:none;timeline-scope:none;transform:matrix(1, 0, 0, 1, 38, -2);column-width:auto;column-gap:normal;row-gap:normal;-moz-box-ordinal-group:1;order:0;marker-end:none;marker-mid:none;marker-start:none;contain-intrinsic-block-size:none;contain-intrinsic-height:none;contain-intrinsic-inline-size:none;contain-intrinsic-width:none;grid-column-end:auto;grid-column-start:auto;grid-row-end:auto;grid-row-start:auto;max-block-size:none;max-height:none;max-inline-size:none;max-width:none;flex-grow:0;flex-shrink:1;-moz-box-flex:0;stroke-miterlimit:4;cx:0px;cy:0px;offset-distance:0px;x:0px;y:0px;flood-opacity:1;opacity:1;shape-image-threshold:0;stop-opacity:1;border-bottom-left-radius:15px;border-bottom-right-radius:15px;border-end-end-radius:15px;border-end-start-radius:15px;border-start-end-radius:15px;border-start-start-radius:15px;border-top-left-radius:15px;border-top-right-radius:15px;bottom:14.5px;inset-block-end:14.5px;inset-block-start:59.5px;inset-inline-end:937px;inset-inline-start:212px;left:212px;right:937px;top:59.5px;margin-block-end:2px;margin-block-start:2px;margin-bottom:2px;margin-inline-end:2px;margin-inline-start:2px;margin-left:2px;margin-right:2px;margin-top:2px;block-size:403px;height:403px;inline-size:367px;min-block-size:0px;min-height:0px;min-inline-size:0px;min-width:0px;width:367px;scroll-margin-block-end:0px;scroll-margin-block-start:0px;scroll-margin-bottom:0px;scroll-margin-inline-end:0px;scroll-margin-inline-start:0px;scroll-margin-left:0px;scroll-margin-right:0px;scroll-margin-top:0px;border-block-end-width:1px;border-block-start-width:1px;border-bottom-width:1px;border-inline-end-width:1px;border-inline-start-width:1px;border-left-width:1px;border-right-width:1px;border-top-width:1px;column-rule-width:3px;outline-width:3px;padding-block-end:1px;padding-block-start:1px;padding-bottom:1px;padding-inline-end:1px;padding-inline-start:1px;padding-left:1px;padding-right:1px;padding-top:1px;r:0px;shape-margin:0px;rx:auto;ry:auto;scroll-padding-block-end:auto;scroll-padding-block-start:auto;scroll-padding-bottom:auto;scroll-padding-inline-end:auto;scroll-padding-inline-start:auto;scroll-padding-left:auto;scroll-padding-right:auto;scroll-padding-top:auto;background-color:rgb(128, 128, 128);border-block-end-color:rgb(73, 73, 73);border-block-start-color:rgb(73, 73, 73);border-bottom-color:rgb(73, 73, 73);border-inline-end-color:rgb(73, 73, 73);border-inline-start-color:rgb(73, 73, 73);border-left-color:rgb(73, 73, 73);border-right-color:rgb(73, 73, 73);border-top-color:rgb(73, 73, 73);column-rule-color:rgb(33, 37, 41);flood-color:rgb(0, 0, 0);lighting-color:rgb(255, 255, 255);outline-color:rgb(33, 37, 41);stop-color:rgb(0, 0, 0);text-decoration-color:rgb(33, 37, 41);text-emphasis-color:rgb(33, 37, 41);-webkit-text-fill-color:rgb(33, 37, 41);-webkit-text-stroke-color:rgb(33, 37, 41);margin:2px;margin-block:2px;margin-inline:2px;scroll-margin:0px;scroll-margin-block:0px;scroll-margin-inline:0px;padding:1px;padding-block:1px;padding-inline:1px;scroll-padding:auto;scroll-padding-block:auto;scroll-padding-inline:auto;border-color:rgb(73, 73, 73);border-style:solid;border-width:1px;border-block-color:rgb(73, 73, 73);border-inline-color:rgb(73, 73, 73);border-block-width:1px;border-inline-width:1px;border-block-style:solid;border-inline-style:solid;border-top:1px solid rgb(73, 73, 73);border-right:1px solid rgb(73, 73, 73);border-bottom:1px solid rgb(73, 73, 73);border-left:1px solid rgb(73, 73, 73);border-block-start:1px solid rgb(73, 73, 73);border-block-end:1px solid rgb(73, 73, 73);border-inline-start:1px solid rgb(73, 73, 73);border-inline-end:1px solid rgb(73, 73, 73);border-block:1px solid rgb(73, 73, 73);border-inline:1px solid rgb(73, 73, 73);border-image:none;border:1px solid rgb(73, 73, 73);overflow:visible;overscroll-behavior:auto;container:none;vertical-align:baseline;page-break-before:auto;page-break-after:auto;page-break-inside:auto;offset:normal;-webkit-perspective:none;-webkit-transform:matrix(1, 0, 0, 1, 38, -2);background:0% 0% / contain rgb(128, 128, 128);inset:59.5px auto auto 212px;inset-block:59.5px auto;inset-inline:212px auto;contain-intrinsic-size:none;flex-flow:row;flex:0 1 auto;gap:normal;grid-row:auto;grid-column:auto;grid-area:auto;grid-template:none;grid:none;place-content:normal;place-self:auto;place-items:normal;position-try:none;marker:none;transition:all;animation:none;scroll-timeline:none;view-timeline:none;animation-range:normal;list-style:outside;background-position:0% 0%;mask:none;mask-position:0% 0%;border-radius:15px;outline:rgb(33, 37, 41) 3px;columns:auto;column-rule:3px none rgb(33, 37, 41);text-decoration:none;font:16px / 24px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-variant:normal;font-synthesis:weight style small-caps position;text-box:normal;text-emphasis:none rgb(33, 37, 41);text-wrap:wrap;white-space:normal;-webkit-text-stroke:0px rgb(33, 37, 41);-webkit-line-clamp:none;-webkit-box-flex:0;-webkit-box-ordinal-group:1;-webkit-align-content:normal;-webkit-align-items:normal;-webkit-align-self:auto;-moz-animation-delay:0s;-webkit-animation-delay:0s;-moz-animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-duration:0s;-webkit-animation-duration:0s;-moz-animation-fill-mode:none;-webkit-animation-fill-mode:none;-moz-animation-iteration-count:1;-webkit-animation-iteration-count:1;-moz-animation-name:none;-webkit-animation-name:none;-moz-animation-play-state:running;-webkit-animation-play-state:running;-moz-animation-timing-function:ease;-webkit-animation-timing-function:ease;-webkit-appearance:none;-webkit-background-size:contain;-webkit-box-shadow:rgba(0, 0, 0, 0.7) 4px 5px 6px 0px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px;-webkit-clip-path:none;grid-column-gap:normal;-webkit-filter:none;-webkit-flex-basis:auto;-webkit-flex-grow:0;-webkit-flex-shrink:1;-moz-font-feature-settings:normal;-webkit-font-feature-settings:normal;-moz-font-language-override:normal;font-stretch:100%;-webkit-justify-content:normal;-webkit-order:0;word-wrap:normal;-moz-perspective:none;-moz-perspective-origin:183.5px 201.5px;-webkit-perspective-origin:183.5px 201.5px;color-adjust:economy;grid-row-gap:normal;-moz-transform:matrix(1, 0, 0, 1, 38, -2);-moz-transform-origin:183.5px 201.5px;-webkit-transform-origin:183.5px 201.5px;-moz-transform-style:flat;-webkit-transform-style:flat;-moz-transition-delay:0s;-webkit-transition-delay:0s;-moz-transition-duration:0s;-webkit-transition-duration:0s;-moz-transition-property:all;-webkit-transition-property:all;-moz-transition-timing-function:ease;-webkit-transition-timing-function:ease;-moz-user-select:auto;-webkit-user-select:auto;-webkit-mask-image:none;-webkit-mask-position-x:0%;-webkit-mask-position-y:0%;-webkit-mask-repeat:repeat;-webkit-mask-size:auto;-moz-tab-size:8;-moz-border-start-color:rgb(73, 73, 73);-moz-border-end-color:rgb(73, 73, 73);-moz-border-start-style:solid;-moz-border-end-style:solid;-moz-border-start-width:1px;-moz-border-end-width:1px;-webkit-border-top-left-radius:15px;-webkit-border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;-webkit-border-bottom-left-radius:15px;-moz-margin-start:2px;-moz-margin-end:2px;-moz-padding-start:1px;-moz-padding-end:1px;-webkit-background-clip:border-box;-webkit-background-origin:padding-box;-moz-backface-visibility:visible;-webkit-backface-visibility:visible;-moz-hyphens:manual;-webkit-text-size-adjust:auto;-webkit-flex-direction:row;-webkit-flex-wrap:nowrap;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-mask-clip:border-box;-webkit-mask-origin:border-box;-webkit-mask-composite:add;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-box-pack:start;-moz-border-start:1px solid rgb(73, 73, 73);-moz-border-end:1px solid rgb(73, 73, 73);-moz-border-image:none;-webkit-border-image:none;-webkit-flex-flow:row;-webkit-flex:0 1 auto;grid-gap:normal;-moz-transition:all;-webkit-transition:all;-moz-animation:none;-webkit-animation:none;-webkit-mask:none;-webkit-mask-position:0% 0%;-webkit-border-radius:15px;};</style>
<div id="guitarMIDI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 367px; position: relative; top: 0px; left: 0px; height: 403px; transform: translate(38px, -2px);" class="resize-drag my-pedal gradiant-target" data-x="38" data-y="-2"><div style="border: medium; padding: 1px; margin: 1px; text-align: center; display: inline-block;"><button id="/guitar/gate" type="button" label="gate" varname="fButton0" shortname="gate" address="/guitar/gate" index="8220" meta="[object Object]">gate</button></div><div id="guitarMIDI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 181px; height: 196.5px;" class="resize-drag"></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 27.5px; transform: translate(85px, 73px);" class="drag target-style" data-x="85" data-y="73"><webaudio-knob id="/guitar/midi/freq" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="50" max="1000" step="0.01" width="150" height="150"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 150px 15150px; outline: none; width: 150px; height: 150px; background-position: 0px -1050px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 1047.18px; top: -36.5px;">124.21</div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 71.5px; transform: translate(200px, 223px);" class="drag" data-x="200" data-y="223"><webaudio-knob id="/guitar/midi/bend" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="-2" max="2" step="0.01" width="0" height="0"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 0px 0px; outline: none; width: 0px; height: 0px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 996.467px; top: -36.5px;">-0.75</div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 115.5px;" class="drag"><webaudio-knob id="/guitar/midi/gain" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1" step="0.01" width="0" height="0"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 0px 0px; outline: none; width: 0px; height: 0px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 997.3px; top: -36.5px;">0.00</div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 149.25px; left: 66.95px; transform: translate(245px, 141px);" class="drag" data-x="245" data-y="141"><webaudio-knob id="/guitar/midi/sustain" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1" step="1" width="0" height="0"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 0px 0px; outline: none; width: 0px; height: 0px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 1010.49px; top: -36.5px;">0</div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 233.5px; left: 49.1667px;" class="drag"><webaudio-knob id="/guitar/outGain" style="touch-action: none; display: block;" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="0" height="0"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 0px 0px; outline: none; width: 0px; height: 0px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 1041.3px; top: -36.5px;">0.00</div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 313.75px; left: 27.5px;" class="drag"><webaudio-knob id="/guitar/pluckPosition" style="touch-action: none; display: block;" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="0" height="0"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 0px 0px; outline: none; width: 0px; height: 0px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s, visibility 0.1s; opacity: 0; visibility: hidden; left: 1042.3px; top: -36.5px;">0.00</div>
</webaudio-knob></div><label for="guitar" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 185px; left: 2px; top: 5.5px;" class="drag" contenteditable="false">guitar</label><label for="midi" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 177px; left: 6px; top: 41.5px; border: medium;" class="drag" contenteditable="false">midi</label><label for="freq" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 30.5px; top: 119.75px; transform: translate(138px, 182px); border: medium;" class="drag" contenteditable="false" data-x="138" data-y="182">freq</label><label for="bend" style="text-align: center; display: none; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 74.5px; top: 119.75px; border: medium;" class="drag" contenteditable="false">bend</label><label for="gain" style="text-align: center; display: none; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 118.5px; top: 119.75px; transform: translate(146px, 241px); border: medium;" class="drag" contenteditable="false" data-x="146" data-y="241">gain</label><label for="sustain" style="text-align: center; display: none; touch-action: none; position: absolute; z-index: 1; width: 49.1px; left: 69.95px; top: 200px; border: medium; transform: translate(157px, 158px);" class="drag" contenteditable="false" data-x="157" data-y="158">sustain</label><label for="outGain" style="text-align: center; display: none; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 52.1667px; top: 284.25px; transform: translate(120px, 75px); border: medium;" class="drag" contenteditable="false" data-x="120" data-y="75">outGain</label><label for="pluckPosition" style="text-align: center; display: none; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 30.5px; top: 364.5px; border: medium;" class="drag" contenteditable="false">pluckPosition</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/guitar/midi/freq').value = this._plug.audioNode.getParamValue('/guitar/midi/freq');
        

        this._root.getElementById('/guitar/midi/bend').value = this._plug.audioNode.getParamValue('/guitar/midi/bend');
        

        this._root.getElementById('/guitar/midi/gain').value = this._plug.audioNode.getParamValue('/guitar/midi/gain');
        

        this._root.getElementById('/guitar/midi/sustain').value = this._plug.audioNode.getParamValue('/guitar/midi/sustain');
        

        this._root.getElementById('/guitar/outGain').value = this._plug.audioNode.getParamValue('/guitar/outGain');
        

        this._root.getElementById('/guitar/pluckPosition').value = this._plug.audioNode.getParamValue('/guitar/pluckPosition');
        
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/guitar/midi/freq").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/midi/freq", e.target.value));
this._root.getElementById("/guitar/midi/bend").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/midi/bend", e.target.value));
this._root.getElementById("/guitar/midi/gain").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/midi/gain", e.target.value));
this._root.getElementById("/guitar/midi/sustain").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/midi/sustain", e.target.value));
this._root.getElementById("/guitar/outGain").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/outGain", e.target.value));
this._root.getElementById("/guitar/pluckPosition").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/guitar/pluckPosition", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 
              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-guitarmidi', 
                                guitarMIDIGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      