# `dataOciCoreVolumeBackupPolicies` Submodule <a name="`dataOciCoreVolumeBackupPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeBackupPolicies <a name="DataOciCoreVolumeBackupPolicies" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies oci_core_volume_backup_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#compartment_id DataOciCoreVolumeBackupPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#id DataOciCoreVolumeBackupPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#compartment_id DataOciCoreVolumeBackupPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#filter DataOciCoreVolumeBackupPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#id DataOciCoreVolumeBackupPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVolumeBackupPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVolumeBackupPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeBackupPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList">DataOciCoreVolumeBackupPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.volumeBackupPolicies">volume_backup_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.filter"></a>

```python
filter: DataOciCoreVolumeBackupPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList">DataOciCoreVolumeBackupPoliciesFilterList</a>

---

##### `volume_backup_policies`<sup>Required</sup> <a name="volume_backup_policies" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.volumeBackupPolicies"></a>

```python
volume_backup_policies: DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeBackupPoliciesConfig <a name="DataOciCoreVolumeBackupPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#compartment_id DataOciCoreVolumeBackupPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#id DataOciCoreVolumeBackupPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#compartment_id DataOciCoreVolumeBackupPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#filter DataOciCoreVolumeBackupPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#id DataOciCoreVolumeBackupPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVolumeBackupPoliciesFilter <a name="DataOciCoreVolumeBackupPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#name DataOciCoreVolumeBackupPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#values DataOciCoreVolumeBackupPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#regex DataOciCoreVolumeBackupPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#name DataOciCoreVolumeBackupPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#values DataOciCoreVolumeBackupPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policies#regex DataOciCoreVolumeBackupPolicies#regex}.

---

### DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies()
```


### DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeBackupPoliciesFilterList <a name="DataOciCoreVolumeBackupPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeBackupPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeBackupPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]]

---


### DataOciCoreVolumeBackupPoliciesFilterOutputReference <a name="DataOciCoreVolumeBackupPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVolumeBackupPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesFilter">DataOciCoreVolumeBackupPoliciesFilter</a>]

---


### DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies">DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.schedules"></a>

```python
schedules: DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies">DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies</a>

---


### DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference <a name="DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_backup_policies

dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.month">month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.offsetType">offset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.retentionSeconds">retention_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.month"></a>

```python
month: str
```

- *Type:* str

---

##### `offset_seconds`<sup>Required</sup> <a name="offset_seconds" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_type`<sup>Required</sup> <a name="offset_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.offsetType"></a>

```python
offset_type: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `retention_seconds`<sup>Required</sup> <a name="retention_seconds" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.retentionSeconds"></a>

```python
retention_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicies.DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules">DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules</a>

---



