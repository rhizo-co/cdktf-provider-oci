# `dataOciDatabaseManagementExternalDatabases` Submodule <a name="`dataOciDatabaseManagementExternalDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDatabases <a name="DataOciDatabaseManagementExternalDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases oci_database_management_external_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases(
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
  display_name: str = None,
  external_database_id: str = None,
  external_db_system_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#compartment_id DataOciDatabaseManagementExternalDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#display_name DataOciDatabaseManagementExternalDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.externalDatabaseId">external_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_database_id DataOciDatabaseManagementExternalDatabases#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_db_system_id DataOciDatabaseManagementExternalDatabases#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#id DataOciDatabaseManagementExternalDatabases#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#compartment_id DataOciDatabaseManagementExternalDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#display_name DataOciDatabaseManagementExternalDatabases#display_name}.

---

##### `external_database_id`<sup>Optional</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.externalDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_database_id DataOciDatabaseManagementExternalDatabases#external_database_id}.

---

##### `external_db_system_id`<sup>Optional</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.externalDbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_db_system_id DataOciDatabaseManagementExternalDatabases#external_db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#filter DataOciDatabaseManagementExternalDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#id DataOciDatabaseManagementExternalDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetExternalDatabaseId">reset_external_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetExternalDbSystemId">reset_external_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_database_id` <a name="reset_external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetExternalDatabaseId"></a>

```python
def reset_external_database_id() -> None
```

##### `reset_external_db_system_id` <a name="reset_external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetExternalDbSystemId"></a>

```python
def reset_external_db_system_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseCollection">external_database_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList">DataOciDatabaseManagementExternalDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseIdInput">external_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDbSystemIdInput">external_db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseId">external_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_database_collection`<sup>Required</sup> <a name="external_database_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseCollection"></a>

```python
external_database_collection: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList">DataOciDatabaseManagementExternalDatabasesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_database_id_input`<sup>Optional</sup> <a name="external_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseIdInput"></a>

```python
external_database_id_input: str
```

- *Type:* str

---

##### `external_db_system_id_input`<sup>Optional</sup> <a name="external_db_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDbSystemIdInput"></a>

```python
external_db_system_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_database_id`<sup>Required</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDatabaseId"></a>

```python
external_database_id: str
```

- *Type:* str

---

##### `external_db_system_id`<sup>Required</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDatabasesConfig <a name="DataOciDatabaseManagementExternalDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  external_database_id: str = None,
  external_db_system_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#compartment_id DataOciDatabaseManagementExternalDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#display_name DataOciDatabaseManagementExternalDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.externalDatabaseId">external_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_database_id DataOciDatabaseManagementExternalDatabases#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_db_system_id DataOciDatabaseManagementExternalDatabases#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#id DataOciDatabaseManagementExternalDatabases#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#compartment_id DataOciDatabaseManagementExternalDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#display_name DataOciDatabaseManagementExternalDatabases#display_name}.

---

##### `external_database_id`<sup>Optional</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.externalDatabaseId"></a>

```python
external_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_database_id DataOciDatabaseManagementExternalDatabases#external_database_id}.

---

##### `external_db_system_id`<sup>Optional</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#external_db_system_id DataOciDatabaseManagementExternalDatabases#external_db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#filter DataOciDatabaseManagementExternalDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#id DataOciDatabaseManagementExternalDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo()
```


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails()
```


### DataOciDatabaseManagementExternalDatabasesFilter <a name="DataOciDatabaseManagementExternalDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#name DataOciDatabaseManagementExternalDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#values DataOciDatabaseManagementExternalDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#regex DataOciDatabaseManagementExternalDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#name DataOciDatabaseManagementExternalDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#values DataOciDatabaseManagementExternalDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_databases#regex DataOciDatabaseManagementExternalDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfig</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `database_connector_id`<sup>Required</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_credentials`<sup>Required</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```python
connection_credentials: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```python
connection_string: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails">database_connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.featureStatus">feature_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_details`<sup>Required</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.connectorDetails"></a>

```python
connector_details: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList</a>

---

##### `database_connection_details`<sup>Required</sup> <a name="database_connection_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails"></a>

```python
database_connection_details: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a>

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `feature_status`<sup>Required</sup> <a name="feature_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.featureStatus"></a>

```python
feature_status: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigs</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfo</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.exadataInfraInfo">exadata_infra_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infra_info`<sup>Required</sup> <a name="exadata_infra_info" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.exadataInfraInfo"></a>

```python
exadata_infra_info: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoExadataInfraInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfo</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.instanceNumber">instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `instance_number`<sup>Required</sup> <a name="instance_number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.instanceNumber"></a>

```python
instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetails</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databasePlatformName">database_platform_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseSubType">database_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbManagementConfig">db_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbmgmtFeatureConfigs">dbmgmt_feature_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbSystemInfo">db_system_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.externalContainerDatabaseId">external_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.externalDbHomeId">external_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.instanceDetails">instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_platform_name`<sup>Required</sup> <a name="database_platform_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databasePlatformName"></a>

```python
database_platform_name: str
```

- *Type:* str

---

##### `database_sub_type`<sup>Required</sup> <a name="database_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseSubType"></a>

```python
database_sub_type: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `db_management_config`<sup>Required</sup> <a name="db_management_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbManagementConfig"></a>

```python
db_management_config: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbManagementConfigList</a>

---

##### `dbmgmt_feature_configs`<sup>Required</sup> <a name="dbmgmt_feature_configs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbmgmtFeatureConfigs"></a>

```python
dbmgmt_feature_configs: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbmgmtFeatureConfigsList</a>

---

##### `db_system_info`<sup>Required</sup> <a name="db_system_info" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbSystemInfo"></a>

```python
db_system_info: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsDbSystemInfoList</a>

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_container_database_id`<sup>Required</sup> <a name="external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.externalContainerDatabaseId"></a>

```python
external_container_database_id: str
```

- *Type:* str

---

##### `external_db_home_id`<sup>Required</sup> <a name="external_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.externalDbHomeId"></a>

```python
external_db_home_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_details`<sup>Required</sup> <a name="instance_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.instanceDetails"></a>

```python
instance_details: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsInstanceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection">DataOciDatabaseManagementExternalDatabasesExternalDatabaseCollection</a>

---


### DataOciDatabaseManagementExternalDatabasesFilterList <a name="DataOciDatabaseManagementExternalDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]]

---


### DataOciDatabaseManagementExternalDatabasesFilterOutputReference <a name="DataOciDatabaseManagementExternalDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_databases

dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDatabases.DataOciDatabaseManagementExternalDatabasesFilter">DataOciDatabaseManagementExternalDatabasesFilter</a>]

---



