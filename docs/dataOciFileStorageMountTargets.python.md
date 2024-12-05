# `dataOciFileStorageMountTargets` Submodule <a name="`dataOciFileStorageMountTargets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageMountTargets <a name="DataOciFileStorageMountTargets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets oci_file_storage_mount_targets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets(
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
  export_set_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.exportSetId">export_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}.

---

##### `export_set_id`<sup>Optional</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.exportSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#filter DataOciFileStorageMountTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetExportSetId">reset_export_set_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_export_set_id` <a name="reset_export_set_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetExportSetId"></a>

```python
def reset_export_set_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFileStorageMountTargets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFileStorageMountTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFileStorageMountTargets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFileStorageMountTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageMountTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList">DataOciFileStorageMountTargetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.mountTargets">mount_targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList">DataOciFileStorageMountTargetsMountTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetIdInput">export_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetId">export_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filter"></a>

```python
filter: DataOciFileStorageMountTargetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList">DataOciFileStorageMountTargetsFilterList</a>

---

##### `mount_targets`<sup>Required</sup> <a name="mount_targets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.mountTargets"></a>

```python
mount_targets: DataOciFileStorageMountTargetsMountTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList">DataOciFileStorageMountTargetsMountTargetsList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `export_set_id_input`<sup>Optional</sup> <a name="export_set_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetIdInput"></a>

```python
export_set_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageMountTargetsConfig <a name="DataOciFileStorageMountTargetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig(
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
  export_set_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.exportSetId">export_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}.

---

##### `export_set_id`<sup>Optional</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#filter DataOciFileStorageMountTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}.

---

### DataOciFileStorageMountTargetsFilter <a name="DataOciFileStorageMountTargetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#name DataOciFileStorageMountTargets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#values DataOciFileStorageMountTargets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#regex DataOciFileStorageMountTargets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#name DataOciFileStorageMountTargets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#values DataOciFileStorageMountTargets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#regex DataOciFileStorageMountTargets#regex}.

---

### DataOciFileStorageMountTargetsMountTargets <a name="DataOciFileStorageMountTargetsMountTargets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets()
```


### DataOciFileStorageMountTargetsMountTargetsKerberos <a name="DataOciFileStorageMountTargetsMountTargetsKerberos" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos()
```


### DataOciFileStorageMountTargetsMountTargetsLdapIdmap <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmap" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap()
```


### DataOciFileStorageMountTargetsMountTargetsLocks <a name="DataOciFileStorageMountTargetsMountTargetsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageMountTargetsFilterList <a name="DataOciFileStorageMountTargetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageMountTargetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFileStorageMountTargetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]]

---


### DataOciFileStorageMountTargetsFilterOutputReference <a name="DataOciFileStorageMountTargetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFileStorageMountTargetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>]

---


### DataOciFileStorageMountTargetsMountTargetsKerberosList <a name="DataOciFileStorageMountTargetsMountTargetsKerberosList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.backupKeyTabSecretVersion">backup_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.currentKeyTabSecretVersion">current_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.isKerberosEnabled">is_kerberos_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.kerberosRealm">kerberos_realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.keyTabSecretId">key_tab_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos">DataOciFileStorageMountTargetsMountTargetsKerberos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_key_tab_secret_version`<sup>Required</sup> <a name="backup_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```python
backup_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_key_tab_secret_version`<sup>Required</sup> <a name="current_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```python
current_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_kerberos_enabled`<sup>Required</sup> <a name="is_kerberos_enabled" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.isKerberosEnabled"></a>

```python
is_kerberos_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kerberos_realm`<sup>Required</sup> <a name="kerberos_realm" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.kerberosRealm"></a>

```python
kerberos_realm: str
```

- *Type:* str

---

##### `key_tab_secret_id`<sup>Required</sup> <a name="key_tab_secret_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.keyTabSecretId"></a>

```python
key_tab_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageMountTargetsMountTargetsKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos">DataOciFileStorageMountTargetsMountTargetsKerberos</a>

---


