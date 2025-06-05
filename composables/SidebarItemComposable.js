export const useSidebarItemProps = () => {
  return {
    children: {
      type: Array,
      default: null,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "/",
    },
  };
};
