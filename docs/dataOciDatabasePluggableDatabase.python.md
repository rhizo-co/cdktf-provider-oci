# `dataOciDatabasePluggableDatabase` Submodule <a name="`dataOciDatabasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabase <a name="DataOciDatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pluggable_database_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.pluggableDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabasePluggableDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword">container_database_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId">container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger">convert_to_regular_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted">is_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword">pdb_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails">pdb_creation_type_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails">pdb_node_level_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">pluggable_database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig">refreshable_clone_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup">should_create_pdb_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">should_pdb_admin_account_be_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput">pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings"></a>

```python
connection_strings: DataOciDatabasePluggableDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a>

---

##### `container_database_admin_password`<sup>Required</sup> <a name="container_database_admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```python
container_database_admin_password: str
```

- *Type:* str

---

##### `container_database_id`<sup>Required</sup> <a name="container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId"></a>

```python
container_database_id: str
```

- *Type:* str

---

##### `convert_to_regular_trigger`<sup>Required</sup> <a name="convert_to_regular_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```python
convert_to_regular_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted"></a>

```python
is_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `pdb_admin_password`<sup>Required</sup> <a name="pdb_admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword"></a>

```python
pdb_admin_password: str
```

- *Type:* str

---

##### `pdb_creation_type_details`<sup>Required</sup> <a name="pdb_creation_type_details" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```python
pdb_creation_type_details: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a>

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pdb_node_level_details`<sup>Required</sup> <a name="pdb_node_level_details" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```python
pdb_node_level_details: DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `pluggable_database_management_config`<sup>Required</sup> <a name="pluggable_database_management_config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```python
pluggable_database_management_config: DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `refreshable_clone_config`<sup>Required</sup> <a name="refreshable_clone_config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```python
refreshable_clone_config: DataOciDatabasePluggableDatabaseRefreshableCloneConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `refresh_trigger`<sup>Required</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger"></a>

```python
refresh_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotate_key_trigger`<sup>Required</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```python
rotate_key_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `should_create_pdb_backup`<sup>Required</sup> <a name="should_create_pdb_backup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```python
should_create_pdb_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_pdb_admin_account_be_locked`<sup>Required</sup> <a name="should_pdb_admin_account_be_locked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```python
should_pdb_admin_account_be_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tde_wallet_password`<sup>Required</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `pluggable_database_id_input`<sup>Optional</sup> <a name="pluggable_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput"></a>

```python
pluggable_database_id_input: str
```

- *Type:* str

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabaseConfig <a name="DataOciDatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pluggable_database_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}.

---

### DataOciDatabasePluggableDatabaseConnectionStrings <a name="DataOciDatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings()
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails()
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails()
```


### DataOciDatabasePluggableDatabasePdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails()
```


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig()
```


### DataOciDatabasePluggableDatabaseRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabaseConnectionStringsList <a name="DataOciDatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabaseConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">pdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">pdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `pdb_default`<sup>Required</sup> <a name="pdb_default" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```python
pdb_default: str
```

- *Type:* str

---

##### `pdb_ip_default`<sup>Required</sup> <a name="pdb_ip_default" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```python
pdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">dblink_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">dblink_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">is_thin_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">refreshable_clone_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">source_container_database_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">source_pluggable_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `dblink_username`<sup>Required</sup> <a name="dblink_username" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```python
dblink_username: str
```

- *Type:* str

---

##### `dblink_user_password`<sup>Required</sup> <a name="dblink_user_password" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```python
dblink_user_password: str
```

- *Type:* str

---

##### `is_thin_clone`<sup>Required</sup> <a name="is_thin_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```python
is_thin_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `refreshable_clone_details`<sup>Required</sup> <a name="refreshable_clone_details" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```python
refreshable_clone_details: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `source_container_database_admin_password`<sup>Required</sup> <a name="source_container_database_admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```python
source_container_database_admin_password: str
```

- *Type:* str

---

##### `source_pluggable_database_id`<sup>Required</sup> <a name="source_pluggable_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```python
source_pluggable_database_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabasePdbCreationTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabasePdbNodeLevelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_status`<sup>Required</sup> <a name="management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```python
management_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_pluggable_database

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabasePluggableDatabaseRefreshableCloneConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a>

---



