# `dataOciOpsiOperationsInsightsWarehouse` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouse` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouse <a name="DataOciOpsiOperationsInsightsWarehouse" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.operationsInsightsWarehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOperationsInsightsWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuAllocated">cpu_allocated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuUsed">cpu_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dynamicGroupId">dynamic_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId">operations_insights_tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs">storage_allocated_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageUsedInGbs">storage_used_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeLastWalletRotated">time_last_wallet_rotated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseIdInput">operations_insights_warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_allocated`<sup>Required</sup> <a name="cpu_allocated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuAllocated"></a>

```python
cpu_allocated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_used`<sup>Required</sup> <a name="cpu_used" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuUsed"></a>

```python
cpu_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dynamic_group_id`<sup>Required</sup> <a name="dynamic_group_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dynamicGroupId"></a>

```python
dynamic_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `operations_insights_tenancy_id`<sup>Required</sup> <a name="operations_insights_tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId"></a>

```python
operations_insights_tenancy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_allocated_in_gbs`<sup>Required</sup> <a name="storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs"></a>

```python
storage_allocated_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_used_in_gbs`<sup>Required</sup> <a name="storage_used_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageUsedInGbs"></a>

```python
storage_used_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_wallet_rotated`<sup>Required</sup> <a name="time_last_wallet_rotated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeLastWalletRotated"></a>

```python
time_last_wallet_rotated: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id_input`<sup>Optional</sup> <a name="operations_insights_warehouse_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseIdInput"></a>

```python
operations_insights_warehouse_id_input: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehouseConfig <a name="DataOciOpsiOperationsInsightsWarehouseConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}.

---



