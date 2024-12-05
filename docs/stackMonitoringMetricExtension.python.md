# `stackMonitoringMetricExtension` Submodule <a name="`stackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtension <a name="StackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection_recurrences: str,
  compartment_id: str,
  display_name: str,
  metric_list: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]],
  name: str,
  query_properties: StackMonitoringMetricExtensionQueryProperties,
  resource_type: str,
  description: str = None,
  id: str = None,
  publish_trigger: typing.Union[bool, IResolvable] = None,
  timeouts: StackMonitoringMetricExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.collectionRecurrences">collection_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.metricList">metric_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]</code> | metric_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.publishTrigger">publish_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_recurrences`<sup>Required</sup> <a name="collection_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.collectionRecurrences"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.metricList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]

metric_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_list StackMonitoringMetricExtension#metric_list}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.queryProperties"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#query_properties StackMonitoringMetricExtension#query_properties}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publish_trigger`<sup>Optional</sup> <a name="publish_trigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.publishTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#timeouts StackMonitoringMetricExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList">put_metric_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties">put_query_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger">reset_publish_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_list` <a name="put_metric_list" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList"></a>

```python
def put_metric_list(
  value: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]

---

##### `put_query_properties` <a name="put_query_properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties"></a>

```python
def put_query_properties(
  collection_method: str,
  arguments: str = None,
  auto_row_prefix: str = None,
  command: str = None,
  delimiter: str = None,
  identity_metric: str = None,
  in_param_details: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]] = None,
  is_metric_service_enabled: typing.Union[bool, IResolvable] = None,
  jmx_attributes: str = None,
  managed_bean_query: str = None,
  out_param_details: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails = None,
  script_details: StackMonitoringMetricExtensionQueryPropertiesScriptDetails = None,
  sql_details: StackMonitoringMetricExtensionQueryPropertiesSqlDetails = None,
  sql_type: str = None,
  starts_with: str = None
) -> None
```

###### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.collectionMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}.

---

###### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.arguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}.

---

###### `auto_row_prefix`<sup>Optional</sup> <a name="auto_row_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.autoRowPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}.

---

###### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.command"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}.

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}.

---

###### `identity_metric`<sup>Optional</sup> <a name="identity_metric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.identityMetric"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}.

---

###### `in_param_details`<sup>Optional</sup> <a name="in_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.inParamDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]

in_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_details StackMonitoringMetricExtension#in_param_details}

---

###### `is_metric_service_enabled`<sup>Optional</sup> <a name="is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.isMetricServiceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}.

---

###### `jmx_attributes`<sup>Optional</sup> <a name="jmx_attributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.jmxAttributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}.

---

###### `managed_bean_query`<sup>Optional</sup> <a name="managed_bean_query" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.managedBeanQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}.

---

###### `out_param_details`<sup>Optional</sup> <a name="out_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.outParamDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

out_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_details StackMonitoringMetricExtension#out_param_details}

---

###### `script_details`<sup>Optional</sup> <a name="script_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.scriptDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

script_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_details StackMonitoringMetricExtension#script_details}

---

###### `sql_details`<sup>Optional</sup> <a name="sql_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.sqlDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_details StackMonitoringMetricExtension#sql_details}

---

###### `sql_type`<sup>Optional</sup> <a name="sql_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.sqlType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}.

---

###### `starts_with`<sup>Optional</sup> <a name="starts_with" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.startsWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_publish_trigger` <a name="reset_publish_trigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger"></a>

```python
def reset_publish_trigger() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMetricExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources">enabled_on_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount">enabled_on_resources_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList">metric_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput">collection_recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput">metric_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput">publish_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput">query_properties_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences">collection_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger">publish_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `enabled_on_resources`<sup>Required</sup> <a name="enabled_on_resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources"></a>

```python
enabled_on_resources: StackMonitoringMetricExtensionEnabledOnResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `enabled_on_resources_count`<sup>Required</sup> <a name="enabled_on_resources_count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```python
enabled_on_resources_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList"></a>

