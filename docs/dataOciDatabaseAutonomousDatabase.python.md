# `dataOciDatabaseAutonomousDatabase` Submodule <a name="`dataOciDatabaseAutonomousDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabase <a name="DataOciDatabaseAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database oci_database_autonomous_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.apexDetails">apex_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList">DataOciDatabaseAutonomousDatabaseApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupConfig">backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList">DataOciDatabaseAutonomousDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList">DataOciDatabaseAutonomousDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionUrls">connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList">DataOciDatabaseAutonomousDatabaseConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList">DataOciDatabaseAutonomousDatabaseCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataguardRegionType">dataguard_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList">DataOciDatabaseAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryRegionType">disaster_recovery_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry">encryption_key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryAreaInGbs">in_memory_area_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDedicated">is_dedicated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDevTier">is_dev_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isFreeTier">is_free_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreview">is_preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted">is_preview_version_with_service_terms_accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReconnectCloneEnabled">is_reconnect_clone_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled">is_remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isShrinkOnly">is_shrink_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyHistoryEntry">key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails">kms_key_lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localDisasterRecoveryType">local_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localStandbyDb">local_standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList">DataOciDatabaseAutonomousDatabaseLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.netServicesArchitecture">net_services_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp">next_long_term_backup_time_stamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.peerDbIds">peer_db_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicConnectionUrls">public_connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableStatus">refreshable_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration">remote_disaster_recovery_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList">DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList">DataOciDatabaseAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.securityAttributes">security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.shrinkAdbTrigger">shrink_adb_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyDb">standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList">DataOciDatabaseAutonomousDatabaseStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverTo">switchover_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverToRemotePeerId">switchover_to_remote_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">time_deletion_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled">time_local_data_guard_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceBegin">time_maintenance_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceEnd">time_maintenance_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfJoiningResourcePool">time_of_joining_resource_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastFailover">time_of_last_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefresh">time_of_last_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefreshPoint">time_of_last_refresh_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastSwitchover">time_of_last_switchover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfNextRefresh">time_of_next_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">time_reclamation_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUndeleted">time_undeleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled">time_until_reconnect_clone_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs">total_backup_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs">used_data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs">used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp">use_latest_available_backup_time_stamp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apex_details`<sup>Required</sup> <a name="apex_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.apexDetails"></a>

```python
apex_details: DataOciDatabaseAutonomousDatabaseApexDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList">DataOciDatabaseAutonomousDatabaseApexDetailsList</a>

---

##### `are_primary_whitelisted_ips_used`<sup>Required</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed"></a>

```python
are_primary_whitelisted_ips_used: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `autonomous_database_backup_id`<sup>Required</sup> <a name="autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupConfig"></a>

```python
backup_config: DataOciDatabaseAutonomousDatabaseBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList">DataOciDatabaseAutonomousDatabaseBackupConfigList</a>

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionStrings"></a>

```python
connection_strings: DataOciDatabaseAutonomousDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList">DataOciDatabaseAutonomousDatabaseConnectionStringsList</a>

---

##### `connection_urls`<sup>Required</sup> <a name="connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionUrls"></a>

```python
connection_urls: DataOciDatabaseAutonomousDatabaseConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList">DataOciDatabaseAutonomousDatabaseConnectionUrlsList</a>

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.customerContacts"></a>

```python
customer_contacts: DataOciDatabaseAutonomousDatabaseCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList">DataOciDatabaseAutonomousDatabaseCustomerContactsList</a>

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `dataguard_region_type`<sup>Required</sup> <a name="dataguard_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataguardRegionType"></a>

```python
dataguard_region_type: str
```

- *Type:* str

---

##### `data_safe_status`<sup>Required</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataSafeStatus"></a>

```python
data_safe_status: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbToolsDetails"></a>

```python
db_tools_details: DataOciDatabaseAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList">DataOciDatabaseAutonomousDatabaseDbToolsDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disaster_recovery_region_type`<sup>Required</sup> <a name="disaster_recovery_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryRegionType"></a>

