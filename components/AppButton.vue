<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "primary" | "default" | "success" | "error" | "light" | "dark";
    variant?: "default" | "ghost" | "text" | "clear";
    alignText?: string;
    disabled?: boolean;
    icon?: string | Function;
    fullWidth?: boolean;
    iconRight?: boolean;
    iconSize?: "sm" | "md" | "lg" | "xl";
    anchor?: boolean;
    submit?: boolean;
    classes?: string;
    roundButton?: boolean;
    label?: string;
    squareButton?: boolean;
  }>(),
  {
    type: "primary",
    variant: "default",
    alignText: "center",
    disabled: false,
    fullWidth: false,
    anchor: false,
    submit: false,
    classes: "",
    iconSize: "md",
  },
);

const buttonType = props.submit ? "submit" : "button";

const textAlignClasses = {
  left: "text-left",
  center: "text-center justify-center",
  right: "text-right",
};

const basePaddingClass = "px-3 py-2.5";
const textAlignClass = textAlignClasses[props.alignText];

const classes = computed(() => {
  let classes = `transition-colors ${textAlignClass}`;

  const themes = {
    default: {
      primary: `${basePaddingClass} bg-primary text-white hover:opacity-80`,
      secondary: `${basePaddingClass} bg-secondary-200 text-secondary-700 hover:opacity-80`,
      success: `${basePaddingClass} bg-success text-white hover:bg-success-light`,
      error: `${basePaddingClass} bg-error text-white hover:opacity-80`,
    },
    ghost: {
      primary: `${basePaddingClass} border-2 text-primary border-primary hover:bg-primary-light hover:text-white`,
      secondary: `${basePaddingClass} border-2 border-secondary hover:bg-secondary-light hover:text-white`,
      success: `${basePaddingClass} border-2 text-success border-success hover:bg-success-light hover:text-white`,
      error: `${basePaddingClass} border-2 text-error border-error hover:bg-error-light hover:text-white`,
    },
    clear: {
      primary: `${basePaddingClass} text-primary hover:-primary-light hover:text-white`,
      secondary: `${basePaddingClass} text-secondary hover:bg-secondary-light`,
      success: `${basePaddingClass} bg-success text-white hover:opacity-80`,
      error: `${basePaddingClass} text-error hover:bg-error-light`,
    },
    text: {
      primary: "text-primary hover:text-primary-light hover:underline",
      secondary: "text-secondary hover:text-secondary-light",
      success: "bg-success text-white hover:opacity-80",
      error: "text-error hover:bg-error-light",
    },
  };

  classes += ` ${themes[props.variant][props.type]}`;

  classes += ` ${props.fullWidth ? "block w-full" : ""}`;

  classes += ` ${props.roundButton ? "rounded-full" : "rounded-md"}`;

  classes += ` ${props.squareButton ? "aspect-square" : ""}`;

  return classes;
});

const iconClassSizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

const iconIsComponent = typeof props.icon === "function";

const iconClasses = computed(() => {
  let iconClasses;

  if (iconIsComponent) {
    iconClasses = iconClassSizeMap[props.iconSize];
  } else {
    iconClasses = props.icon;
  }

  iconClasses += ` ${props.iconRight ? "order-2" : ""}`;

  return iconClasses;
});
</script>

<template>
  <button v-if="!anchor" :type="buttonType" class="flex items-center gap-2" :class="classes">
    <template v-if="!!icon">
      <slot name="icon">
        <component :is="icon" v-if="iconIsComponent" :class="iconClasses" />
        <i v-else :class="icon"></i>
      </slot>
    </template>
    <slot>
      {{ label }}
    </slot>
  </button>
  <a v-else class="rounded-md p-3" :class="classes">
    <slot>{{ label }}</slot>
  </a>
</template>

<style scoped></style>
