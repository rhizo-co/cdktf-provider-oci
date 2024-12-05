# `autoscalingAutoScalingConfiguration` Submodule <a name="`autoscalingAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingAutoScalingConfiguration <a name="AutoscalingAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_resources: AutoscalingAutoScalingConfigurationAutoScalingResources,
  compartment_id: str,
  policies: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]],
  cool_down_in_seconds: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: AutoscalingAutoScalingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.autoScalingResources">auto_scaling_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | auto_scaling_resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]</code> | policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.coolDownInSeconds">cool_down_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_resources`<sup>Required</sup> <a name="auto_scaling_resources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.autoScalingResources"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

auto_scaling_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#auto_scaling_resources AutoscalingAutoScalingConfiguration#auto_scaling_resources}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.policies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policies AutoscalingAutoScalingConfiguration#policies}

---

##### `cool_down_in_seconds`<sup>Optional</sup> <a name="cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.coolDownInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timeouts AutoscalingAutoScalingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources">put_auto_scaling_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetCoolDownInSeconds">reset_cool_down_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_scaling_resources` <a name="put_auto_scaling_resources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources"></a>

```python
def put_auto_scaling_resources(
  id: str,
  type: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

##### `put_policies` <a name="put_policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies"></a>

```python
def put_policies(
  value: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}.

---

##### `reset_cool_down_in_seconds` <a name="reset_cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetCoolDownInSeconds"></a>

```python
def reset_cool_down_in_seconds() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingAutoScalingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResources">auto_scaling_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference">AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.maxResourceCount">max_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.minResourceCount">min_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList">AutoscalingAutoScalingConfigurationPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference">AutoscalingAutoScalingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResourcesInput">auto_scaling_resources_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSecondsInput">cool_down_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policiesInput">policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSeconds">cool_down_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_resources`<sup>Required</sup> <a name="auto_scaling_resources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResources"></a>

```python
auto_scaling_resources: AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference">AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference</a>

---

##### `max_resource_count`<sup>Required</sup> <a name="max_resource_count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.maxResourceCount"></a>

```python
max_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_count`<sup>Required</sup> <a name="min_resource_count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.minResourceCount"></a>

```python
min_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policies"></a>

```python
policies: AutoscalingAutoScalingConfigurationPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList">AutoscalingAutoScalingConfigurationPoliciesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeouts"></a>

```python
timeouts: AutoscalingAutoScalingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference">AutoscalingAutoScalingConfigurationTimeoutsOutputReference</a>

---

##### `auto_scaling_resources_input`<sup>Optional</sup> <a name="auto_scaling_resources_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResourcesInput"></a>

```python
auto_scaling_resources_input: AutoscalingAutoScalingConfigurationAutoScalingResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cool_down_in_seconds_input`<sup>Optional</sup> <a name="cool_down_in_seconds_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSecondsInput"></a>

```python
cool_down_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policiesInput"></a>

```python
policies_input: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutoscalingAutoScalingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cool_down_in_seconds`<sup>Required</sup> <a name="cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSeconds"></a>

```python
cool_down_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingAutoScalingConfigurationAutoScalingResources <a name="AutoscalingAutoScalingConfigurationAutoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

### AutoscalingAutoScalingConfigurationConfig <a name="AutoscalingAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_resources: AutoscalingAutoScalingConfigurationAutoScalingResources,
  compartment_id: str,
  policies: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]],
  cool_down_in_seconds: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: AutoscalingAutoScalingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.autoScalingResources">auto_scaling_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | auto_scaling_resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]</code> | policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.coolDownInSeconds">cool_down_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_resources`<sup>Required</sup> <a name="auto_scaling_resources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.autoScalingResources"></a>

```python
auto_scaling_resources: AutoscalingAutoScalingConfigurationAutoScalingResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

auto_scaling_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#auto_scaling_resources AutoscalingAutoScalingConfiguration#auto_scaling_resources}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.policies"></a>

```python
policies: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policies AutoscalingAutoScalingConfiguration#policies}

---

##### `cool_down_in_seconds`<sup>Optional</sup> <a name="cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.coolDownInSeconds"></a>

```python
cool_down_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.timeouts"></a>

```python
timeouts: AutoscalingAutoScalingConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timeouts AutoscalingAutoScalingConfiguration#timeouts}

---

### AutoscalingAutoScalingConfigurationPolicies <a name="AutoscalingAutoScalingConfigurationPolicies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies(
  policy_type: str,
  capacity: AutoscalingAutoScalingConfigurationPoliciesCapacity = None,
  display_name: str = None,
  execution_schedule: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  resource_action: AutoscalingAutoScalingConfigurationPoliciesResourceAction = None,
  rules: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPoliciesRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policy_type AutoscalingAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | capacity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.executionSchedule">execution_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | execution_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.resourceAction">resource_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | resource_action block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]</code> | rules block. |

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policy_type AutoscalingAutoScalingConfiguration#policy_type}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.capacity"></a>

```python
capacity: AutoscalingAutoScalingConfigurationPoliciesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#capacity AutoscalingAutoScalingConfiguration#capacity}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `execution_schedule`<sup>Optional</sup> <a name="execution_schedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.executionSchedule"></a>

```python
execution_schedule: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

execution_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#execution_schedule AutoscalingAutoScalingConfiguration#execution_schedule}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `resource_action`<sup>Optional</sup> <a name="resource_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.resourceAction"></a>

```python
resource_action: AutoscalingAutoScalingConfigurationPoliciesResourceAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

resource_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#resource_action AutoscalingAutoScalingConfiguration#resource_action}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPoliciesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#rules AutoscalingAutoScalingConfiguration#rules}

---

