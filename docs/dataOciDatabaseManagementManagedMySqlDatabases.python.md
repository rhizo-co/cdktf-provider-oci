# `dataOciDatabaseManagementManagedMySqlDatabases` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabases <a name="DataOciDatabaseManagementManagedMySqlDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases oci_database_management_managed_my_sql_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#filter DataOciDatabaseManagementManagedMySqlDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedMySqlDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList">DataOciDatabaseManagementManagedMySqlDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.managedMySqlDatabaseCollection">managed_my_sql_database_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedMySqlDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList">DataOciDatabaseManagementManagedMySqlDatabasesFilterList</a>

---

##### `managed_my_sql_database_collection`<sup>Required</sup> <a name="managed_my_sql_database_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.managedMySqlDatabaseCollection"></a>

```python
managed_my_sql_database_collection: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabasesConfig <a name="DataOciDatabaseManagementManagedMySqlDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#filter DataOciDatabaseManagementManagedMySqlDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabasesFilter <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#name DataOciDatabaseManagementManagedMySqlDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#values DataOciDatabaseManagementManagedMySqlDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#regex DataOciDatabaseManagementManagedMySqlDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#name DataOciDatabaseManagementManagedMySqlDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#values DataOciDatabaseManagementManagedMySqlDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#regex DataOciDatabaseManagementManagedMySqlDatabases#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection()
```


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems()
```


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabasesFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]]

---


### DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedMySqlDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter">DataOciDatabaseManagementManagedMySqlDatabasesFilter</a>]

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes</a>

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveClusterDisplayName">heat_wave_cluster_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveMemorySize">heat_wave_memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodes">heat_wave_nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodeShape">heat_wave_node_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveActive">is_heat_wave_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveEnabled">is_heat_wave_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isLakehouseEnabled">is_lakehouse_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreatedHeatWave">time_created_heat_wave</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `heat_wave_cluster_display_name`<sup>Required</sup> <a name="heat_wave_cluster_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveClusterDisplayName"></a>

```python
heat_wave_cluster_display_name: str
```

- *Type:* str

---

##### `heat_wave_memory_size`<sup>Required</sup> <a name="heat_wave_memory_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveMemorySize"></a>

```python
heat_wave_memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `heat_wave_nodes`<sup>Required</sup> <a name="heat_wave_nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodes"></a>

```python
heat_wave_nodes: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList</a>

---

##### `heat_wave_node_shape`<sup>Required</sup> <a name="heat_wave_node_shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodeShape"></a>

```python
heat_wave_node_shape: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_heat_wave_active`<sup>Required</sup> <a name="is_heat_wave_active" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveActive"></a>

```python
is_heat_wave_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_heat_wave_enabled`<sup>Required</sup> <a name="is_heat_wave_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveEnabled"></a>

```python
is_heat_wave_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lakehouse_enabled`<sup>Required</sup> <a name="is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isLakehouseEnabled"></a>

```python
is_lakehouse_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_created_heat_wave`<sup>Required</sup> <a name="time_created_heat_wave" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreatedHeatWave"></a>

```python
time_created_heat_wave: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_databases

dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection</a>

---



