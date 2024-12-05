# `dataOciArtifactsGenericArtifacts` Submodule <a name="`dataOciArtifactsGenericArtifacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsGenericArtifacts <a name="DataOciArtifactsGenericArtifacts" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts oci_artifacts_generic_artifacts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  repository_id: str,
  artifact_path: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]] = None,
  id: str = None,
  sha256: str = None,
  state: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.artifactPath">artifact_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.sha256">sha256</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}.

---

##### `artifact_path`<sup>Optional</sup> <a name="artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.artifactPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#filter DataOciArtifactsGenericArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.sha256"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath">reset_artifact_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256">reset_sha256</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]

---

##### `reset_artifact_path` <a name="reset_artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath"></a>

```python
def reset_artifact_path() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sha256` <a name="reset_sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256"></a>

```python
def reset_sha256() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciArtifactsGenericArtifacts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciArtifactsGenericArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsGenericArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection">generic_artifact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput">artifact_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input">sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath">artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter"></a>

```python
filter: DataOciArtifactsGenericArtifactsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a>

---

##### `generic_artifact_collection`<sup>Required</sup> <a name="generic_artifact_collection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection"></a>

```python
generic_artifact_collection: DataOciArtifactsGenericArtifactsGenericArtifactCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a>

---

##### `artifact_path_input`<sup>Optional</sup> <a name="artifact_path_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput"></a>

```python
artifact_path_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `sha256_input`<sup>Optional</sup> <a name="sha256_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input"></a>

```python
sha256_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `artifact_path`<sup>Required</sup> <a name="artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsGenericArtifactsConfig <a name="DataOciArtifactsGenericArtifactsConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  repository_id: str,
  artifact_path: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]] = None,
  id: str = None,
  sha256: str = None,
  state: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath">artifact_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256">sha256</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}.

---

##### `artifact_path`<sup>Optional</sup> <a name="artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#filter DataOciArtifactsGenericArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}.

---

### DataOciArtifactsGenericArtifactsFilter <a name="DataOciArtifactsGenericArtifactsFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}.

---

### DataOciArtifactsGenericArtifactsGenericArtifactCollection <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection()
```


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsGenericArtifactsFilterList <a name="DataOciArtifactsGenericArtifactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsGenericArtifactsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciArtifactsGenericArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]]

---


### DataOciArtifactsGenericArtifactsFilterOutputReference <a name="DataOciArtifactsGenericArtifactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciArtifactsGenericArtifactsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>]

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath">artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `artifact_path`<sup>Required</sup> <a name="artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a>

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifacts

dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items"></a>

```python
items: DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsGenericArtifactsGenericArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a>

---



