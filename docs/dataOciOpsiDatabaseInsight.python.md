# `dataOciOpsiDatabaseInsight` Submodule <a name="`dataOciOpsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiDatabaseInsight <a name="DataOciOpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_insight_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.databaseInsightId">database_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_insight_id`<sup>Required</sup> <a name="database_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.databaseInsightId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiDatabaseInsight to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionCredentialDetails">connection_credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionDetails">connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList">DataOciOpsiDatabaseInsightConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList">DataOciOpsiDatabaseInsightCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseConnectionStatusDetails">database_connection_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseDisplayName">database_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseResourceType">database_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dbmPrivateEndpointId">dbm_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">enterprise_manager_entity_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityName">enterprise_manager_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityType">enterprise_manager_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.entitySource">entity_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">is_advanced_features_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHeatWaveClusterAttached">is_heat_wave_cluster_attached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHighlyAvailable">is_highly_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.processorCount">processor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.rootId">root_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightIdInput">database_insight_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightId">database_insight_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_credential_details`<sup>Required</sup> <a name="connection_credential_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```python
connection_credential_details: DataOciOpsiDatabaseInsightConnectionCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightConnectionCredentialDetailsList</a>

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionDetails"></a>

```python
connection_details: DataOciOpsiDatabaseInsightConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList">DataOciOpsiDatabaseInsightConnectionDetailsList</a>

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.credentialDetails"></a>

```python
credential_details: DataOciOpsiDatabaseInsightCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList">DataOciOpsiDatabaseInsightCredentialDetailsList</a>

---

##### `database_connection_status_details`<sup>Required</sup> <a name="database_connection_status_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```python
database_connection_status_details: str
```

- *Type:* str

---

##### `database_display_name`<sup>Required</sup> <a name="database_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseDisplayName"></a>

```python
database_display_name: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_resource_type`<sup>Required</sup> <a name="database_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseResourceType"></a>

```python
database_resource_type: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `dbm_private_endpoint_id`<sup>Required</sup> <a name="dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```python
dbm_private_endpoint_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `enterprise_manager_bridge_id`<sup>Required</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

---

##### `enterprise_manager_entity_display_name`<sup>Required</sup> <a name="enterprise_manager_entity_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```python
enterprise_manager_entity_display_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier`<sup>Required</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

---

##### `enterprise_manager_entity_name`<sup>Required</sup> <a name="enterprise_manager_entity_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```python
enterprise_manager_entity_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_type`<sup>Required</sup> <a name="enterprise_manager_entity_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```python
enterprise_manager_entity_type: str
```

- *Type:* str

---

##### `enterprise_manager_identifier`<sup>Required</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

---

##### `exadata_insight_id`<sup>Required</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_advanced_features_enabled`<sup>Required</sup> <a name="is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```python
is_advanced_features_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_heat_wave_cluster_attached`<sup>Required</sup> <a name="is_heat_wave_cluster_attached" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```python
is_heat_wave_cluster_attached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHighlyAvailable"></a>

```python
is_highly_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id`<sup>Required</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `processor_count`<sup>Required</sup> <a name="processor_count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.processorCount"></a>

```python
processor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_id`<sup>Required</sup> <a name="root_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.rootId"></a>

```python
root_id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `database_insight_id_input`<sup>Optional</sup> <a name="database_insight_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightIdInput"></a>

```python
database_insight_id_input: str
```

- *Type:* str

---

##### `database_insight_id`<sup>Required</sup> <a name="database_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightId"></a>

```python
database_insight_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiDatabaseInsightConfig <a name="DataOciOpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_insight_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.databaseInsightId">database_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_insight_id`<sup>Required</sup> <a name="database_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.databaseInsightId"></a>

```python
database_insight_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}.

---

### DataOciOpsiDatabaseInsightConnectionCredentialDetails <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails()
```


### DataOciOpsiDatabaseInsightConnectionDetails <a name="DataOciOpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails()
```


### DataOciOpsiDatabaseInsightConnectionDetailsHosts <a name="DataOciOpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts()
```


### DataOciOpsiDatabaseInsightCredentialDetails <a name="DataOciOpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiDatabaseInsightConnectionCredentialDetailsList <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails">DataOciOpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails">DataOciOpsiDatabaseInsightConnectionCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightConnectionDetailsHostsList <a name="DataOciOpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">host_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts">DataOciOpsiDatabaseInsightConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_ip`<sup>Required</sup> <a name="host_ip" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```python
host_ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightConnectionDetailsHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts">DataOciOpsiDatabaseInsightConnectionDetailsHosts</a>

---


### DataOciOpsiDatabaseInsightConnectionDetailsList <a name="DataOciOpsiDatabaseInsightConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightConnectionDetailsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList">DataOciOpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails">DataOciOpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```python
hosts: DataOciOpsiDatabaseInsightConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList">DataOciOpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails">DataOciOpsiDatabaseInsightConnectionDetails</a>

---


### DataOciOpsiDatabaseInsightCredentialDetailsList <a name="DataOciOpsiDatabaseInsightCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insight

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails">DataOciOpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `wallet_secret_id`<sup>Required</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails">DataOciOpsiDatabaseInsightCredentialDetails</a>

---