```python
metric_list: StackMonitoringMetricExtensionMetricListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a>

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties"></a>

```python
query_properties: StackMonitoringMetricExtensionQueryPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a>

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `collection_recurrences_input`<sup>Optional</sup> <a name="collection_recurrences_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput"></a>

```python
collection_recurrences_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_list_input`<sup>Optional</sup> <a name="metric_list_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput"></a>

```python
metric_list_input: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publish_trigger_input`<sup>Optional</sup> <a name="publish_trigger_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput"></a>

```python
publish_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_properties_input`<sup>Optional</sup> <a name="query_properties_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput"></a>

```python
query_properties_input: StackMonitoringMetricExtensionQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMetricExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>]

---

##### `collection_recurrences`<sup>Required</sup> <a name="collection_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences"></a>

```python
collection_recurrences: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish_trigger`<sup>Required</sup> <a name="publish_trigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger"></a>

```python
publish_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionConfig <a name="StackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection_recurrences: str,
  compartment_id: str,
  display_name: str,
  metric_list: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]],
  name: str,
  query_properties: StackMonitoringMetricExtensionQueryProperties,
  resource_type: str,
  description: str = None,
  id: str = None,
  publish_trigger: typing.Union[bool, IResolvable] = None,
  timeouts: StackMonitoringMetricExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences">collection_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList">metric_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]</code> | metric_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger">publish_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_recurrences`<sup>Required</sup> <a name="collection_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences"></a>

```python
collection_recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList"></a>

```python
metric_list: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]

metric_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_list StackMonitoringMetricExtension#metric_list}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties"></a>

```python
query_properties: StackMonitoringMetricExtensionQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#query_properties StackMonitoringMetricExtension#query_properties}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publish_trigger`<sup>Optional</sup> <a name="publish_trigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger"></a>

```python
publish_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMetricExtensionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#timeouts StackMonitoringMetricExtension#timeouts}

---

### StackMonitoringMetricExtensionEnabledOnResources <a name="StackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources()
```


### StackMonitoringMetricExtensionMetricListStruct <a name="StackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct(
  data_type: str,
  name: str,
  compute_expression: str = None,
  display_name: str = None,
  is_dimension: typing.Union[bool, IResolvable] = None,
  is_hidden: typing.Union[bool, IResolvable] = None,
  metric_category: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression">compute_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension">is_dimension</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory">metric_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}. |

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `compute_expression`<sup>Optional</sup> <a name="compute_expression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression"></a>

```python
compute_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `is_dimension`<sup>Optional</sup> <a name="is_dimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension"></a>

```python
is_dimension: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}.

---

##### `is_hidden`<sup>Optional</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}.

---

##### `metric_category`<sup>Optional</sup> <a name="metric_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory"></a>

```python
metric_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}.

---

### StackMonitoringMetricExtensionQueryProperties <a name="StackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties(
  collection_method: str,
  arguments: str = None,
  auto_row_prefix: str = None,
  command: str = None,
  delimiter: str = None,
  identity_metric: str = None,
  in_param_details: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]] = None,
  is_metric_service_enabled: typing.Union[bool, IResolvable] = None,
  jmx_attributes: str = None,
  managed_bean_query: str = None,
  out_param_details: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails = None,
  script_details: StackMonitoringMetricExtensionQueryPropertiesScriptDetails = None,
  sql_details: StackMonitoringMetricExtensionQueryPropertiesSqlDetails = None,
  sql_type: str = None,
  starts_with: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod">collection_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments">arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix">auto_row_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command">command</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric">identity_metric</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails">in_param_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]</code> | in_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled">is_metric_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes">jmx_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery">managed_bean_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails">out_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | out_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails">script_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | script_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails">sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType">sql_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith">starts_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}. |

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}.

---

##### `auto_row_prefix`<sup>Optional</sup> <a name="auto_row_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix"></a>

```python
auto_row_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command"></a>

