# `dataOciStackMonitoringMonitoredResourceTask` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTask <a name="DataOciStackMonitoringMonitoredResourceTask" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_resource_task_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.monitoredResourceTaskId">monitored_resource_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_resource_task_id`<sup>Required</sup> <a name="monitored_resource_task_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.monitoredResourceTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMonitoredResourceTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.taskDetails">task_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList">DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.workRequestIds">work_request_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskIdInput">monitored_resource_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskId">monitored_resource_task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.taskDetails"></a>

```python
task_details: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList">DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList</a>

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_ids`<sup>Required</sup> <a name="work_request_ids" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.workRequestIds"></a>

```python
work_request_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `monitored_resource_task_id_input`<sup>Optional</sup> <a name="monitored_resource_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskIdInput"></a>

```python
monitored_resource_task_id_input: str
```

- *Type:* str

---

##### `monitored_resource_task_id`<sup>Required</sup> <a name="monitored_resource_task_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskId"></a>

```python
monitored_resource_task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTaskConfig <a name="DataOciStackMonitoringMonitoredResourceTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_resource_task_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.monitoredResourceTaskId">monitored_resource_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_resource_task_id`<sup>Required</sup> <a name="monitored_resource_task_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.monitoredResourceTaskId"></a>

```python
monitored_resource_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}.

---

### DataOciStackMonitoringMonitoredResourceTaskTaskDetails <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_task

dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">availability_proxy_metric_collection_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics">availability_proxy_metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix">console_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping">external_id_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">lifecycle_status_mappings_for_up_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter">resource_name_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping">resource_name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter">resource_type_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping">resource_type_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl">service_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">should_use_metrics_flow_for_status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails">DataOciStackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_proxy_metric_collection_interval`<sup>Required</sup> <a name="availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```python
availability_proxy_metric_collection_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_proxy_metrics`<sup>Required</sup> <a name="availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```python
availability_proxy_metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `console_path_prefix`<sup>Required</sup> <a name="console_path_prefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix"></a>

```python
console_path_prefix: str
```

- *Type:* str

---

##### `external_id_mapping`<sup>Required</sup> <a name="external_id_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping"></a>

```python
external_id_mapping: str
```

- *Type:* str

---

##### `lifecycle_status_mappings_for_up_status`<sup>Required</sup> <a name="lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```python
lifecycle_status_mappings_for_up_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_name_filter`<sup>Required</sup> <a name="resource_name_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter"></a>

```python
resource_name_filter: str
```

- *Type:* str

---

##### `resource_name_mapping`<sup>Required</sup> <a name="resource_name_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping"></a>

```python
resource_name_mapping: str
```

- *Type:* str

---

##### `resource_type_filter`<sup>Required</sup> <a name="resource_type_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```python
resource_type_filter: str
```

- *Type:* str

---

##### `resource_type_mapping`<sup>Required</sup> <a name="resource_type_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```python
resource_type_mapping: str
```

- *Type:* str

---

##### `service_base_url`<sup>Required</sup> <a name="service_base_url" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```python
service_base_url: str
```

- *Type:* str

---

##### `should_use_metrics_flow_for_status`<sup>Required</sup> <a name="should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```python
should_use_metrics_flow_for_status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTaskTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails">DataOciStackMonitoringMonitoredResourceTaskTaskDetails</a>

---



