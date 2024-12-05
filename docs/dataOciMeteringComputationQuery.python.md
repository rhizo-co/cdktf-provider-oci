# `dataOciMeteringComputationQuery` Submodule <a name="`dataOciMeteringComputationQuery` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationQuery <a name="DataOciMeteringComputationQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query oci_metering_computation_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  query_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.queryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMeteringComputationQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMeteringComputationQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMeteringComputationQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList">DataOciMeteringComputationQueryQueryDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryDefinition"></a>

```python
query_definition: DataOciMeteringComputationQueryQueryDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList">DataOciMeteringComputationQueryQueryDefinitionList</a>

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationQueryConfig <a name="DataOciMeteringComputationQueryConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  query_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}.

---

### DataOciMeteringComputationQueryQueryDefinition <a name="DataOciMeteringComputationQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition()
```


### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi()
```


### DataOciMeteringComputationQueryQueryDefinitionReportQuery <a name="DataOciMeteringComputationQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery()
```


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast()
```


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```python
graph: str
```

- *Type:* str

---

##### `is_cumulative_graph`<sup>Required</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---


### DataOciMeteringComputationQueryQueryDefinitionList <a name="DataOciMeteringComputationQueryQueryDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationQueryQueryDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationQueryQueryDefinitionOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList">DataOciMeteringComputationQueryQueryDefinitionReportQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition">DataOciMeteringComputationQueryQueryDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```python
cost_analysis_ui: DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```python
report_query: DataOciMeteringComputationQueryQueryDefinitionReportQueryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList">DataOciMeteringComputationQueryQueryDefinitionReportQueryList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition">DataOciMeteringComputationQueryQueryDefinition</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType">forecast_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">time_forecast_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">time_forecast_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forecast_type`<sup>Required</sup> <a name="forecast_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```python
forecast_type: str
```

- *Type:* str

---

##### `time_forecast_ended`<sup>Required</sup> <a name="time_forecast_ended" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```python
time_forecast_ended: str
```

- *Type:* str

---

##### `time_forecast_started`<sup>Required</sup> <a name="time_forecast_started" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```python
time_forecast_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_query

dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">date_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery">DataOciMeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name`<sup>Required</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `forecast`<sup>Required</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```python
forecast: DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList</a>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```python
group_by_tag: DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery">DataOciMeteringComputationQueryQueryDefinitionReportQuery</a>

---