### AutoscalingAutoScalingConfigurationPoliciesCapacity <a name="AutoscalingAutoScalingConfigurationPoliciesCapacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity(
  initial: typing.Union[int, float] = None,
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.initial">initial</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}. |

---

##### `initial`<sup>Optional</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.initial"></a>

```python
initial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}.

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}.

---

### AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule <a name="AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule(
  expression: str,
  timezone: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

### AutoscalingAutoScalingConfigurationPoliciesResourceAction <a name="AutoscalingAutoScalingConfigurationPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction(
  action: str,
  action_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}.

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}.

---

### AutoscalingAutoScalingConfigurationPoliciesRules <a name="AutoscalingAutoScalingConfigurationPoliciesRules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules(
  display_name: str,
  action: AutoscalingAutoScalingConfigurationPoliciesRulesAction = None,
  metric: AutoscalingAutoScalingConfigurationPoliciesRulesMetric = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | action block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | metric block. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.action"></a>

```python
action: AutoscalingAutoScalingConfigurationPoliciesRulesAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.metric"></a>

```python
metric: AutoscalingAutoScalingConfigurationPoliciesRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric AutoscalingAutoScalingConfiguration#metric}

---

### AutoscalingAutoScalingConfigurationPoliciesRulesAction <a name="AutoscalingAutoScalingConfigurationPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

### AutoscalingAutoScalingConfigurationPoliciesRulesMetric <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric(
  metric_type: str = None,
  threshold: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.threshold"></a>

```python
threshold: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#threshold AutoscalingAutoScalingConfiguration#threshold}

---

### AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold(
  operator: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

### AutoscalingAutoScalingConfigurationTimeouts <a name="AutoscalingAutoScalingConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference <a name="AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationAutoScalingResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

---


### AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetInitial">reset_initial</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_initial` <a name="reset_initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetInitial"></a>

```python
def reset_initial() -> None
```

##### `reset_max` <a name="reset_max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initialInput">initial_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_input`<sup>Optional</sup> <a name="initial_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initialInput"></a>

```python
initial_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial"></a>

```python
initial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---


### AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---


### AutoscalingAutoScalingConfigurationPoliciesList <a name="AutoscalingAutoScalingConfigurationPoliciesList" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutoscalingAutoScalingConfigurationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]]

---


### AutoscalingAutoScalingConfigurationPoliciesOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule">put_execution_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction">put_resource_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetExecutionSchedule">reset_execution_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetResourceAction">reset_resource_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity` <a name="put_capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity"></a>

```python
def put_capacity(
  initial: typing.Union[int, float] = None,
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `initial`<sup>Optional</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity.parameter.initial"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}.

---

###### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}.

---

##### `put_execution_schedule` <a name="put_execution_schedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule"></a>

```python
def put_execution_schedule(
  expression: str,
  timezone: str,
  type: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}.

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

##### `put_resource_action` <a name="put_resource_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction"></a>

```python
def put_resource_action(
  action: str,
  action_type: str
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}.

---

###### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}.

---

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPoliciesRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]

---

##### `reset_capacity` <a name="reset_capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_execution_schedule` <a name="reset_execution_schedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetExecutionSchedule"></a>

```python
def reset_execution_schedule() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_resource_action` <a name="reset_resource_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetResourceAction"></a>

```python
def reset_resource_action() -> None
```

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference">AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule">execution_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference">AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction">resource_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList">AutoscalingAutoScalingConfigurationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacityInput">capacity_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionScheduleInput">execution_schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceActionInput">resource_action_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity"></a>

```python
capacity: AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference">AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference</a>

---

##### `execution_schedule`<sup>Required</sup> <a name="execution_schedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule"></a>

```python
execution_schedule: AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference">AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_action`<sup>Required</sup> <a name="resource_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction"></a>

```python
resource_action: AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules"></a>

```python
rules: AutoscalingAutoScalingConfigurationPoliciesRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList">AutoscalingAutoScalingConfigurationPoliciesRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacityInput"></a>

```python
capacity_input: AutoscalingAutoScalingConfigurationPoliciesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_schedule_input`<sup>Optional</sup> <a name="execution_schedule_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionScheduleInput"></a>

```python
execution_schedule_input: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `resource_action_input`<sup>Optional</sup> <a name="resource_action_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceActionInput"></a>

```python
resource_action_input: AutoscalingAutoScalingConfigurationPoliciesResourceAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPoliciesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingAutoScalingConfigurationPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>]

---


### AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesResourceAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesRulesAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesList <a name="AutoscalingAutoScalingConfigurationPoliciesRulesList" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutoscalingAutoScalingConfigurationPoliciesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]]

---


### AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetMetricType">reset_metric_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  operator: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

##### `reset_metric_type` <a name="reset_metric_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetMetricType"></a>

```python
def reset_metric_type() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold"></a>

```python
threshold: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetMetric">reset_metric</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction"></a>

```python
def put_action(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str = None,
  threshold: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold = None
) -> None
```

###### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#threshold AutoscalingAutoScalingConfiguration#threshold}

---

##### `reset_action` <a name="reset_action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action"></a>

```python
action: AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric"></a>

```python
metric: AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.actionInput"></a>

```python
action_input: AutoscalingAutoScalingConfigurationPoliciesRulesAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metricInput"></a>

```python
metric_input: AutoscalingAutoScalingConfigurationPoliciesRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingAutoScalingConfigurationPoliciesRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>]

---


### AutoscalingAutoScalingConfigurationTimeoutsOutputReference <a name="AutoscalingAutoScalingConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import autoscaling_auto_scaling_configuration

autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingAutoScalingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>]

---



