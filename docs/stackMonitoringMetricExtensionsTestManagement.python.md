# `stackMonitoringMetricExtensionsTestManagement` Submodule <a name="`stackMonitoringMetricExtensionsTestManagement` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtensionsTestManagement <a name="StackMonitoringMetricExtensionsTestManagement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management oci_stack_monitoring_metric_extensions_test_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_extension_id: str,
  resource_ids: typing.List[str],
  id: str = None,
  timeouts: StackMonitoringMetricExtensionsTestManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.metricExtensionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}.

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.resourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#timeouts StackMonitoringMetricExtensionsTestManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMetricExtensionsTestManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMetricExtensionsTestManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtensionsTestManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId">test_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix">test_run_metric_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName">test_run_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName">test_run_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput">metric_extension_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `test_run_id`<sup>Required</sup> <a name="test_run_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId"></a>

```python
test_run_id: str
```

- *Type:* str

---

##### `test_run_metric_suffix`<sup>Required</sup> <a name="test_run_metric_suffix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix"></a>

```python
test_run_metric_suffix: str
```

- *Type:* str

---

##### `test_run_namespace_name`<sup>Required</sup> <a name="test_run_namespace_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName"></a>

```python
test_run_namespace_name: str
```

- *Type:* str

---

##### `test_run_resource_group_name`<sup>Required</sup> <a name="test_run_resource_group_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName"></a>

```python
test_run_resource_group_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_extension_id_input`<sup>Optional</sup> <a name="metric_extension_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput"></a>

```python
metric_extension_id_input: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMetricExtensionsTestManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionsTestManagementConfig <a name="StackMonitoringMetricExtensionsTestManagementConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_extension_id: str,
  resource_ids: typing.List[str],
  id: str = None,
  timeouts: StackMonitoringMetricExtensionsTestManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}.

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionsTestManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#timeouts StackMonitoringMetricExtensionsTestManagement#timeouts}

---

### StackMonitoringMetricExtensionsTestManagementTimeouts <a name="StackMonitoringMetricExtensionsTestManagementTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference <a name="StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extensions_test_management

stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMetricExtensionsTestManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>]

---



