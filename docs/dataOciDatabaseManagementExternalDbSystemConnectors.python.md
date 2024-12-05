# `dataOciDatabaseManagementExternalDbSystemConnectors` Submodule <a name="`dataOciDatabaseManagementExternalDbSystemConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectors <a name="DataOciDatabaseManagementExternalDbSystemConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors oci_database_management_external_db_system_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors(
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
  external_db_system_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}.

---

##### `external_db_system_id`<sup>Optional</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.externalDbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#filter DataOciDatabaseManagementExternalDbSystemConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId">reset_external_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_db_system_id` <a name="reset_external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId"></a>

```python
def reset_external_db_system_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalDbSystemConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection">external_db_system_connector_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput">external_db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_db_system_connector_collection`<sup>Required</sup> <a name="external_db_system_connector_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection"></a>

```python
external_db_system_connector_collection: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalDbSystemConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_db_system_id_input`<sup>Optional</sup> <a name="external_db_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput"></a>

```python
external_db_system_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_db_system_id`<sup>Required</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsConfig <a name="DataOciDatabaseManagementExternalDbSystemConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  external_db_system_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}.

---

##### `external_db_system_id`<sup>Optional</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#filter DataOciDatabaseManagementExternalDbSystemConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential()
```


### DataOciDatabaseManagementExternalDbSystemConnectorsFilter <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType">component_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential">database_credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_type`<sup>Required</sup> <a name="component_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

---

##### `connection_credentials`<sup>Required</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials"></a>

```python
connection_credentials: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString"></a>

```python
connection_string: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a>

---

##### `database_credential`<sup>Required</sup> <a name="database_credential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential"></a>

```python
database_credential: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage">connection_failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo">connection_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus">connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated">time_connection_status_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_failure_message`<sup>Required</sup> <a name="connection_failure_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage"></a>

```python
connection_failure_message: str
```

- *Type:* str

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo"></a>

```python
connection_info: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a>

---

##### `connection_status`<sup>Required</sup> <a name="connection_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus"></a>

```python
connection_status: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_db_system_id`<sup>Required</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_connection_status_last_updated`<sup>Required</sup> <a name="time_connection_status_last_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```python
time_connection_status_last_updated: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalDbSystemConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]]

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connectors

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalDbSystemConnectorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>]

---