```python
disaster_recovery_region_type: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabaseEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyList</a>

---

##### `encryption_key_history_entry`<sup>Required</sup> <a name="encryption_key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry"></a>

```python
encryption_key_history_entry: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a>

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `in_memory_area_in_gbs`<sup>Required</sup> <a name="in_memory_area_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```python
in_memory_area_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_percentage`<sup>Required</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryPercentage"></a>

```python
in_memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_access_control_enabled`<sup>Required</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAccessControlEnabled"></a>

```python
is_access_control_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_data_guard_enabled`<sup>Required</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dedicated`<sup>Required</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDedicated"></a>

```python
is_dedicated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dev_tier`<sup>Required</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDevTier"></a>

```python
is_dev_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_free_tier`<sup>Required</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isFreeTier"></a>

```python
is_free_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preview`<sup>Required</sup> <a name="is_preview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreview"></a>

```python
is_preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted"></a>

```python
is_preview_version_with_service_terms_accepted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reconnect_clone_enabled`<sup>Required</sup> <a name="is_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReconnectCloneEnabled"></a>

```python
is_reconnect_clone_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_remote_data_guard_enabled`<sup>Required</sup> <a name="is_remote_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled"></a>

```python
is_remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_shrink_only`<sup>Required</sup> <a name="is_shrink_only" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isShrinkOnly"></a>

```python
is_shrink_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_history_entry`<sup>Required</sup> <a name="key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyHistoryEntry"></a>

```python
key_history_entry: DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList</a>

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_lifecycle_details`<sup>Required</sup> <a name="kms_key_lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails"></a>

```python
kms_key_lifecycle_details: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disaster_recovery_type`<sup>Required</sup> <a name="local_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localDisasterRecoveryType"></a>

```python
local_disaster_recovery_type: str
```

- *Type:* str

---

##### `local_standby_db`<sup>Required</sup> <a name="local_standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localStandbyDb"></a>

```python
local_standby_db: DataOciDatabaseAutonomousDatabaseLocalStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList">DataOciDatabaseAutonomousDatabaseLocalStandbyDbList</a>

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `max_cpu_core_count`<sup>Required</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `net_services_architecture`<sup>Required</sup> <a name="net_services_architecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.netServicesArchitecture"></a>

```python
net_services_architecture: str
```

- *Type:* str

---

##### `next_long_term_backup_time_stamp`<sup>Required</sup> <a name="next_long_term_backup_time_stamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```python
next_long_term_backup_time_stamp: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `operations_insights_status`<sup>Required</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

---

##### `peer_db_ids`<sup>Required</sup> <a name="peer_db_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.peerDbIds"></a>

```python
peer_db_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `public_connection_urls`<sup>Required</sup> <a name="public_connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicConnectionUrls"></a>

```python
public_connection_urls: DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `refreshable_status`<sup>Required</sup> <a name="refreshable_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableStatus"></a>

```python
refreshable_status: str
```

- *Type:* str

---

##### `remote_disaster_recovery_configuration`<sup>Required</sup> <a name="remote_disaster_recovery_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration"></a>

```python
remote_disaster_recovery_configuration: DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a>

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList">DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `rotate_key_trigger`<sup>Required</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.rotateKeyTrigger"></a>

```python
rotate_key_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.scheduledOperations"></a>

```python
scheduled_operations: DataOciDatabaseAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList">DataOciDatabaseAutonomousDatabaseScheduledOperationsList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version_number`<sup>Required</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.securityAttributes"></a>

```python
security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `shrink_adb_trigger`<sup>Required</sup> <a name="shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.shrinkAdbTrigger"></a>

```python
shrink_adb_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `standby_db`<sup>Required</sup> <a name="standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyDb"></a>

