# `dataOciDatabaseToolsDatabaseToolsPrivateEndpoint` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpoint <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint oci_database_tools_database_tools_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_tools_private_endpoint_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.databaseToolsPrivateEndpointId">database_tools_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint#database_tools_private_endpoint_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoint#database_tools_private_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_tools_private_endpoint_id`<sup>Required</sup> <a name="database_tools_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.databaseToolsPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint#database_tools_private_endpoint_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoint#database_tools_private_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns">additional_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId">endpoint_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId">private_endpoint_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration">reverse_connection_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.databaseToolsPrivateEndpointIdInput">database_tools_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.databaseToolsPrivateEndpointId">database_tools_private_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_fqdns`<sup>Required</sup> <a name="additional_fqdns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns"></a>

```python
additional_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `endpoint_service_id`<sup>Required</sup> <a name="endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId"></a>

```python
endpoint_service_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.locks"></a>

```python
locks: DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_vnic_id`<sup>Required</sup> <a name="private_endpoint_vnic_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId"></a>

```python
private_endpoint_vnic_id: str
```

- *Type:* str

---

##### `reverse_connection_configuration`<sup>Required</sup> <a name="reverse_connection_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration"></a>

```python
reverse_connection_configuration: DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `database_tools_private_endpoint_id_input`<sup>Optional</sup> <a name="database_tools_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.databaseToolsPrivateEndpointIdInput"></a>

```python
database_tools_private_endpoint_id_input: str
```

- *Type:* str

---

##### `database_tools_private_endpoint_id`<sup>Required</sup> <a name="database_tools_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.databaseToolsPrivateEndpointId"></a>

```python
database_tools_private_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_tools_private_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.databaseToolsPrivateEndpointId">database_tools_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint#database_tools_private_endpoint_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoint#database_tools_private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_tools_private_endpoint_id`<sup>Required</sup> <a name="database_tools_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointConfig.property.databaseToolsPrivateEndpointId"></a>

```python
database_tools_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoint#database_tools_private_endpoint_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoint#database_tools_private_endpoint_id}.

---

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">reverse_connections_source_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reverse_connections_source_ips`<sup>Required</sup> <a name="reverse_connections_source_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```python
reverse_connections_source_ips: DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoint

dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoint.DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---



