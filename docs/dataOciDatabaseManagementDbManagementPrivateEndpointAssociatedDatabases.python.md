# `dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases oci_database_management_db_management_private_endpoint_associated_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases(
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
  db_management_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dbManagementPrivateEndpointId">db_management_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}.

---

##### `db_management_private_endpoint_id`<sup>Required</sup> <a name="db_management_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dbManagementPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#filter DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection">associated_database_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput">db_management_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId">db_management_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `associated_database_collection`<sup>Required</sup> <a name="associated_database_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection"></a>

```python
associated_database_collection: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter"></a>

```python
filter: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_management_private_endpoint_id_input`<sup>Optional</sup> <a name="db_management_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput"></a>

```python
db_management_private_endpoint_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_management_private_endpoint_id`<sup>Required</sup> <a name="db_management_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId"></a>

```python
db_management_private_endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection()
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems()
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_management_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId">db_management_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}.

---

##### `db_management_private_endpoint_id`<sup>Required</sup> <a name="db_management_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId"></a>

```python
db_management_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#filter DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered">time_registered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_registered`<sup>Required</sup> <a name="time_registered" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered"></a>

```python
time_registered: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]]

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_db_management_private_endpoint_associated_databases

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>]

---



