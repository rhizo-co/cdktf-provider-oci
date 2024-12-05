# `dataOciDatabaseExascaleDbStorageVaults` Submodule <a name="`dataOciDatabaseExascaleDbStorageVaults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVaults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">exascale_db_storage_vaults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `exascale_db_storage_vaults`<sup>Required</sup> <a name="exascale_db_storage_vaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```python
exascale_db_storage_vaults: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter"></a>

```python
filter: DataOciDatabaseExascaleDbStorageVaultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExascaleDbStorageVaultsConfig <a name="DataOciDatabaseExascaleDbStorageVaultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults()
```


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage()
```


### DataOciDatabaseExascaleDbStorageVaultsFilter <a name="DataOciDatabaseExascaleDbStorageVaultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">available_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_in_gbs`<sup>Required</sup> <a name="available_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```python
available_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gbs`<sup>Required</sup> <a name="total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```python
total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a>

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent">additional_flash_cache_in_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount">vm_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds">vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_flash_cache_in_percent`<sup>Required</sup> <a name="additional_flash_cache_in_percent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent"></a>

```python
additional_flash_cache_in_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vm_cluster_count`<sup>Required</sup> <a name="vm_cluster_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount"></a>

```python
vm_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_ids`<sup>Required</sup> <a name="vm_cluster_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds"></a>

```python
vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataOciDatabaseExascaleDbStorageVaultsFilterList <a name="DataOciDatabaseExascaleDbStorageVaultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseExascaleDbStorageVaultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]]

---


### DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exascale_db_storage_vaults

dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseExascaleDbStorageVaultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>]

---



