# `dataOciDatabaseManagementExternalDbSystemConnector` Submodule <a name="`dataOciDatabaseManagementExternalDbSystemConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystemConnector <a name="DataOciDatabaseManagementExternalDbSystemConnector" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector oci_database_management_external_db_system_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_db_system_connector_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.externalDbSystemConnectorId">external_db_system_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector#external_db_system_connector_id DataOciDatabaseManagementExternalDbSystemConnector#external_db_system_connector_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_db_system_connector_id`<sup>Required</sup> <a name="external_db_system_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.Initializer.parameter.externalDbSystemConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector#external_db_system_connector_id DataOciDatabaseManagementExternalDbSystemConnector#external_db_system_connector_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalDbSystemConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage">connection_failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionInfo">connection_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionStatus">connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemId">external_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated">time_connection_status_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemConnectorIdInput">external_db_system_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemConnectorId">external_db_system_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_failure_message`<sup>Required</sup> <a name="connection_failure_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage"></a>

```python
connection_failure_message: str
```

- *Type:* str

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionInfo"></a>

```python
connection_info: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList</a>

---

##### `connection_status`<sup>Required</sup> <a name="connection_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectionStatus"></a>

```python
connection_status: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_db_system_id`<sup>Required</sup> <a name="external_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemId"></a>

```python
external_db_system_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_connection_status_last_updated`<sup>Required</sup> <a name="time_connection_status_last_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated"></a>

```python
time_connection_status_last_updated: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `external_db_system_connector_id_input`<sup>Optional</sup> <a name="external_db_system_connector_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemConnectorIdInput"></a>

```python
external_db_system_connector_id_input: str
```

- *Type:* str

---

##### `external_db_system_connector_id`<sup>Required</sup> <a name="external_db_system_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.externalDbSystemConnectorId"></a>

```python
external_db_system_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorConfig <a name="DataOciDatabaseManagementExternalDbSystemConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_db_system_connector_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemConnectorId">external_db_system_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector#external_db_system_connector_id DataOciDatabaseManagementExternalDbSystemConnector#external_db_system_connector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_db_system_connector_id`<sup>Required</sup> <a name="external_db_system_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemConnectorId"></a>

```python
external_db_system_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connector#external_db_system_connector_id DataOciDatabaseManagementExternalDbSystemConnector#external_db_system_connector_id}.

---

### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo()
```


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials()
```


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString()
```


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_db_system_connector

dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType">component_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential">database_credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_type`<sup>Required</sup> <a name="component_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

---

##### `connection_credentials`<sup>Required</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials"></a>

```python
connection_credentials: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString"></a>

```python
connection_string: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a>

---

##### `database_credential`<sup>Required</sup> <a name="database_credential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential"></a>

```python
database_credential: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnector.DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorConnectionInfo</a>

---



