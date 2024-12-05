# `dataOciFileStorageFileSystems` Submodule <a name="`dataOciFileStorageFileSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFileSystems <a name="DataOciFileStorageFileSystems" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems oci_file_storage_file_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystems(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  display_name: str = None,
  filesystem_snapshot_policy_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]] = None,
  id: str = None,
  parent_file_system_id: str = None,
  source_snapshot_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#availability_domain DataOciFileStorageFileSystems#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#compartment_id DataOciFileStorageFileSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#display_name DataOciFileStorageFileSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filesystem_snapshot_policy_id DataOciFileStorageFileSystems#filesystem_snapshot_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#id DataOciFileStorageFileSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.parentFileSystemId">parent_file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#parent_file_system_id DataOciFileStorageFileSystems#parent_file_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#source_snapshot_id DataOciFileStorageFileSystems#source_snapshot_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#state DataOciFileStorageFileSystems#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#availability_domain DataOciFileStorageFileSystems#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#compartment_id DataOciFileStorageFileSystems#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#display_name DataOciFileStorageFileSystems#display_name}.

---

##### `filesystem_snapshot_policy_id`<sup>Optional</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.filesystemSnapshotPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filesystem_snapshot_policy_id DataOciFileStorageFileSystems#filesystem_snapshot_policy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filter DataOciFileStorageFileSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#id DataOciFileStorageFileSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_file_system_id`<sup>Optional</sup> <a name="parent_file_system_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.parentFileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#parent_file_system_id DataOciFileStorageFileSystems#parent_file_system_id}.

---

##### `source_snapshot_id`<sup>Optional</sup> <a name="source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.sourceSnapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#source_snapshot_id DataOciFileStorageFileSystems#source_snapshot_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#state DataOciFileStorageFileSystems#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetFilesystemSnapshotPolicyId">reset_filesystem_snapshot_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetParentFileSystemId">reset_parent_file_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetSourceSnapshotId">reset_source_snapshot_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filesystem_snapshot_policy_id` <a name="reset_filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetFilesystemSnapshotPolicyId"></a>

```python
def reset_filesystem_snapshot_policy_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_file_system_id` <a name="reset_parent_file_system_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetParentFileSystemId"></a>

```python
def reset_parent_file_system_id() -> None
```

##### `reset_source_snapshot_id` <a name="reset_source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetSourceSnapshotId"></a>

```python
def reset_source_snapshot_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFileStorageFileSystems resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFileStorageFileSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFileStorageFileSystems to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFileStorageFileSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFileSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.fileSystems">file_systems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList">DataOciFileStorageFileSystemsFileSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList">DataOciFileStorageFileSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filesystemSnapshotPolicyIdInput">filesystem_snapshot_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.parentFileSystemIdInput">parent_file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.sourceSnapshotIdInput">source_snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.parentFileSystemId">parent_file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `file_systems`<sup>Required</sup> <a name="file_systems" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.fileSystems"></a>

```python
file_systems: DataOciFileStorageFileSystemsFileSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList">DataOciFileStorageFileSystemsFileSystemsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filter"></a>

```python
filter: DataOciFileStorageFileSystemsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList">DataOciFileStorageFileSystemsFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filesystem_snapshot_policy_id_input`<sup>Optional</sup> <a name="filesystem_snapshot_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filesystemSnapshotPolicyIdInput"></a>

```python
filesystem_snapshot_policy_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_file_system_id_input`<sup>Optional</sup> <a name="parent_file_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.parentFileSystemIdInput"></a>

```python
parent_file_system_id_input: str
```

- *Type:* str

---

##### `source_snapshot_id_input`<sup>Optional</sup> <a name="source_snapshot_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.sourceSnapshotIdInput"></a>

```python
source_snapshot_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `filesystem_snapshot_policy_id`<sup>Required</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.filesystemSnapshotPolicyId"></a>

```python
filesystem_snapshot_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_file_system_id`<sup>Required</sup> <a name="parent_file_system_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.parentFileSystemId"></a>

```python
parent_file_system_id: str
```

- *Type:* str

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystems.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFileSystemsConfig <a name="DataOciFileStorageFileSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  display_name: str = None,
  filesystem_snapshot_policy_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]] = None,
  id: str = None,
  parent_file_system_id: str = None,
  source_snapshot_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#availability_domain DataOciFileStorageFileSystems#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#compartment_id DataOciFileStorageFileSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#display_name DataOciFileStorageFileSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filesystem_snapshot_policy_id DataOciFileStorageFileSystems#filesystem_snapshot_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#id DataOciFileStorageFileSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.parentFileSystemId">parent_file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#parent_file_system_id DataOciFileStorageFileSystems#parent_file_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#source_snapshot_id DataOciFileStorageFileSystems#source_snapshot_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#state DataOciFileStorageFileSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#availability_domain DataOciFileStorageFileSystems#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#compartment_id DataOciFileStorageFileSystems#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#display_name DataOciFileStorageFileSystems#display_name}.

---

##### `filesystem_snapshot_policy_id`<sup>Optional</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.filesystemSnapshotPolicyId"></a>

```python
filesystem_snapshot_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filesystem_snapshot_policy_id DataOciFileStorageFileSystems#filesystem_snapshot_policy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#filter DataOciFileStorageFileSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#id DataOciFileStorageFileSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_file_system_id`<sup>Optional</sup> <a name="parent_file_system_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.parentFileSystemId"></a>

