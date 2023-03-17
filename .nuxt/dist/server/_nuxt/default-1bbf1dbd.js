import { _ as __nuxt_component_0 } from "./nuxt-link-343a4f5f.js";
import { computed, resolveComponent, mergeProps, withCtx, unref, createVNode, toHandlers, toDisplayString, useSSRContext, openBlock, createBlock, Fragment, renderList, createTextVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc, e as useTheme } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
const ThemeToggle_vue_vue_type_style_index_0_scoped_2b933413_lang = "";
const _sfc_main$2 = {
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const disabledTheme = computed({
      get() {
        return !theme.global.current.value.dark ? "dark" : "light";
      }
    });
    function toggleDarkMode() {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
      localStorage.setItem(
        "dark_theme",
        theme.global.current.value.dark.toString()
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-toggle-container" }, _attrs))} data-v-2b933413>`);
      _push(ssrRenderComponent(_component_v_row, {
        align: "center",
        justify: "center",
        "no-gutters": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { class: "pa-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "left"
                  }, {
                    activator: withCtx(({ on, attrs }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${ssrRenderAttrs(mergeProps({ class: "toggle" }, attrs, {
                          class: { "is-light-mode": unref(disabledTheme) === "dark" }
                        }))} data-v-2b933413${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("span", mergeProps({ class: "toggle" }, attrs, {
                            class: { "is-light-mode": unref(disabledTheme) === "dark" },
                            onClick: toggleDarkMode
                          }, toHandlers(on, true)), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-2b933413${_scopeId3}>Enable ${ssrInterpolate(unref(disabledTheme))} mode</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "left"
                    }, {
                      activator: withCtx(({ on, attrs }) => [
                        createVNode("span", mergeProps({ class: "toggle" }, attrs, {
                          class: { "is-light-mode": unref(disabledTheme) === "dark" },
                          onClick: toggleDarkMode
                        }, toHandlers(on, true)), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tooltip, {
                    activator: "parent",
                    location: "left"
                  }, {
                    activator: withCtx(({ on, attrs }) => [
                      createVNode("span", mergeProps({ class: "toggle" }, attrs, {
                        class: { "is-light-mode": unref(disabledTheme) === "dark" },
                        onClick: toggleDarkMode
                      }, toHandlers(on, true)), null, 16)
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2b933413"]]);
const MainFooter_vue_vue_type_style_index_0_scoped_3c638566_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      socials: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/gtopsis"
        },
        {
          icon: "github",
          link: "https://github.com/gtopsis"
        }
      ],
      personalMessage: "Build playing with Nuxt.js"
    };
  },
  computed: {
    footerText() {
      const now = new Date().getFullYear();
      return `Giorgos Topsis ${now}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_fa = resolveComponent("fa");
  _push(ssrRenderComponent(_component_v_container, mergeProps({ "pa-2": "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                class: "socials-list-container py-1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, {
                      class: "socials-list ma-0",
                      justify: "center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList($data.socials, (social, index) => {
                            _push5(ssrRenderComponent(_component_v_col, {
                              key: index,
                              cols: "auto",
                              class: "pa-1"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<a${ssrRenderAttr("href", social.link)} class="social-link" target="_blank" rel="noopener noreferrer" data-v-3c638566${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_fa, {
                                    class: "social-icon",
                                    icon: ["fab", social.icon]
                                  }, null, _parent6, _scopeId5));
                                  _push6(`</a>`);
                                } else {
                                  return [
                                    createVNode("a", {
                                      href: social.link,
                                      class: "social-link",
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    }, [
                                      createVNode(_component_fa, {
                                        class: "social-icon",
                                        icon: ["fab", social.icon]
                                      }, null, 8, ["icon"])
                                    ], 8, ["href"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.socials, (social, index) => {
                              return openBlock(), createBlock(_component_v_col, {
                                key: index,
                                cols: "auto",
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", {
                                    href: social.link,
                                    class: "social-link",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, [
                                    createVNode(_component_fa, {
                                      class: "social-icon",
                                      icon: ["fab", social.icon]
                                    }, null, 8, ["icon"])
                                  ], 8, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_row, {
                        class: "socials-list ma-0",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.socials, (social, index) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: index,
                              cols: "auto",
                              class: "pa-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: social.link,
                                  class: "social-link",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode(_component_fa, {
                                    class: "social-icon",
                                    icon: ["fab", social.icon]
                                  }, null, 8, ["icon"])
                                ], 8, ["href"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                class: "py-1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="text-center ma-0" data-v-3c638566${_scopeId3}>${ssrInterpolate($data.personalMessage)}</p><p class="text-center ma-0" data-v-3c638566${_scopeId3}>© ${ssrInterpolate($options.footerText)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-center ma-0" }, toDisplayString($data.personalMessage), 1),
                      createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString($options.footerText), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  class: "socials-list-container py-1"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, {
                      class: "socials-list ma-0",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.socials, (social, index) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: index,
                            cols: "auto",
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: social.link,
                                class: "social-link",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode(_component_fa, {
                                  class: "social-icon",
                                  icon: ["fab", social.icon]
                                }, null, 8, ["icon"])
                              ], 8, ["href"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  class: "py-1"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-center ma-0" }, toDisplayString($data.personalMessage), 1),
                    createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString($options.footerText), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                class: "socials-list-container py-1"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, {
                    class: "socials-list ma-0",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.socials, (social, index) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: index,
                          cols: "auto",
                          class: "pa-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: social.link,
                              class: "social-link",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, [
                              createVNode(_component_fa, {
                                class: "social-icon",
                                icon: ["fab", social.icon]
                              }, null, 8, ["icon"])
                            ], 8, ["href"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "py-1"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-center ma-0" }, toDisplayString($data.personalMessage), 1),
                  createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString($options.footerText), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c638566"]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "{GT}";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_theme_toggle = __nuxt_component_1;
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_footer = resolveComponent("v-footer");
      const _component_main_footer = __nuxt_component_2;
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              fixed: "",
              app: "",
              "elevate-on-scroll": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="logo"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(title))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "logo" }, [
                            createVNode(_component_nuxt_link, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(title))
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<nav role="navigation"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_list, {
                    nav: "",
                    class: "nav d-inline-flex flex-row justify-end align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Work`);
                                  } else {
                                    return [
                                      createTextVNode("Work")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, { to: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Work")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`About`);
                                  } else {
                                    return [
                                      createTextVNode("About")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, { to: "/about" }, {
                                  default: withCtx(() => [
                                    createTextVNode("About")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, { to: "/" }, {
                                default: withCtx(() => [
                                  createTextVNode("Work")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, { to: "/about" }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</nav>`);
                  _push3(ssrRenderComponent(_component_theme_toggle, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "logo" }, [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(title))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_spacer),
                    createVNode("nav", { role: "navigation" }, [
                      createVNode(_component_v_list, {
                        nav: "",
                        class: "nav d-inline-flex flex-row justify-end align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, { to: "/" }, {
                                default: withCtx(() => [
                                  createTextVNode("Work")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, { to: "/about" }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_theme_toggle)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, { role: "main" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, {
                    fluid: "",
                    "fill-height": "",
                    "pa-0": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, {
                      fluid: "",
                      "fill-height": "",
                      "pa-0": ""
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_footer, { role: "contentinfo" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_main_footer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_main_footer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                fixed: "",
                app: "",
                "elevate-on-scroll": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "logo" }, [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(title))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_spacer),
                  createVNode("nav", { role: "navigation" }, [
                    createVNode(_component_v_list, {
                      nav: "",
                      class: "nav d-inline-flex flex-row justify-end align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode("Work")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, { to: "/about" }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_theme_toggle)
                ]),
                _: 1
              }),
              createVNode(_component_v_main, { role: "main" }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, {
                    fluid: "",
                    "fill-height": "",
                    "pa-0": ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_v_footer, { role: "contentinfo" }, {
                default: withCtx(() => [
                  createVNode(_component_main_footer)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-1bbf1dbd.js.map
