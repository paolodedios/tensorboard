# Build targets for building development webapp assets.
#
# This largely duplicates asset related targets in //tensorboard/webapp.
# Because we had to create `index.html` to be zippped by the
# tensorboard_zip_file which ends up having the same target name as
# //tensorboard/webapp:index.html, we had to create the dev_assets version in
# a different package. Once we can get rid of zip asset provider and a way to
# alias asset, we would not need the enitrely different Bazel package.
load("//tensorboard/defs:defs.bzl", "tf_dev_js_binary", "tf_ng_module")
load("//tensorboard/defs:web.bzl", "tf_web_library")

package(default_visibility = ["//tensorboard:__pkg__"])

licenses(["notice"])

tf_ng_module(
    name = "ng_main",
    srcs = [
        "main_dev.ts",
    ],
    deps = [
        "//tensorboard/webapp:ng_main",
        "@npm//@angular/localize",
    ],
)

tf_dev_js_binary(
    name = "tb_webapp_binary",
    entry_point = "main_dev.ts",
    deps = [
        ":ng_main",
    ],
)

tf_web_library(
    name = "tb_webapp",
    srcs = [
        ":tb_webapp_binary.js",
    ],
    path = "/tb-webapp",
)

genrule(
    name = "rename_index_html",
    srcs = ["//tensorboard/webapp:index_polymer3.inlined.html"],
    outs = ["index.html"],
    cmd = "cat $(SRCS) > $@",
)

# Should keep the asset dependencies in sync with //tensorboard:assets.
tf_web_library(
    name = "dev_assets",
    srcs = [
        ":index.html",
        "//tensorboard/components:polymer3_lib_binary.js",
        "//tensorboard/webapp:styles.css",
        "//tensorboard/webapp:svg_bundle",
        "//tensorboard/webapp/widgets/line_chart_v2/lib/worker:chart_worker.js",
    ],
    path = "/",
    deps = [
        ":tb_webapp",
        "//tensorboard/components/tf_imports:roboto",
        "//tensorboard/webapp/widgets/source_code/monaco:monaco_editor",
        "//tensorboard/webapp/widgets/source_code/monaco:monaco_languages",
        "//tensorboard/webapp/widgets/source_code/monaco:requirejs",
        "@com_google_fonts_roboto",
    ],
)
