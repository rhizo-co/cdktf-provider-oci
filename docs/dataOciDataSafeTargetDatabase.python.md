# `dataOciDataSafeTargetDatabase` Submodule <a name="`dataOciDataSafeTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabase <a name="DataOciDataSafeTargetDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database oci_data_safe_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.associatedResourceIds">associated_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.connectionOption">connection_option</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList">DataOciDataSafeTargetDatabaseConnectionOptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList">DataOciDataSafeTargetDatabaseCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabaseDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabaseDetails">peer_target_database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabases">peer_target_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList">DataOciDataSafeTargetDatabasePeerTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabaseTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `associated_resource_ids`<sup>Required</sup> <a name="associated_resource_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.associatedResourceIds"></a>

```python
associated_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_option`<sup>Required</sup> <a name="connection_option" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.connectionOption"></a>

```python
connection_option: DataOciDataSafeTargetDatabaseConnectionOptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList">DataOciDataSafeTargetDatabaseConnectionOptionList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.credentials"></a>

```python
credentials: DataOciDataSafeTargetDatabaseCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList">DataOciDataSafeTargetDatabaseCredentialsList</a>

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabaseDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabaseDatabaseDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `peer_target_database_details`<sup>Required</sup> <a name="peer_target_database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabaseDetails"></a>

```python
peer_target_database_details: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList</a>

---

##### `peer_target_databases`<sup>Required</sup> <a name="peer_target_databases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabases"></a>

```python
peer_target_databases: DataOciDataSafeTargetDatabasePeerTargetDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList">DataOciDataSafeTargetDatabasePeerTargetDatabasesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabaseTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabaseTlsConfigList</a>

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabaseConfig <a name="DataOciDataSafeTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}.

---

### DataOciDataSafeTargetDatabaseConnectionOption <a name="DataOciDataSafeTargetDatabaseConnectionOption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption()
```


### DataOciDataSafeTargetDatabaseCredentials <a name="DataOciDataSafeTargetDatabaseCredentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials()
```


### DataOciDataSafeTargetDatabaseDatabaseDetails <a name="DataOciDataSafeTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabases <a name="DataOciDataSafeTargetDatabasePeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig()
```


### DataOciDataSafeTargetDatabaseTlsConfig <a name="DataOciDataSafeTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabaseConnectionOptionList <a name="DataOciDataSafeTargetDatabaseConnectionOptionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabaseConnectionOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabaseConnectionOptionOutputReference <a name="DataOciDataSafeTargetDatabaseConnectionOptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId">datasafe_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId">on_prem_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption">DataOciDataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `datasafe_private_endpoint_id`<sup>Required</sup> <a name="datasafe_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId"></a>

```python
datasafe_private_endpoint_id: str
```

- *Type:* str

---

##### `on_prem_connector_id`<sup>Required</sup> <a name="on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId"></a>

```python
on_prem_connector_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabaseConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption">DataOciDataSafeTargetDatabaseConnectionOption</a>

---


### DataOciDataSafeTargetDatabaseCredentialsList <a name="DataOciDataSafeTargetDatabaseCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabaseCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabaseCredentialsOutputReference <a name="DataOciDataSafeTargetDatabaseCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials">DataOciDataSafeTargetDatabaseCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabaseCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials">DataOciDataSafeTargetDatabaseCredentials</a>

---


### DataOciDataSafeTargetDatabaseDatabaseDetailsList <a name="DataOciDataSafeTargetDatabaseDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabaseDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList</a>

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName">database_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases">DataOciDataSafeTargetDatabasePeerTargetDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a>

---

##### `database_unique_name`<sup>Required</sup> <a name="database_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName"></a>

```python
database_unique_name: str
```

- *Type:* str

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases">DataOciDataSafeTargetDatabasePeerTargetDatabases</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a>

---


### DataOciDataSafeTargetDatabaseTlsConfigList <a name="DataOciDataSafeTargetDatabaseTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabaseTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabaseTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database

dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabaseTlsConfig</a>

---



