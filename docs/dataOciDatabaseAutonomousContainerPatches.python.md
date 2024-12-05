# `dataOciDatabaseAutonomousContainerPatches` Submodule <a name="`dataOciDatabaseAutonomousContainerPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerPatches <a name="DataOciDatabaseAutonomousContainerPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches oci_database_autonomous_container_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  compartment_id: str,
  autonomous_patch_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_container_database_id DataOciDatabaseAutonomousContainerPatches#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#compartment_id DataOciDatabaseAutonomousContainerPatches#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.autonomousPatchType">autonomous_patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_patch_type DataOciDatabaseAutonomousContainerPatches#autonomous_patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#id DataOciDatabaseAutonomousContainerPatches#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_container_database_id DataOciDatabaseAutonomousContainerPatches#autonomous_container_database_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#compartment_id DataOciDatabaseAutonomousContainerPatches#compartment_id}.

---

##### `autonomous_patch_type`<sup>Optional</sup> <a name="autonomous_patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.autonomousPatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_patch_type DataOciDatabaseAutonomousContainerPatches#autonomous_patch_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#filter DataOciDatabaseAutonomousContainerPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#id DataOciDatabaseAutonomousContainerPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetAutonomousPatchType">reset_autonomous_patch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]

---

##### `reset_autonomous_patch_type` <a name="reset_autonomous_patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetAutonomousPatchType"></a>

```python
def reset_autonomous_patch_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerPatches resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerPatches to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousContainerPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatches">autonomous_patches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList">DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList">DataOciDatabaseAutonomousContainerPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatchTypeInput">autonomous_patch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatchType">autonomous_patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_patches`<sup>Required</sup> <a name="autonomous_patches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatches"></a>

```python
autonomous_patches: DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList">DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousContainerPatchesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList">DataOciDatabaseAutonomousContainerPatchesFilterList</a>

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `autonomous_patch_type_input`<sup>Optional</sup> <a name="autonomous_patch_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatchTypeInput"></a>

```python
autonomous_patch_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `autonomous_patch_type`<sup>Required</sup> <a name="autonomous_patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.autonomousPatchType"></a>

```python
autonomous_patch_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatches.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerPatchesAutonomousPatches <a name="DataOciDatabaseAutonomousContainerPatchesAutonomousPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatches()
```


### DataOciDatabaseAutonomousContainerPatchesConfig <a name="DataOciDatabaseAutonomousContainerPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  compartment_id: str,
  autonomous_patch_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_container_database_id DataOciDatabaseAutonomousContainerPatches#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#compartment_id DataOciDatabaseAutonomousContainerPatches#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.autonomousPatchType">autonomous_patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_patch_type DataOciDatabaseAutonomousContainerPatches#autonomous_patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#id DataOciDatabaseAutonomousContainerPatches#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_container_database_id DataOciDatabaseAutonomousContainerPatches#autonomous_container_database_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#compartment_id DataOciDatabaseAutonomousContainerPatches#compartment_id}.

---

##### `autonomous_patch_type`<sup>Optional</sup> <a name="autonomous_patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.autonomousPatchType"></a>

```python
autonomous_patch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#autonomous_patch_type DataOciDatabaseAutonomousContainerPatches#autonomous_patch_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#filter DataOciDatabaseAutonomousContainerPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#id DataOciDatabaseAutonomousContainerPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerPatchesFilter <a name="DataOciDatabaseAutonomousContainerPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#name DataOciDatabaseAutonomousContainerPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#values DataOciDatabaseAutonomousContainerPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#regex DataOciDatabaseAutonomousContainerPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#name DataOciDatabaseAutonomousContainerPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#values DataOciDatabaseAutonomousContainerPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_patches#regex DataOciDatabaseAutonomousContainerPatches#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList <a name="DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference <a name="DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.autonomousPatchType">autonomous_patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.patchModel">patch_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.quarter">quarter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.timeReleased">time_released</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.year">year</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatches">DataOciDatabaseAutonomousContainerPatchesAutonomousPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_patch_type`<sup>Required</sup> <a name="autonomous_patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.autonomousPatchType"></a>

```python
autonomous_patch_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `patch_model`<sup>Required</sup> <a name="patch_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.patchModel"></a>

```python
patch_model: str
```

- *Type:* str

---

##### `quarter`<sup>Required</sup> <a name="quarter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.quarter"></a>

```python
quarter: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_released`<sup>Required</sup> <a name="time_released" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.timeReleased"></a>

```python
time_released: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `year`<sup>Required</sup> <a name="year" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.year"></a>

```python
year: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerPatchesAutonomousPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesAutonomousPatches">DataOciDatabaseAutonomousContainerPatchesAutonomousPatches</a>

---


### DataOciDatabaseAutonomousContainerPatchesFilterList <a name="DataOciDatabaseAutonomousContainerPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]]

---


### DataOciDatabaseAutonomousContainerPatchesFilterOutputReference <a name="DataOciDatabaseAutonomousContainerPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_patches

dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousContainerPatchesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerPatches.DataOciDatabaseAutonomousContainerPatchesFilter">DataOciDatabaseAutonomousContainerPatchesFilter</a>]

---



