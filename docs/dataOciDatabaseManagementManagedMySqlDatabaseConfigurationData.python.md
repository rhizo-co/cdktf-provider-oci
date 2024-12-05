# `dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data oci_database_management_managed_my_sql_database_configuration_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_my_sql_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.managedMySqlDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#filter DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection">my_sql_configuration_data_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput">managed_my_sql_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a>

---

##### `my_sql_configuration_data_collection`<sup>Required</sup> <a name="my_sql_configuration_data_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection"></a>

```python
my_sql_configuration_data_collection: DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_my_sql_database_id_input`<sup>Optional</sup> <a name="managed_my_sql_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput"></a>

```python
managed_my_sql_database_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId"></a>

```python
managed_my_sql_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_my_sql_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId"></a>

```python
managed_my_sql_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#filter DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection()
```


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]]

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter</a>]

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet">host_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable">is_configurable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic">is_dynamic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit">is_init</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues">possible_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions">supported_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet">time_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet">user_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `host_set`<sup>Required</sup> <a name="host_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet"></a>

```python
host_set: str
```

- *Type:* str

---

##### `is_configurable`<sup>Required</sup> <a name="is_configurable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable"></a>

```python
is_configurable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dynamic`<sup>Required</sup> <a name="is_dynamic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic"></a>

```python
is_dynamic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_init`<sup>Required</sup> <a name="is_init" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit"></a>

```python
is_init: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues"></a>

```python
possible_values: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `supported_versions`<sup>Required</sup> <a name="supported_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions"></a>

```python
supported_versions: str
```

- *Type:* str

---

##### `time_set`<sup>Required</sup> <a name="time_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet"></a>

```python
time_set: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_set`<sup>Required</sup> <a name="user_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet"></a>

```python
user_set: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_configuration_data

dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a>

---



