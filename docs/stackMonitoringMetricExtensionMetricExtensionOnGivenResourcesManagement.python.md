# `stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement` Submodule <a name="`stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement <a name="StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management oci_stack_monitoring_metric_extension_metric_extension_on_given_resources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_metric_extension_on_given_resources: typing.Union[bool, IResolvable],
  metric_extension_id: str,
  resource_ids: typing.List[str],
  id: str = None,
  timeouts: StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.enableMetricExtensionOnGivenResources">enable_metric_extension_on_given_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#enable_metric_extension_on_given_resources StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#enable_metric_extension_on_given_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#metric_extension_id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#resource_ids StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_metric_extension_on_given_resources`<sup>Required</sup> <a name="enable_metric_extension_on_given_resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.enableMetricExtensionOnGivenResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#enable_metric_extension_on_given_resources StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#enable_metric_extension_on_given_resources}.

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.metricExtensionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#metric_extension_id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#metric_extension_id}.

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.resourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#resource_ids StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#timeouts StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#create StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#delete StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#update StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.enableMetricExtensionOnGivenResourcesInput">enable_metric_extension_on_given_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.metricExtensionIdInput">metric_extension_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.enableMetricExtensionOnGivenResources">enable_metric_extension_on_given_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference</a>

---

##### `enable_metric_extension_on_given_resources_input`<sup>Optional</sup> <a name="enable_metric_extension_on_given_resources_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.enableMetricExtensionOnGivenResourcesInput"></a>

```python
enable_metric_extension_on_given_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_extension_id_input`<sup>Optional</sup> <a name="metric_extension_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.metricExtensionIdInput"></a>

```python
metric_extension_id_input: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>]

---

##### `enable_metric_extension_on_given_resources`<sup>Required</sup> <a name="enable_metric_extension_on_given_resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.enableMetricExtensionOnGivenResources"></a>

```python
enable_metric_extension_on_given_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig <a name="StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_metric_extension_on_given_resources: typing.Union[bool, IResolvable],
  metric_extension_id: str,
  resource_ids: typing.List[str],
  id: str = None,
  timeouts: StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.enableMetricExtensionOnGivenResources">enable_metric_extension_on_given_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#enable_metric_extension_on_given_resources StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#enable_metric_extension_on_given_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#metric_extension_id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#resource_ids StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_metric_extension_on_given_resources`<sup>Required</sup> <a name="enable_metric_extension_on_given_resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.enableMetricExtensionOnGivenResources"></a>

```python
enable_metric_extension_on_given_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#enable_metric_extension_on_given_resources StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#enable_metric_extension_on_given_resources}.

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#metric_extension_id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#metric_extension_id}.

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#resource_ids StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#id StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#timeouts StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#timeouts}

---

### StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts <a name="StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#create StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#delete StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#update StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#create StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#delete StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension_metric_extension_on_given_resources_management#update StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference <a name="StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension_metric_extension_on_given_resources_management

stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagement.StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts">StackMonitoringMetricExtensionMetricExtensionOnGivenResourcesManagementTimeouts</a>]

---



