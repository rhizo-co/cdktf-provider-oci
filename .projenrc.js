/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  authorName: 'rhizo-co',
  packageName: 'rhizo-co-terraform-provider-oci',
  githubNamespace: 'rhizo-co',
  useCustomGithubRunner: false,
  terraformProvider: "oracle/oci@~> 6.18.0",
  cdktfVersion: "0.16.3",
  constructsVersion: "10.2.23",
  minNodeVersion: "18.0.0",
  jsiiVersion: "^5.2.29",
  devDeps: ["@cdktf/provider-project@^0.2.138"],
});


project.synth();
