# `stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule <a name="`stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResource <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource oci_stack_monitoring_monitored_resources_associate_monitored_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  association_type: str,
  compartment_id: str,
  destination_resource_id: str,
  source_resource_id: str,
  id: str = None,
  timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.associationType">association_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.destinationResourceId">destination_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.associationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}.

---

##### `destination_resource_id`<sup>Required</sup> <a name="destination_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.destinationResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}.

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.sourceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMonitoredResourcesAssociateMonitoredResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails">destination_resource_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails">source_resource_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput">association_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput">destination_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput">source_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId">destination_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `destination_resource_details`<sup>Required</sup> <a name="destination_resource_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails"></a>

```python
destination_resource_details: StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a>

---

##### `source_resource_details`<sup>Required</sup> <a name="source_resource_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails"></a>

```python
source_resource_details: StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a>

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a>

---

##### `association_type_input`<sup>Optional</sup> <a name="association_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput"></a>

```python
association_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `destination_resource_id_input`<sup>Optional</sup> <a name="destination_resource_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput"></a>

```python
destination_resource_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_resource_id_input`<sup>Optional</sup> <a name="source_resource_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput"></a>

```python
source_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>]

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `destination_resource_id`<sup>Required</sup> <a name="destination_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId"></a>

```python
destination_resource_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  association_type: str,
  compartment_id: str,
  destination_resource_id: str,
  source_resource_id: str,
  id: str = None,
  timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType">association_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId">destination_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}.

---

##### `destination_resource_id`<sup>Required</sup> <a name="destination_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId"></a>

```python
destination_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}.

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResource#timeouts}

---

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails()
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails()
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_associate_monitored_resource

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>]

---



