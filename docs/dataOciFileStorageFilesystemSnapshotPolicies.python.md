# `dataOciFileStorageFilesystemSnapshotPolicies` Submodule <a name="`dataOciFileStorageFilesystemSnapshotPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFilesystemSnapshotPolicies <a name="DataOciFileStorageFilesystemSnapshotPolicies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies oci_file_storage_filesystem_snapshot_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies(
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
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#filter DataOciFileStorageFilesystemSnapshotPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFileStorageFilesystemSnapshotPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filesystemSnapshotPolicies">filesystem_snapshot_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList">DataOciFileStorageFilesystemSnapshotPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filesystem_snapshot_policies`<sup>Required</sup> <a name="filesystem_snapshot_policies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filesystemSnapshotPolicies"></a>

```python
filesystem_snapshot_policies: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filter"></a>

```python
filter: DataOciFileStorageFilesystemSnapshotPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList">DataOciFileStorageFilesystemSnapshotPoliciesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFilesystemSnapshotPoliciesConfig <a name="DataOciFileStorageFilesystemSnapshotPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#filter DataOciFileStorageFilesystemSnapshotPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}.

---

### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies()
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks()
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules()
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilter <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#name DataOciFileStorageFilesystemSnapshotPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#values DataOciFileStorageFilesystemSnapshotPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#regex DataOciFileStorageFilesystemSnapshotPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#name DataOciFileStorageFilesystemSnapshotPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#values DataOciFileStorageFilesystemSnapshotPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#regex DataOciFileStorageFilesystemSnapshotPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.policyPrefix">policy_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.locks"></a>

```python
locks: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList</a>

---

##### `policy_prefix`<sup>Required</sup> <a name="policy_prefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.policyPrefix"></a>

```python
policy_prefix: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.schedules"></a>

```python
schedules: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.month">month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.retentionDurationInSeconds">retention_duration_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.schedulePrefix">schedule_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.month"></a>

```python
month: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `retention_duration_in_seconds`<sup>Required</sup> <a name="retention_duration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.retentionDurationInSeconds"></a>

```python
retention_duration_in_seconds: str
```

- *Type:* str

---

##### `schedule_prefix`<sup>Required</sup> <a name="schedule_prefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.schedulePrefix"></a>

```python
schedule_prefix: str
```

- *Type:* str

---

##### `time_schedule_start`<sup>Required</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilterList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFileStorageFilesystemSnapshotPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]]

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policies

dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFileStorageFilesystemSnapshotPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter">DataOciFileStorageFilesystemSnapshotPoliciesFilter</a>]

---



