# `dataOciDisasterRecoveryDrPlanExecution` Submodule <a name="`dataOciDisasterRecoveryDrPlanExecution` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlanExecution <a name="DataOciDisasterRecoveryDrPlanExecution" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_plan_execution_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.drPlanExecutionId">dr_plan_execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecution#dr_plan_execution_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_plan_execution_id`<sup>Required</sup> <a name="dr_plan_execution_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.Initializer.parameter.drPlanExecutionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecution#dr_plan_execution_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlanExecution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDisasterRecoveryDrPlanExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlanExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.executionDurationInSec">execution_duration_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.executionOptions">execution_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.groupExecutions">group_executions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.lifeCycleDetails">life_cycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.logLocation">log_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList">DataOciDisasterRecoveryDrPlanExecutionLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId">peer_dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.planExecutionType">plan_execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.planId">plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drPlanExecutionIdInput">dr_plan_execution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drPlanExecutionId">dr_plan_execution_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

---

##### `execution_duration_in_sec`<sup>Required</sup> <a name="execution_duration_in_sec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.executionDurationInSec"></a>

```python
execution_duration_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_options`<sup>Required</sup> <a name="execution_options" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.executionOptions"></a>

```python
execution_options: DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `group_executions`<sup>Required</sup> <a name="group_executions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.groupExecutions"></a>

```python
group_executions: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `life_cycle_details`<sup>Required</sup> <a name="life_cycle_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.lifeCycleDetails"></a>

```python
life_cycle_details: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.logLocation"></a>

```python
log_location: DataOciDisasterRecoveryDrPlanExecutionLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList">DataOciDisasterRecoveryDrPlanExecutionLogLocationList</a>

---

##### `peer_dr_protection_group_id`<sup>Required</sup> <a name="peer_dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId"></a>

```python
peer_dr_protection_group_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `plan_execution_type`<sup>Required</sup> <a name="plan_execution_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.planExecutionType"></a>

```python
plan_execution_type: str
```

- *Type:* str

---

##### `plan_id`<sup>Required</sup> <a name="plan_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.planId"></a>

```python
plan_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `dr_plan_execution_id_input`<sup>Optional</sup> <a name="dr_plan_execution_id_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drPlanExecutionIdInput"></a>

```python
dr_plan_execution_id_input: str
```

- *Type:* str

---

##### `dr_plan_execution_id`<sup>Required</sup> <a name="dr_plan_execution_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.drPlanExecutionId"></a>

```python
dr_plan_execution_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlanExecutionConfig <a name="DataOciDisasterRecoveryDrPlanExecutionConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_plan_execution_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.drPlanExecutionId">dr_plan_execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecution#dr_plan_execution_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_plan_execution_id`<sup>Required</sup> <a name="dr_plan_execution_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionConfig.property.drPlanExecutionId"></a>

```python
dr_plan_execution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_execution#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecution#dr_plan_execution_id}.

---

### DataOciDisasterRecoveryDrPlanExecutionExecutionOptions <a name="DataOciDisasterRecoveryDrPlanExecutionExecutionOptions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptions()
```


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutions()
```


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions()
```


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation()
```


### DataOciDisasterRecoveryDrPlanExecutionLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocation()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList <a name="DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled">are_prechecks_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored">are_warnings_ignored</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType">plan_execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_prechecks_enabled`<sup>Required</sup> <a name="are_prechecks_enabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```python
are_prechecks_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `are_warnings_ignored`<sup>Required</sup> <a name="are_warnings_ignored" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```python
are_warnings_ignored: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `plan_execution_type`<sup>Required</sup> <a name="plan_execution_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType"></a>

```python
plan_execution_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlanExecutionExecutionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionExecutionOptions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec">execution_duration_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions">step_executions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionGroupExecutions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_duration_in_sec`<sup>Required</sup> <a name="execution_duration_in_sec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```python
execution_duration_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `step_executions`<sup>Required</sup> <a name="step_executions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions"></a>

```python
step_executions: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a>

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionGroupExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a>

---


### DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">execution_duration_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation">log_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId">step_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_duration_in_sec`<sup>Required</sup> <a name="execution_duration_in_sec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```python
execution_duration_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```python
log_location: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `step_id`<sup>Required</sup> <a name="step_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```python
step_id: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plan_execution

dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocation">DataOciDisasterRecoveryDrPlanExecutionLogLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlanExecutionLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecution.DataOciDisasterRecoveryDrPlanExecutionLogLocation">DataOciDisasterRecoveryDrPlanExecutionLogLocation</a>

---