### DataOciFileStorageMountTargetsMountTargetsLdapIdmapList <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmapList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheLifetimeSeconds">cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">cache_refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.groupSearchBase">group_search_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">negative_cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector1Id">outbound_connector1_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector2Id">outbound_connector2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.userSearchBase">user_search_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap">DataOciFileStorageMountTargetsMountTargetsLdapIdmap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_lifetime_seconds`<sup>Required</sup> <a name="cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```python
cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_refresh_interval_seconds`<sup>Required</sup> <a name="cache_refresh_interval_seconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```python
cache_refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_search_base`<sup>Required</sup> <a name="group_search_base" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.groupSearchBase"></a>

```python
group_search_base: str
```

- *Type:* str

---

##### `negative_cache_lifetime_seconds`<sup>Required</sup> <a name="negative_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```python
negative_cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outbound_connector1_id`<sup>Required</sup> <a name="outbound_connector1_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```python
outbound_connector1_id: str
```

- *Type:* str

---

##### `outbound_connector2_id`<sup>Required</sup> <a name="outbound_connector2_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```python
outbound_connector2_id: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `user_search_base`<sup>Required</sup> <a name="user_search_base" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.userSearchBase"></a>

```python
user_search_base: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageMountTargetsMountTargetsLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap">DataOciFileStorageMountTargetsMountTargetsLdapIdmap</a>

---


### DataOciFileStorageMountTargetsMountTargetsList <a name="DataOciFileStorageMountTargetsMountTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageMountTargetsMountTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageMountTargetsMountTargetsLocksList <a name="DataOciFileStorageMountTargetsMountTargetsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageMountTargetsMountTargetsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageMountTargetsMountTargetsLocksOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks">DataOciFileStorageMountTargetsMountTargetsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageMountTargetsMountTargetsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks">DataOciFileStorageMountTargetsMountTargetsLocks</a>

---


### DataOciFileStorageMountTargetsMountTargetsOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_mount_targets

dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.exportSetId">export_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.idmapType">idmap_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList">DataOciFileStorageMountTargetsMountTargetsKerberosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ldapIdmap">ldap_idmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList">DataOciFileStorageMountTargetsMountTargetsLdapIdmapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList">DataOciFileStorageMountTargetsMountTargetsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.observedThroughput">observed_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.privateIpIds">private_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.requestedThroughput">requested_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.reservedStorageCapacity">reserved_storage_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeBillingCycleEnd">time_billing_cycle_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets">DataOciFileStorageMountTargetsMountTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idmap_type`<sup>Required</sup> <a name="idmap_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.idmapType"></a>

```python
idmap_type: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kerberos`<sup>Required</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.kerberos"></a>

```python
kerberos: DataOciFileStorageMountTargetsMountTargetsKerberosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList">DataOciFileStorageMountTargetsMountTargetsKerberosList</a>

---

##### `ldap_idmap`<sup>Required</sup> <a name="ldap_idmap" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ldapIdmap"></a>

```python
ldap_idmap: DataOciFileStorageMountTargetsMountTargetsLdapIdmapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList">DataOciFileStorageMountTargetsMountTargetsLdapIdmapList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.locks"></a>

```python
locks: DataOciFileStorageMountTargetsMountTargetsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList">DataOciFileStorageMountTargetsMountTargetsLocksList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `observed_throughput`<sup>Required</sup> <a name="observed_throughput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.observedThroughput"></a>

```python
observed_throughput: str
```

- *Type:* str

---

##### `private_ip_ids`<sup>Required</sup> <a name="private_ip_ids" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.privateIpIds"></a>

```python
private_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_throughput`<sup>Required</sup> <a name="requested_throughput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.requestedThroughput"></a>

```python
requested_throughput: str
```

- *Type:* str

---

##### `reserved_storage_capacity`<sup>Required</sup> <a name="reserved_storage_capacity" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.reservedStorageCapacity"></a>

```python
reserved_storage_capacity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_billing_cycle_end`<sup>Required</sup> <a name="time_billing_cycle_end" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeBillingCycleEnd"></a>

```python
time_billing_cycle_end: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageMountTargetsMountTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets">DataOciFileStorageMountTargetsMountTargets</a>

---