```python
command: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}.

---

##### `identity_metric`<sup>Optional</sup> <a name="identity_metric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric"></a>

```python
identity_metric: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}.

---

##### `in_param_details`<sup>Optional</sup> <a name="in_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails"></a>

```python
in_param_details: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]

in_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_details StackMonitoringMetricExtension#in_param_details}

---

##### `is_metric_service_enabled`<sup>Optional</sup> <a name="is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled"></a>

```python
is_metric_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}.

---

##### `jmx_attributes`<sup>Optional</sup> <a name="jmx_attributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes"></a>

```python
jmx_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}.

---

##### `managed_bean_query`<sup>Optional</sup> <a name="managed_bean_query" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery"></a>

```python
managed_bean_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}.

---

##### `out_param_details`<sup>Optional</sup> <a name="out_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails"></a>

```python
out_param_details: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

out_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_details StackMonitoringMetricExtension#out_param_details}

---

##### `script_details`<sup>Optional</sup> <a name="script_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails"></a>

```python
script_details: StackMonitoringMetricExtensionQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

script_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_details StackMonitoringMetricExtension#script_details}

---

##### `sql_details`<sup>Optional</sup> <a name="sql_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails"></a>

```python
sql_details: StackMonitoringMetricExtensionQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_details StackMonitoringMetricExtension#sql_details}

---

##### `sql_type`<sup>Optional</sup> <a name="sql_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}.

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}.

---

### StackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails(
  in_param_position: typing.Union[int, float],
  in_param_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition">in_param_position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue">in_param_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}. |

---

##### `in_param_position`<sup>Required</sup> <a name="in_param_position" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition"></a>

```python
in_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}.

---

##### `in_param_value`<sup>Required</sup> <a name="in_param_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue"></a>

```python
in_param_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}.

---

### StackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails(
  out_param_position: typing.Union[int, float],
  out_param_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition">out_param_position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType">out_param_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}. |

---

##### `out_param_position`<sup>Required</sup> <a name="out_param_position" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition"></a>

```python
out_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}.

---

##### `out_param_type`<sup>Required</sup> <a name="out_param_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType"></a>

```python
out_param_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}.

---

### StackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails(
  content: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

### StackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails(
  content: str,
  script_file_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName">script_file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `script_file_name`<sup>Optional</sup> <a name="script_file_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName"></a>

```python
script_file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}.

---

### StackMonitoringMetricExtensionTimeouts <a name="StackMonitoringMetricExtensionTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionEnabledOnResourcesList <a name="StackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="StackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMetricExtensionEnabledOnResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a>

---


### StackMonitoringMetricExtensionMetricListStructList <a name="StackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMetricExtensionMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionMetricListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]]

---


### StackMonitoringMetricExtensionMetricListStructOutputReference <a name="StackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression">reset_compute_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension">reset_is_dimension</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden">reset_is_hidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory">reset_metric_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_expression` <a name="reset_compute_expression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression"></a>

```python
def reset_compute_expression() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_is_dimension` <a name="reset_is_dimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension"></a>

```python
def reset_is_dimension() -> None
```

##### `reset_is_hidden` <a name="reset_is_hidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden"></a>

```python
def reset_is_hidden() -> None
```

##### `reset_metric_category` <a name="reset_metric_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory"></a>

```python
def reset_metric_category() -> None
```

##### `reset_unit` <a name="reset_unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput">compute_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput">is_dimension_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput">is_hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput">metric_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">compute_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">is_dimension</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">metric_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_expression_input`<sup>Optional</sup> <a name="compute_expression_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput"></a>

