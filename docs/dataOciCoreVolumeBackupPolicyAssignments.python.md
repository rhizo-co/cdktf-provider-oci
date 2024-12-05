# `dataOciCoreVolumeBackupPolicyAssignments` Submodule <a name="`dataOciCoreVolumeBackupPolicyAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments oci_core_volume_backup_policy_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.assetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#filter DataOciCoreVolumeBackupPolicyAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVolumeBackupPolicyAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVolumeBackupPolicyAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeBackupPolicyAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments">volume_backup_policy_assignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter"></a>

```python
filter: DataOciCoreVolumeBackupPolicyAssignmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a>

---

##### `volume_backup_policy_assignments`<sup>Required</sup> <a name="volume_backup_policy_assignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments"></a>

```python
volume_backup_policy_assignments: DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsConfig <a name="DataOciCoreVolumeBackupPolicyAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#filter DataOciCoreVolumeBackupPolicyAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVolumeBackupPolicyAssignmentsFilter <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}.

---

### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsFilterList <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPolicyAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]]

---


### DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVolumeBackupPolicyAssignmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>]

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policy_assignments

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `xrc_kms_key_id`<sup>Required</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a>

---