```python
standby_db: DataOciDatabaseAutonomousDatabaseStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList">DataOciDatabaseAutonomousDatabaseStandbyDbList</a>

---

##### `standby_whitelisted_ips`<sup>Required</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyWhitelistedIps"></a>

```python
standby_whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `switchover_to`<sup>Required</sup> <a name="switchover_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverTo"></a>

```python
switchover_to: str
```

- *Type:* str

---

##### `switchover_to_remote_peer_id`<sup>Required</sup> <a name="switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverToRemotePeerId"></a>

```python
switchover_to_remote_peer_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```python
time_deletion_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled`<sup>Required</sup> <a name="time_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled"></a>

```python
time_local_data_guard_enabled: str
```

- *Type:* str

---

##### `time_maintenance_begin`<sup>Required</sup> <a name="time_maintenance_begin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceBegin"></a>

```python
time_maintenance_begin: str
```

- *Type:* str

---

##### `time_maintenance_end`<sup>Required</sup> <a name="time_maintenance_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceEnd"></a>

```python
time_maintenance_end: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `time_of_joining_resource_pool`<sup>Required</sup> <a name="time_of_joining_resource_pool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfJoiningResourcePool"></a>

```python
time_of_joining_resource_pool: str
```

- *Type:* str

---

##### `time_of_last_failover`<sup>Required</sup> <a name="time_of_last_failover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastFailover"></a>

```python
time_of_last_failover: str
```

- *Type:* str

---

##### `time_of_last_refresh`<sup>Required</sup> <a name="time_of_last_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefresh"></a>

```python
time_of_last_refresh: str
```

- *Type:* str

---

##### `time_of_last_refresh_point`<sup>Required</sup> <a name="time_of_last_refresh_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```python
time_of_last_refresh_point: str
```

- *Type:* str

---

##### `time_of_last_switchover`<sup>Required</sup> <a name="time_of_last_switchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastSwitchover"></a>

```python
time_of_last_switchover: str
```

- *Type:* str

---

##### `time_of_next_refresh`<sup>Required</sup> <a name="time_of_next_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfNextRefresh"></a>

```python
time_of_next_refresh: str
```

- *Type:* str

---

##### `time_reclamation_of_free_autonomous_database`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```python
time_reclamation_of_free_autonomous_database: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `time_undeleted`<sup>Required</sup> <a name="time_undeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUndeleted"></a>

```python
time_undeleted: str
```

- *Type:* str

---

##### `time_until_reconnect_clone_enabled`<sup>Required</sup> <a name="time_until_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled"></a>

```python
time_until_reconnect_clone_enabled: str
```

- *Type:* str

---

##### `total_backup_storage_size_in_gbs`<sup>Required</sup> <a name="total_backup_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs"></a>

```python
total_backup_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_gbs`<sup>Required</sup> <a name="used_data_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```python
used_data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tbs`<sup>Required</sup> <a name="used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```python
used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_latest_available_backup_time_stamp`<sup>Required</sup> <a name="use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp"></a>

```python
use_latest_available_backup_time_stamp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseApexDetails <a name="DataOciDatabaseAutonomousDatabaseApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails()
```


### DataOciDatabaseAutonomousDatabaseBackupConfig <a name="DataOciDatabaseAutonomousDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig()
```


### DataOciDatabaseAutonomousDatabaseConfig <a name="DataOciDatabaseAutonomousDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}.

---

### DataOciDatabaseAutonomousDatabaseConnectionStrings <a name="DataOciDatabaseAutonomousDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings()
```


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles()
```


### DataOciDatabaseAutonomousDatabaseConnectionUrls <a name="DataOciDatabaseAutonomousDatabaseConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls()
```


### DataOciDatabaseAutonomousDatabaseCustomerContacts <a name="DataOciDatabaseAutonomousDatabaseCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts()
```


### DataOciDatabaseAutonomousDatabaseDbToolsDetails <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails()
```


### DataOciDatabaseAutonomousDatabaseEncryptionKey <a name="DataOciDatabaseAutonomousDatabaseEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey()
```


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey()
```


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabaseLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb()
```


### DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule()
```


### DataOciDatabaseAutonomousDatabasePublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls()
```


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration()
```


### DataOciDatabaseAutonomousDatabaseResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary()
```


### DataOciDatabaseAutonomousDatabaseScheduledOperations <a name="DataOciDatabaseAutonomousDatabaseScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations()
```


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek()
```


### DataOciDatabaseAutonomousDatabaseStandbyDb <a name="DataOciDatabaseAutonomousDatabaseStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseApexDetailsList <a name="DataOciDatabaseAutonomousDatabaseApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion">apex_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion">ords_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails">DataOciDatabaseAutonomousDatabaseApexDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_version`<sup>Required</sup> <a name="apex_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion"></a>

```python
apex_version: str
```

- *Type:* str

---

##### `ords_version`<sup>Required</sup> <a name="ords_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion"></a>

```python
ords_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseApexDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails">DataOciDatabaseAutonomousDatabaseApexDetails</a>

---


### DataOciDatabaseAutonomousDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName">manual_backup_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType">manual_backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig">DataOciDatabaseAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_backup_bucket_name`<sup>Required</sup> <a name="manual_backup_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName"></a>

```python
manual_backup_bucket_name: str
```

- *Type:* str

---

##### `manual_backup_type`<sup>Required</sup> <a name="manual_backup_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType"></a>

```python
manual_backup_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig">DataOciDatabaseAutonomousDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsList <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings">DataOciDatabaseAutonomousDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated"></a>

```python
dedicated: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles"></a>

```python
profiles: DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings">DataOciDatabaseAutonomousDatabaseConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat">host_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional">is_regional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat">syntax_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication">tls_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles">DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_format`<sup>Required</sup> <a name="host_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```python
host_format: str
```

- *Type:* str

---

##### `is_regional`<sup>Required</sup> <a name="is_regional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional"></a>

```python
is_regional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `syntax_format`<sup>Required</sup> <a name="syntax_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```python
syntax_format: str
```

- *Type:* str

---

##### `tls_authentication`<sup>Required</sup> <a name="tls_authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```python
tls_authentication: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles">DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabaseConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls">DataOciDatabaseAutonomousDatabaseConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls">DataOciDatabaseAutonomousDatabaseConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabaseCustomerContactsList <a name="DataOciDatabaseAutonomousDatabaseCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts">DataOciDatabaseAutonomousDatabaseCustomerContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts">DataOciDatabaseAutonomousDatabaseCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabaseDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails">DataOciDatabaseAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseDbToolsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails">DataOciDatabaseAutonomousDatabaseDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabaseLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb">DataOciDatabaseAutonomousDatabaseLocalStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseLocalStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb">DataOciDatabaseAutonomousDatabaseLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule">DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule">DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls">DataOciDatabaseAutonomousDatabasePublicConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasePublicConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls">DataOciDatabaseAutonomousDatabasePublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">is_snapshot_standby</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">time_snapshot_standby_enabled_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_snapshot_standby`<sup>Required</sup> <a name="is_snapshot_standby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```python
is_snapshot_standby: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `time_snapshot_standby_enabled_till`<sup>Required</sup> <a name="time_snapshot_standby_enabled_till" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```python
time_snapshot_standby_enabled_till: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary">DataOciDatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary">DataOciDatabaseAutonomousDatabaseResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations">DataOciDatabaseAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList</a>

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseScheduledOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations">DataOciDatabaseAutonomousDatabaseScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabaseStandbyDbList <a name="DataOciDatabaseAutonomousDatabaseStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database

dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb">DataOciDatabaseAutonomousDatabaseStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb">DataOciDatabaseAutonomousDatabaseStandbyDb</a>

---