```python
compute_expression_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `is_dimension_input`<sup>Optional</sup> <a name="is_dimension_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput"></a>

```python
is_dimension_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hidden_input`<sup>Optional</sup> <a name="is_hidden_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput"></a>

```python
is_hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_category_input`<sup>Optional</sup> <a name="metric_category_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput"></a>

```python
metric_category_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `compute_expression`<sup>Required</sup> <a name="compute_expression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```python
compute_expression: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_dimension`<sup>Required</sup> <a name="is_dimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```python
is_dimension: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_category`<sup>Required</sup> <a name="metric_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```python
metric_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMetricExtensionMetricListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>]

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput">in_param_position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput">in_param_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">in_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">in_param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_param_position_input`<sup>Optional</sup> <a name="in_param_position_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput"></a>

```python
in_param_position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_param_value_input`<sup>Optional</sup> <a name="in_param_value_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput"></a>

```python
in_param_value_input: str
```

- *Type:* str

---

##### `in_param_position`<sup>Required</sup> <a name="in_param_position" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```python
in_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_param_value`<sup>Required</sup> <a name="in_param_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```python
in_param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMetricExtensionQueryPropertiesInParamDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]

---


### StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput">out_param_position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput">out_param_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">out_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">out_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `out_param_position_input`<sup>Optional</sup> <a name="out_param_position_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput"></a>

```python
out_param_position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `out_param_type_input`<sup>Optional</sup> <a name="out_param_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput"></a>

```python
out_param_type_input: str
```

- *Type:* str

---

##### `out_param_position`<sup>Required</sup> <a name="out_param_position" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```python
out_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `out_param_type`<sup>Required</sup> <a name="out_param_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```python
out_param_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails">put_in_param_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails">put_out_param_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails">put_script_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails">put_sql_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix">reset_auto_row_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric">reset_identity_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails">reset_in_param_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled">reset_is_metric_service_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes">reset_jmx_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery">reset_managed_bean_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails">reset_out_param_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails">reset_script_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails">reset_sql_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType">reset_sql_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_in_param_details` <a name="put_in_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails"></a>

```python
def put_in_param_details(
  value: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]

---

##### `put_out_param_details` <a name="put_out_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails"></a>

```python
def put_out_param_details(
  out_param_position: typing.Union[int, float],
  out_param_type: str
) -> None
```

###### `out_param_position`<sup>Required</sup> <a name="out_param_position" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails.parameter.outParamPosition"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}.

---

###### `out_param_type`<sup>Required</sup> <a name="out_param_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails.parameter.outParamType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}.

---

##### `put_script_details` <a name="put_script_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails"></a>

