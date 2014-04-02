Angular UI Widgets
==================

## Box Accordion ##

Usage:
```
	<box-accordion>
		<box-accordion-group>
        	<box-accordion-head color={{item.color}}>
            	<!-- Head content -->
			</box-accordion-head>
            <box-accordion-body>
            	<!-- Body content -->
            </box-accordion-body>
		</box-accordion-group>
		<box-accordion-group>
        	<box-accordion-head color={{item.color}}>
            	<!-- Head content -->
			</box-accordion-head>
            <box-accordion-body>
            	<!-- Body content -->
            </box-accordion-body>
		</box-accordion-group>
	</box-accordion>
With ng-repeat:
```
	<box-accordion>
		<box-accordion-group ng-repeat="item in items">
        	<box-accordion-head color={{item.color}}>
            	<span class="title">{{ item.title }}</span>
			</box-accordion-head>
            <box-accordion-body>
            	<div class="demo-body">
            		<h3>{{ item.title }}</h3>
            		<div>{{ item.description }}</div>
                </div>
            </box-accordion-body>
		</box-accordion-group>
	</box-accordion>
```
[Box Accordion Demo](http://ema93sh.github.io/angular-ui/boxAccordion/index.html "Box Accordion")

## Color Picker ##

Usage:
```
    <color-picker available-colors="colors" selected-color="color"></color-picker>
```
[Color Picker Demo](http://ema93sh.github.io/angular-ui/colorpicker/index.html "Color Picker")
