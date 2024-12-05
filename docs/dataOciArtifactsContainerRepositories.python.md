# `dataOciArtifactsContainerRepositories` Submodule <a name="`dataOciArtifactsContainerRepositories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerRepositories <a name="DataOciArtifactsContainerRepositories" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories oci_artifacts_container_repositories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories(
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
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]] = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  repository_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#filter DataOciArtifactsContainerRepositories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]

---

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciArtifactsContainerRepositories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciArtifactsContainerRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection">container_repository_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `container_repository_collection`<sup>Required</sup> <a name="container_repository_collection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection"></a>

```python
container_repository_collection: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter"></a>

```python
filter: DataOciArtifactsContainerRepositoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerRepositoriesConfig <a name="DataOciArtifactsContainerRepositoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]] = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  repository_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#filter DataOciArtifactsContainerRepositories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}.

---

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollection <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection()
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems()
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme()
```


### DataOciArtifactsContainerRepositoriesFilter <a name="DataOciArtifactsContainerRepositoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs">billable_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount">image_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable">is_immutable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic">is_public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount">layer_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes">layers_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed">time_last_pushed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billable_size_in_gbs`<sup>Required</sup> <a name="billable_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs"></a>

```python
billable_size_in_gbs: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_count`<sup>Required</sup> <a name="image_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount"></a>

```python
image_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_immutable`<sup>Required</sup> <a name="is_immutable" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable"></a>

```python
is_immutable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `layer_count`<sup>Required</sup> <a name="layer_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount"></a>

```python
layer_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `layers_size_in_bytes`<sup>Required</sup> <a name="layers_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```python
layers_size_in_bytes: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `readme`<sup>Required</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme"></a>

```python
readme: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_pushed`<sup>Required</sup> <a name="time_last_pushed" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed"></a>

```python
time_last_pushed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount">image_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount">layer_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes">layers_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount">remaining_items_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount">repository_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_count`<sup>Required</sup> <a name="image_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount"></a>

```python
image_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items"></a>

```python
items: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a>

---

##### `layer_count`<sup>Required</sup> <a name="layer_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount"></a>

```python
layer_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `layers_size_in_bytes`<sup>Required</sup> <a name="layers_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes"></a>

```python
layers_size_in_bytes: str
```

- *Type:* str

---

##### `remaining_items_count`<sup>Required</sup> <a name="remaining_items_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount"></a>

```python
remaining_items_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_count`<sup>Required</sup> <a name="repository_count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount"></a>

```python
repository_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciArtifactsContainerRepositoriesContainerRepositoryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a>

---


### DataOciArtifactsContainerRepositoriesFilterList <a name="DataOciArtifactsContainerRepositoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciArtifactsContainerRepositoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciArtifactsContainerRepositoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]]

---


### DataOciArtifactsContainerRepositoriesFilterOutputReference <a name="DataOciArtifactsContainerRepositoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_container_repositories

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciArtifactsContainerRepositoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>]

---