```python
def put_script_details(
  content: str,
  name: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

###### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `put_sql_details` <a name="put_sql_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails"></a>

```python
def put_sql_details(
  content: str,
  script_file_name: str = None
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

###### `script_file_name`<sup>Optional</sup> <a name="script_file_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails.parameter.scriptFileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}.

---

##### `reset_arguments` <a name="reset_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_auto_row_prefix` <a name="reset_auto_row_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix"></a>

```python
def reset_auto_row_prefix() -> None
```

##### `reset_command` <a name="reset_command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_delimiter` <a name="reset_delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_identity_metric` <a name="reset_identity_metric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric"></a>

```python
def reset_identity_metric() -> None
```

##### `reset_in_param_details` <a name="reset_in_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails"></a>

```python
def reset_in_param_details() -> None
```

##### `reset_is_metric_service_enabled` <a name="reset_is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled"></a>

```python
def reset_is_metric_service_enabled() -> None
```

##### `reset_jmx_attributes` <a name="reset_jmx_attributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes"></a>

```python
def reset_jmx_attributes() -> None
```

##### `reset_managed_bean_query` <a name="reset_managed_bean_query" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery"></a>

```python
def reset_managed_bean_query() -> None
```

##### `reset_out_param_details` <a name="reset_out_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails"></a>

```python
def reset_out_param_details() -> None
```

##### `reset_script_details` <a name="reset_script_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails"></a>

```python
def reset_script_details() -> None
```

##### `reset_sql_details` <a name="reset_sql_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails"></a>

```python
def reset_sql_details() -> None
```

##### `reset_sql_type` <a name="reset_sql_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType"></a>

```python
def reset_sql_type() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">in_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">out_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">script_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput">arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput">auto_row_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput">collection_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput">command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput">identity_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput">in_param_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput">is_metric_service_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput">jmx_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput">managed_bean_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput">out_param_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput">script_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput">sql_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput">sql_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">auto_row_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">identity_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">is_metric_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">jmx_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">managed_bean_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">sql_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_param_details`<sup>Required</sup> <a name="in_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```python
in_param_details: StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `out_param_details`<sup>Required</sup> <a name="out_param_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```python
out_param_details: StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a>

---

##### `script_details`<sup>Required</sup> <a name="script_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```python
script_details: StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a>

---

##### `sql_details`<sup>Required</sup> <a name="sql_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```python
sql_details: StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput"></a>

```python
arguments_input: str
```

- *Type:* str

---

##### `auto_row_prefix_input`<sup>Optional</sup> <a name="auto_row_prefix_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput"></a>

```python
auto_row_prefix_input: str
```

- *Type:* str

---

##### `collection_method_input`<sup>Optional</sup> <a name="collection_method_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput"></a>

```python
collection_method_input: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput"></a>

```python
command_input: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `identity_metric_input`<sup>Optional</sup> <a name="identity_metric_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput"></a>

```python
identity_metric_input: str
```

- *Type:* str

---

##### `in_param_details_input`<sup>Optional</sup> <a name="in_param_details_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput"></a>

```python
in_param_details_input: typing.Union[IResolvable, typing.List[StackMonitoringMetricExtensionQueryPropertiesInParamDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>]]

---

##### `is_metric_service_enabled_input`<sup>Optional</sup> <a name="is_metric_service_enabled_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput"></a>

```python
is_metric_service_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jmx_attributes_input`<sup>Optional</sup> <a name="jmx_attributes_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput"></a>

```python
jmx_attributes_input: str
```

- *Type:* str

---

##### `managed_bean_query_input`<sup>Optional</sup> <a name="managed_bean_query_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput"></a>

```python
managed_bean_query_input: str
```

- *Type:* str

---

##### `out_param_details_input`<sup>Optional</sup> <a name="out_param_details_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput"></a>

```python
out_param_details_input: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---

##### `script_details_input`<sup>Optional</sup> <a name="script_details_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput"></a>

```python
script_details_input: StackMonitoringMetricExtensionQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---

##### `sql_details_input`<sup>Optional</sup> <a name="sql_details_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput"></a>

```python
sql_details_input: StackMonitoringMetricExtensionQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---

##### `sql_type_input`<sup>Optional</sup> <a name="sql_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput"></a>

```python
sql_type_input: str
```

- *Type:* str

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `auto_row_prefix`<sup>Required</sup> <a name="auto_row_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```python
auto_row_prefix: str
```

- *Type:* str

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `identity_metric`<sup>Required</sup> <a name="identity_metric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```python
identity_metric: str
```

- *Type:* str

---

##### `is_metric_service_enabled`<sup>Required</sup> <a name="is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```python
is_metric_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jmx_attributes`<sup>Required</sup> <a name="jmx_attributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```python
jmx_attributes: str
```

- *Type:* str

---

##### `managed_bean_query`<sup>Required</sup> <a name="managed_bean_query" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```python
managed_bean_query: str
```

- *Type:* str

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMetricExtensionQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---


### StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMetricExtensionQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName">reset_script_file_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_script_file_name` <a name="reset_script_file_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName"></a>

```python
def reset_script_file_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput">script_file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">script_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `script_file_name_input`<sup>Optional</sup> <a name="script_file_name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput"></a>

```python
script_file_name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `script_file_name`<sup>Required</sup> <a name="script_file_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```python
script_file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMetricExtensionQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---


### StackMonitoringMetricExtensionTimeoutsOutputReference <a name="StackMonitoringMetricExtensionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_metric_extension

stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMetricExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>]

---



