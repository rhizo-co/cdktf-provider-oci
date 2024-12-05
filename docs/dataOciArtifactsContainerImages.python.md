# `dataOciArtifactsContainerImages` Submodule <a name="`dataOciArtifactsContainerImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerImages <a name="DataOciArtifactsContainerImages" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images oci_artifacts_container_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages(
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
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]] = None,
  id: str = None,
  image_id: str = None,
  is_versioned: typing.Union[bool, IResolvable] = None,
  repository_id: str = None,
  repository_name: str = None,
  state: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.isVersioned">is_versioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#filter DataOciArtifactsContainerImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}.

---

##### `is_versioned`<sup>Optional</sup> <a name="is_versioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.isVersioned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}.

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetIsVersioned">reset_is_versioned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryName">reset_repository_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]

---

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_is_versioned` <a name="reset_is_versioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetIsVersioned"></a>

```python
def reset_is_versioned() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerImages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciArtifactsContainerImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciArtifactsContainerImages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciArtifactsContainerImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.containerImageCollection">container_image_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList">DataOciArtifactsContainerImagesContainerImageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList">DataOciArtifactsContainerImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersionedInput">is_versioned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersioned">is_versioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `container_image_collection`<sup>Required</sup> <a name="container_image_collection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.containerImageCollection"></a>

```python
container_image_collection: DataOciArtifactsContainerImagesContainerImageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList">DataOciArtifactsContainerImagesContainerImageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filter"></a>

```python
filter: DataOciArtifactsContainerImagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList">DataOciArtifactsContainerImagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `is_versioned_input`<sup>Optional</sup> <a name="is_versioned_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersionedInput"></a>

```python
is_versioned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `is_versioned`<sup>Required</sup> <a name="is_versioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersioned"></a>

```python
is_versioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerImagesConfig <a name="DataOciArtifactsContainerImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]] = None,
  id: str = None,
  image_id: str = None,
  is_versioned: typing.Union[bool, IResolvable] = None,
  repository_id: str = None,
  repository_name: str = None,
  state: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.isVersioned">is_versioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#filter DataOciArtifactsContainerImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}.

---

##### `is_versioned`<sup>Optional</sup> <a name="is_versioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.isVersioned"></a>

```python
is_versioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}.

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}.

---

### DataOciArtifactsContainerImagesContainerImageCollection <a name="DataOciArtifactsContainerImagesContainerImageCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection()
```


### DataOciArtifactsContainerImagesContainerImageCollectionItems <a name="DataOciArtifactsContainerImagesContainerImageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems()
```


### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers()
```


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions()
```


### DataOciArtifactsContainerImagesFilter <a name="DataOciArtifactsContainerImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#name DataOciArtifactsContainerImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#values DataOciArtifactsContainerImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#regex DataOciArtifactsContainerImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#name DataOciArtifactsContainerImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#values DataOciArtifactsContainerImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#regex DataOciArtifactsContainerImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layers">layers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layersSizeInBytes">layers_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.manifestSizeInBytes">manifest_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.pullCount">pull_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeLastPulled">time_last_pulled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.versions">versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems">DataOciArtifactsContainerImagesContainerImageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `layers`<sup>Required</sup> <a name="layers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layers"></a>

```python
layers: DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList</a>

---

##### `layers_size_in_bytes`<sup>Required</sup> <a name="layers_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```python
layers_size_in_bytes: str
```

- *Type:* str

---

##### `manifest_size_in_bytes`<sup>Required</sup> <a name="manifest_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.manifestSizeInBytes"></a>

```python
manifest_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pull_count`<sup>Required</sup> <a name="pull_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.pullCount"></a>

```python
pull_count: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_pulled`<sup>Required</sup> <a name="time_last_pulled" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeLastPulled"></a>

```python
time_last_pulled: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.versions"></a>

```python
versions: DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerImagesContainerImageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems">DataOciArtifactsContainerImagesContainerImageCollectionItems</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionList <a name="DataOciArtifactsContainerImagesContainerImageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerImagesContainerImageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerImagesContainerImageCollectionOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.remainingItemsCount">remaining_items_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection">DataOciArtifactsContainerImagesContainerImageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.items"></a>

```python
items: DataOciArtifactsContainerImagesContainerImageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsList</a>

---

##### `remaining_items_count`<sup>Required</sup> <a name="remaining_items_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.remainingItemsCount"></a>

```python
remaining_items_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerImagesContainerImageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection">DataOciArtifactsContainerImagesContainerImageCollection</a>

---


### DataOciArtifactsContainerImagesFilterList <a name="DataOciArtifactsContainerImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerImagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]]

---


### DataOciArtifactsContainerImagesFilterOutputReference <a name="DataOciArtifactsContainerImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_images

dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciArtifactsContainerImagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>]

---