```python
parent_file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#parent_file_system_id DataOciFileStorageFileSystems#parent_file_system_id}.

---

##### `source_snapshot_id`<sup>Optional</sup> <a name="source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#source_snapshot_id DataOciFileStorageFileSystems#source_snapshot_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#state DataOciFileStorageFileSystems#state}.

---

### DataOciFileStorageFileSystemsFileSystems <a name="DataOciFileStorageFileSystemsFileSystems" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystems()
```


### DataOciFileStorageFileSystemsFileSystemsLocks <a name="DataOciFileStorageFileSystemsFileSystemsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocks()
```


### DataOciFileStorageFileSystemsFileSystemsSourceDetails <a name="DataOciFileStorageFileSystemsFileSystemsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetails()
```


### DataOciFileStorageFileSystemsFilter <a name="DataOciFileStorageFileSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#name DataOciFileStorageFileSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#values DataOciFileStorageFileSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#regex DataOciFileStorageFileSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#name DataOciFileStorageFileSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#values DataOciFileStorageFileSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_file_systems#regex DataOciFileStorageFileSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFileSystemsFileSystemsList <a name="DataOciFileStorageFileSystemsFileSystemsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFileSystemsFileSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFileSystemsFileSystemsLocksList <a name="DataOciFileStorageFileSystemsFileSystemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFileSystemsFileSystemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFileSystemsFileSystemsLocksOutputReference <a name="DataOciFileStorageFileSystemsFileSystemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocks">DataOciFileStorageFileSystemsFileSystemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFileSystemsFileSystemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocks">DataOciFileStorageFileSystemsFileSystemsLocks</a>

---


### DataOciFileStorageFileSystemsFileSystemsOutputReference <a name="DataOciFileStorageFileSystemsFileSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.cloneAttachStatus">clone_attach_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.cloneCount">clone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.detachCloneTrigger">detach_clone_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isCloneParent">is_clone_parent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isHydrated">is_hydrated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isTargetable">is_targetable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList">DataOciFileStorageFileSystemsFileSystemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.meteredBytes">metered_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.replicationTargetId">replication_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList">DataOciFileStorageFileSystemsFileSystemsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystems">DataOciFileStorageFileSystemsFileSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `clone_attach_status`<sup>Required</sup> <a name="clone_attach_status" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.cloneAttachStatus"></a>

```python
clone_attach_status: str
```

- *Type:* str

---

##### `clone_count`<sup>Required</sup> <a name="clone_count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.cloneCount"></a>

```python
clone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `detach_clone_trigger`<sup>Required</sup> <a name="detach_clone_trigger" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.detachCloneTrigger"></a>

```python
detach_clone_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `filesystem_snapshot_policy_id`<sup>Required</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.filesystemSnapshotPolicyId"></a>

```python
filesystem_snapshot_policy_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_clone_parent`<sup>Required</sup> <a name="is_clone_parent" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isCloneParent"></a>

```python
is_clone_parent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hydrated`<sup>Required</sup> <a name="is_hydrated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isHydrated"></a>

```python
is_hydrated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_targetable`<sup>Required</sup> <a name="is_targetable" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.isTargetable"></a>

```python
is_targetable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.locks"></a>

```python
locks: DataOciFileStorageFileSystemsFileSystemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsLocksList">DataOciFileStorageFileSystemsFileSystemsLocksList</a>

---

##### `metered_bytes`<sup>Required</sup> <a name="metered_bytes" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.meteredBytes"></a>

```python
metered_bytes: str
```

- *Type:* str

---

##### `replication_target_id`<sup>Required</sup> <a name="replication_target_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.replicationTargetId"></a>

```python
replication_target_id: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.sourceDetails"></a>

```python
source_details: DataOciFileStorageFileSystemsFileSystemsSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList">DataOciFileStorageFileSystemsFileSystemsSourceDetailsList</a>

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFileSystemsFileSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystems">DataOciFileStorageFileSystemsFileSystems</a>

---


### DataOciFileStorageFileSystemsFileSystemsSourceDetailsList <a name="DataOciFileStorageFileSystemsFileSystemsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference <a name="DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.parentFileSystemId">parent_file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetails">DataOciFileStorageFileSystemsFileSystemsSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parent_file_system_id`<sup>Required</sup> <a name="parent_file_system_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.parentFileSystemId"></a>

```python
parent_file_system_id: str
```

- *Type:* str

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFileSystemsFileSystemsSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFileSystemsSourceDetails">DataOciFileStorageFileSystemsFileSystemsSourceDetails</a>

---


### DataOciFileStorageFileSystemsFilterList <a name="DataOciFileStorageFileSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFileSystemsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFileStorageFileSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]]

---


### DataOciFileStorageFileSystemsFilterOutputReference <a name="DataOciFileStorageFileSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_file_systems

dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFileStorageFileSystemsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFileSystems.DataOciFileStorageFileSystemsFilter">DataOciFileStorageFileSystemsFilter</a>]

---



